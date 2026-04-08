import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn("h-full", "font-sans", inter.variable)} suppressHydrationWarning>
      <body className="min-h-full antialiased">
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
