import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactJsonPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = { name: 120, email: 200, subject: 200, message: 5000 };

function validate(body: unknown): ContactJsonPayload | null {
    if (!body || typeof body !== "object") {
        return null;
    }
    const { name, email, subject, message } = body as Record<string, unknown>;

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof subject !== "string" ||
        typeof message !== "string"
    ) {
        return null;
    }

    const trimmed = {
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
    } as ContactJsonPayload;

    if (!trimmed.name || !trimmed.email || !trimmed.subject || !trimmed.message) {
        return null;
    }

    if (
        trimmed.name.length > MAX_LENGTHS.name ||
        trimmed.email.length > MAX_LENGTHS.email ||
        trimmed.subject.length > MAX_LENGTHS.subject ||
        trimmed.message.length > MAX_LENGTHS.message
    ) {
        return null;
    }

    if (!EMAIL_REGEX.test(trimmed.email)) {
        return null
    };

    return trimmed;
}

export async function POST(request: Request) {
    const apiKey = process.env.SENDGRID_API_KEY;
    const templateId = process.env.SENDGRID_TEMPLATE_ID;
    const fromEmail = process.env.SENDGRID_FROM_EMAIL;
    const toEmail = process.env.SENDGRID_TO_EMAIL;

    if (!apiKey || !templateId || !fromEmail || !toEmail) {
        console.error("Contact API: missing SendGrid environment variables");
        return NextResponse.json(
            { error: "Email service is not configured" },
            { status: 500 }
        );
    }

    let json: unknown;
    try {
        json = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const payload = validate(json);
    if (!payload) {
        return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const sgResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
        from: { email: fromEmail, name: "Portfolio Contact" },
        reply_to: { email: payload.email, name: payload.name },
        personalizations: [
            {
            to: [{ email: toEmail }],
            dynamic_template_data: {
                name: payload.name,
                email: payload.email,
                subject: payload.subject,
                message: payload.message,
            },
            },
        ],
        template_id: templateId,
        }),
    });

    if (!sgResponse.ok) {
        const detail = await sgResponse.text().catch(() => "");
        console.error("SendGrid error", sgResponse.status, detail);
        return NextResponse.json(
        { error: "Failed to send message" },
        { status: 502 }
        );
    }

    return NextResponse.json({ ok: true });
}