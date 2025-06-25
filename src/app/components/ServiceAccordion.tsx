// components/ServiceAccordion.tsx
'use client';
import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import Image from 'next/image';

interface ServiceItem {
  title: string;
  description: string;
  iconSrc?: string;
  iconAlt?: string;
}

interface ServiceAccordionProps {
  iconSrc: string;
  iconAlt?: string;
  title: string;
  summary: string;
  description: string;
  services: ServiceItem[];
  learnMoreLink?: string;
  defaultIconSrc?: string;
}

export default function ServiceAccordion({
  iconSrc,
  iconAlt = "Service icon",
  title,
  summary,
  description,
  services,
  learnMoreLink = "#",
  defaultIconSrc = "/default-icon.svg"
}: ServiceAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-10">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <div className='flex justify-center align-middle'>
            <h3 className="font-semibold md:text-2xl text-[#4A90A4] text-xs">{title}</h3>
            <p className="text-gray-500 md:text-2xl pl-2 text-xs">{summary}</p>
          </div>
        </div>
        <div>{isOpen ? <X className="text-gray-400" /> : <Plus className="text-gray-400" />}</div>
      </div>

      {isOpen && (
        <div className="mt-6 pl-14 animate-fadeIn">
          <p className="text-gray-700 mb-6">
            {description} {learnMoreLink && (
              <a href={learnMoreLink} className="text-blue-600 hover:underline">Find out More</a>
            )}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 pl-1">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src={service.iconSrc || defaultIconSrc}
                    alt={service.iconAlt || "Service feature icon"}
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{service.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}