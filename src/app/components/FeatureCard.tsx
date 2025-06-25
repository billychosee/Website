import React from 'react';
import Link from 'next/link';

type FeatureCardProps = {
  icon: React.ElementType | string;
  title: string;
  description: string;
  href: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, href }) => {
  return (
    <Link href={href} className="no-underline group">
    <div className="flex flex-col items-center p-6 text-center transition bg-white rounded-lg shadow-2xl hover:shadow-md gap-y-10">
      <div className="mb-4">
        {typeof Icon === 'string' ? (
          <img src={Icon} alt={title} className="w-16 h-16 mx-auto" />
        ) : (
          <Icon className="w-16 h-16 text-gray-400 mx-auto group-hover:text-[#8DC440] transition-colors duration-300" />
        )}
      </div>
      <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
    </Link>
  );
};

export default FeatureCard;