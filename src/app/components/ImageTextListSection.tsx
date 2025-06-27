import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

interface ImageTextListSectionProps {
  heading: string;
  paragraph: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  listItems: string[];
}

export const ImageTextListSection: React.FC<ImageTextListSectionProps> = ({
  heading,
  paragraph,
  imageSrc,
  imageAlt,
  imageWidth = 500,
  imageHeight = 500,
  listItems,
}) => {
  return (
    <section className="container flex flex-col items-center justify-between px-6 py-16 md:flex-row md:py-24">
      {/* Image */}
      <div className="md:w-1/2 h-96 flex items-center justify-center order-1 md:order-none">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="rounded-2xl object-contain"
          priority
        />
      </div>

      {/* Text */}
      <div className="space-y-4 md:w-1/2 pb-4">
        <h2 className="text-3xl font-bold text-gray-800">{heading}</h2>
        <p className="text-gray-600 text-sm lg:text-xs xl:text-sm">{paragraph}</p>
        <div className="border-b border-black pb-4"></div>
        <ul className="space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm lg:text-xs xl:text-sm text-gray-800">
              <CheckCircle className="text-green-600 w-5 h-5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
