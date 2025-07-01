// app/services/page.tsx
import Image from 'next/image';
import FeatureCard from '../components/FeatureCard';
import { FaNetworkWired, FaServer, FaVoicemail, FaLaptopCode, FaShieldAlt, FaCogs } from 'react-icons/fa';
import CustomButton from '../components/CustomButton';
import CompanyProfile from '../components/CompanyProfile';
import Footer from '../components/Footer';

export const metadata = {
  title: 'IT Services & Solutions | Business Technology Experts',
  description: 'Comprehensive IT services including cloud infrastructure, cybersecurity, managed IT, and VoIP solutions tailored to your business needs.',
  keywords: 'IT services, cloud solutions, cybersecurity, managed IT, VoIP, business technology, IT consultancy',
  openGraph: {
    title: 'Professional IT Services for Your Business',
    description: 'Matching technology to business needs with our expert IT services and solutions.',
    url: "https://smatechgroup.netlify.app/services/ai-and-machine-learning",
    type: 'website',
  },
};

export default function ServicesPage() {
  
  return (
    <div className="bg-white">
      {/* Hero Header with Background Image */}
      <header className="relative max-h-screen px-6 py-32 text-left md:px-24 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services_bg.svg"
            alt="IT services and technology solutions background"
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
                alt="IT services icon"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-[#8DC440] text-sm lg:text-2xl font-bold xl:text-2xl">
              Our Technology Services
            </h1>
          </div>

          {/* Main heading and descriptive text */}
          <h2 className="text-3xl font-bold text-white xl:text-5xl lg:text-4xl">
            Matching Technology to Business Needs
          </h2>
          <p className="text-sm lg:text-xs xl:text-sm">
            We serve industries across the board and represent the security and compliance of countless companies. 
            We do this through a focus on quality IT services and solutions.
          </p>
          <p className="text-sm text-gray-400 lg:text-xs xl:text-xs">
            Stop worrying about technology problems. Focus on your business. Let us provide the IT support you deserve.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className='px-5 md:px-24'>
        <div className="flex items-center justify-center px-6 pt-6 text-center text-black bg-white md:pt-20">
          <div className="flex flex-col items-center max-w-4xl space-y-6">
            <p className="!text-sm !font-bold !text-[#8DC440] pt-20 md:pt-0">OUR AREAS OF EXPERTISE</p>
            <h1 className="!text-[#4A90A4] !text-3xl xl:!text-[53px] !font-bold lg:!text-4xl">
              Technology Services Built For Your Business
            </h1>
            <p className="max-w-2xl">
              We understand and support all areas of your IT systems – from back-end infrastructure to front-end personal productivity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 p-8 sm:grid-cols-2 md:grid-cols-3">
          <FeatureCard
            icon={FaNetworkWired}
            title="Connectivity Voice & Data"
            description="Powerful server infrastructure, advanced computers, and modern IP telephony that transform business communication."
            href="/services/connectivity"
          />
          <FeatureCard
            icon={FaServer}
            title="Cloud Infrastructure"
            description="Scalable, secure, and reliable cloud solutions that grow with your business, ensuring 24/7 uptime and seamless performance."
            href="/services/cloud-infrastructure"
          />
          <FeatureCard
            icon={FaVoicemail}
            title="Smart VoIP Solutions"
            description="Modern communication platforms integrated with CRM, AI, and real-time analytics to empower your team and customers."
            href="/services/voip"
          />
          <FeatureCard
            icon={FaLaptopCode}
            title="Managed IT Services"
            description="Comprehensive IT support and system maintenance to keep your business running smoothly, securely, and without interruption."
            href="/services/managed-it"
          />
          <FeatureCard
            icon={FaShieldAlt}
            title="Cybersecurity"
            description="Advanced threat protection, monitoring, and response to safeguard your digital assets from evolving cyber risks."
            href="/services/cybersecurity"
          />
          <FeatureCard
            icon={FaCogs}
            title="IT Consultancy"
            description="Strategic guidance and technology planning to align your IT roadmap with your business goals and maximize ROI."
            href="/services/consultancy"
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section>
        <div className="px-5 md:px-24 !pt-20 space-y-6 md:space-y-5 text-black flex items-center justify-center text-center flex-col bg-gradient-to-t from-[#E8F7FD] to-white">
          <h2 className="text-[#8DC440] text-sm lg:text-2xl font-bold xl:text-4xl">Let&apos;s Get Started</h2>
          <h1 className="text-black text-3xl xl:text-[57px] font-bold lg:text-4xl">Still Have Questions About Our IT Services?</h1>
          <p className="max-w-2xl">Don&apos;t stress over technical issues, concentrate on your business. We&apos;ll give you the IT support you need.</p>
          <div className="w-full">
            <CustomButton variant="primary">
              Speak to an IT Expert
            </CustomButton>
            <div className="w-full h-2 mt-10 bg-black md:mt-20"/>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#E8F7FD] pt-0">
          <CompanyProfile
            heading="Outreach by the Numbers"
            subheading="The energy of a startup with well-established IT expertise"
            stats={[
              { end: 45, label: 'Certified Microsoft Professionals' },
              { end: 68, label: 'Episerver Certified Developers' },
              { end: 15, label: '$0 to $15M in revenue in under 3 years' },
            ]}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}