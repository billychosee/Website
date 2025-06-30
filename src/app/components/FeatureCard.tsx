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
    <div className="flex flex-col items-center p-10 text-center transition bg-white rounded-lg shadow-2xl hover:shadow-md gap-y-5">
      <div>
        {typeof Icon === 'string' ? (
          <img src={Icon} alt={title} className="w-16 h-16 mx-auto" />
        ) : (
          <Icon className="w-16 h-16 text-[#4A90A4] mx-auto group-hover:text-[#8DC440] transition-colors duration-300" />
        )}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
    </Link>
  );
};

export default FeatureCard;