import Image from "next/image";

interface ProjectGalleryProps {
    images: string[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
    return (
        <div className="grid gap-6 sm:grid-cols-3">
            {images.map((src, index) => (
                <figure key={`${index}`}>
                    <Image
                        src={src}
                        alt={`Gallery ${index}`}
                        width={200}
                        height={192}
                        unoptimized
                        className="w-full object-cover rounded-lg"
                    />
                </figure>
            ))}
        </div>
    );
}