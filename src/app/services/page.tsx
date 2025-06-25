// app/services/page.tsx
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Header with Background Image */}
      <div className="relative py-32 px-6 md:px-24 lg:px-24 text-left max-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services_bg.svg"
            alt="Services background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/80 md:bg-black/0"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-3xl space-y-10">
          {/* Flex row for icon and title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-10 h-10">
              <Image
                src="/services_icon.svg"
                alt="services icon"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-[#8DC440] text-sm lg:text-2xl font-bold xl:text-2xl">
              Our Services
            </h1>
          </div>

          {/* Additional text below */}
          <h2 className="text-white
           text-3xl xl:text-5xl font-bold lg:text-4xl">
            Matching technology to business needs
          </h2>
          <p className="text-sm lg:text-xs xl:text-sm">
            We serve industries across the board and represent the security and <br /> compliance of countless companies. We do this through a  <br />focus on quality services.
          </p>
          <p className="text-sm lg:text-xs xl:text-xs text-gray-400">
            Stop worrying about technology problems. Focus on your business. Let us provide <br /> the support you deserve.
          </p>
        </div>
      </div>


    </div>
  );
}