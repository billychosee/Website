import Image from 'next/image';
import { ReactNode } from 'react';

interface IconItem {
  icon: ReactNode;
  title: string;
  text: string;
}

interface ImageTextIconListSectionProps {
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  iconItems: IconItem[];
}

export const ImageTextIconListSection: React.FC<ImageTextIconListSectionProps> = ({
  heading,
  description,
  imageSrc,
  imageAlt,
  imageWidth = 500,
  imageHeight = 500,
  iconItems,
}) => {
  return (
    <section className="flex flex-col items-center justify-between w-full px-5 py-16 md:flex-row-reverse md:py-24 md:px-24">

      <div className="flex my-5 overflow-hidden md:w-1/2 h-96 rounded-xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      
      {/* text block */}
      <div className="space-y-4 md:w-1/2 md:pl-12"> 
        <h2 className="text-3xl font-bold text-gray-900">{heading}</h2>
        <p className="text-base text-gray-600">{description}</p>
        <div className="my-6 border-b border-gray-300"></div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {iconItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-3 text-4xl text-[#4A90A4]">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 text-md">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};