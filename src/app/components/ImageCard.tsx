import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  caption: string;
}

export default function ImageCard({ src, alt, caption }: ImageCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 rounded-xl overflow-hidden border-2 border-gray-300">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <p className="mt-2 text-center text-gray-700 font-semibold">{caption}</p>
    </div>
  );
}
