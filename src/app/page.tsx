"use client";
import Head from "next/head";
import Footer from "./components/Footer";
import { useState, useRef, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRightDash, ShieldCheck } from "lucide-react";
import Image from "next/image";
import IndustryCard from "./components/IndustryCard";
import LogoSlider from "./components/LogoSlider";
import MissionStats from "./components/MissionStats";
import CustomButton from "./components/CustomButton";
import ServiceAccordion from './components/ServiceAccordion';
import { FaStopwatch } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import Link from 'next/link';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseenter', () => setIsHovering(true));
      heroElement.addEventListener('mouseleave', () => setIsHovering(false));
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseenter', () => setIsHovering(true));
        heroElement.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, []);

  // Calculate image position based on mouse position
  const imageStyle = {
    transform: `translate(
      ${(mousePosition.x - (heroRef.current?.offsetWidth || 0) / 2) * 0.05}px,
      ${(mousePosition.y - (heroRef.current?.offsetHeight || 0) / 2) * 0.05}px
    )`,
    transition: 'transform 0.5s ease-out'
  };

  return (
    <>
      <Head>
        <title>SmaTech Group - Innovative Tech Solutions</title>
        <meta
          name="description"
          content="SmaTech provides cutting-edge technology solutions to grow your business."
        />
        <meta name="keywords" content="technology, IT solutions, software, innovation, Harare, Zimbabwe, Africa " />
        <meta name="author" content="SmaTech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-white">
        <div   ref={heroRef}
        className="relative flex items-center justify-center min-h-screen px-6 py-24 overflow-hidden bg-gradient-to-t from-[#E8F7FD] to-white md:min-h-full lg:min-h-screen">
          
       
        {/* Background image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover opacity-50"
          style={{ backgroundImage: "url('/bg1.png')" }}
        />
        
        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-between w-full max-w-6xl px-6 mx-auto">
          {/* Main content row */}
          <div className="flex flex-col items-center justify-between w-full md:flex-row">
            {/* Text content */}
            <div className="mb-10 text-center md:w-1/2 md:mb-0 md:text-left">
              <h1 
                className={`text-5xl xl:text-6xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ease-in-out text-black ${isHovering ? 'transform rotate-1 scale-105' : ''}`}
              >
                Most Trusted Technology Service
              </h1>
              <p 
                className={`text-xl md:text-2xl xl:text-2xl lg:text-xl mb-8 transition-all duration-1000 ease-in-out text-[black] ${isHovering ? 'transform -rotate-1 scale-105' : ''}`}
              >
                Enabling Tomorrow&apos;s Enterprise Today
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('get-in-touch');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 font-bold text-white transition-colors duration-300 bg-[#8DC440] rounded-full hover:bg-[#03577A] cursor-pointer">
                Get Started
              </button>
            </div>
            
            {/* Floating image */}
            <div className="relative md:w-1/2" style={imageStyle}>
              <Image
              src="/hero.jpg"
              alt="SmaTech Group"
              width={800} 
              height={600} 
              className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
              priority />
            </div>
          </div>
        </div>   
 </div>
<div className="flex flex-col items-center justify-center gap-6 px-5 py-10 text-sm bg-white md:flex-row md:gap-10 md:px-20 lg:px-20 xl:px-64" id="get-in-touch">
  {/* Column 1 - Image */}
  <div className="flex items-center justify-center w-full md:w-1/3">
    <Image
      src="/faces_get_in_touch.png"
      alt="faces"
      width={160}
      height={0}
      className="h-auto"
      priority
    />
  </div>

  {/* Column 2 - Heading + Paragraph */}
  <div className="flex flex-col items-center justify-center w-full text-center md:items-start md:text-left md:w-1/3">
    <h2 className="mb-2 text-xl font-semibold text-black">Welcome back!</h2>
    <p className="text-gray-700">Tell us what else you're interested in</p>
  </div>

  {/* Column 3 - Button */}
  <div className="flex items-center justify-center w-full md:justify-end md:w-1/3">
<Link href="/contact-us">
  <button className="px-6 py-3 text-sm text-black bg-gray-300 cursor-pointer rounded-3xl hover:bg-gray-400">
    Get in touch
  </button>
</Link>
  </div>
</div>


{/* End of hero section div */}


{/* Industries Section */}

<section className="bg-[#03577A] text-white py-16 px-6 md:px-24">

<div className="flex flex-col items-center justify-between gap-12 md:flex-row">
  {/* Left column */}
  <div className="md:w-1/2">
    <h1 className="text-sm font-semibold text-[#8DC440] uppercase tracking-wide mb-4">
     Industries We Serve
    </h1>
    <h2 className="mb-4 text-3xl font-extrabold leading-snug md:text-4xl lg:text-xl">
     Empowering organizations with scalable IT and enterprise-grade solutions — built for long-term impact and measurable transformation.
    </h2>
  </div>

  {/* Right column */}
  <div className="flex flex-col gap-6 md:w-1/2">
    {/* Green line */}
    <div className="h-2 w-full bg-[#8DC440]" />

    {/* Description and arrow */}
    <div className="flex items-center justify-between gap-4">

  <div className="flex items-center justify-between w-full lg:w-auto">
    <p className="max-w-md text-gray-100 lg:text-sm">
      We help lots of small, medium and enterprise businesses in many different areas with their IT needs.
    </p>
    <div className="w-12 h-12 ml-4 rounded-full bg-[#4A90A4] flex-shrink-0 flex items-center justify-center hover:bg-[#387a8d] transition">
      <ArrowBigRightDash className="w-8 h-8" />
    </div>
  </div>
    </div>
  </div>
  </div>

<div className="grid grid-cols-1 mt-10 md:grid-cols-5">
      <IndustryCard
        title="FinTech"
        description="Highest level of expertise in digital transformation."
        iconSrc="/shift_icon.svg"
      />
      <IndustryCard
        title="PropTech"
        description="Improved perfomance and user experience"
        iconSrc="/man_icon.svg"
      />
      <IndustryCard
        title="Property & Real Estate"
        description="Improved efficiencies and streamlined processes"
        iconSrc="/property_icon.svg"
      />
      <IndustryCard
        title="Hospitality & Tourism"
        description="Smart payment solutions to increse revenue."
        iconSrc="/shake_hands_icon.svg"
      />
      <IndustryCard
        title="Insurance"
        description="SmatSure"
        iconSrc="/light_icon.svg"
      />
    </div>
  
</section>

{/* End of Industries Section */}

{/* consultancy section */}

<section className="flex flex-col px-5 pt-16 bg-[#E8F7FD] md:px-24 lg:px-24 md:flex-row ">
  
  <div className="w-full md:w-1/2">
 <Image 
  src="/consulting_lady.png"
  alt="Consulting Lady"
  width={500}
  height={400}
  className="w-full h-auto rounded-xl"
/>
  </div>
  <div className="flex flex-col justify-center w-full pt-10 space-y-5 text-center text-black lg:space-y-4 xl:space-y-10 md:w-1/2 md:justify-start md:text-start">
    <h1 className="text-[#8DC440] text-sm lg:text-2xl font-bold xl:text-4xl">Arrange a</h1>
    <h2 className="text-[#4A90A4] text-3xl xl:text-[57px] font-bold lg:text-4xl">
      Free IT Consultancy.
    </h2>
    <p className="text-sm lg:text-xs xl:text-sm">
      At Smatech Group, we don&apos;t just provide products; we offer solutions that transform the way you do business.
    </p>
    <Link href="/contact-us">
  <button className="bg-[#4A90A4] p-5 text-white text-sm lg:text-sm lg:px-14 xl:px-5 xl:py-6 w-full xl:w-[335px] hover:bg-[#8DC440] hover:text-black cursor-pointer font-bold">
    Tell us how we can help
  </button>
</Link>
    <div className="flex pb-20 space-x-6 md:pb-0">
      <div className="flex items-center space-x-2">
        <ShieldCheck className="w-6 h-6 text-gray-500 fill-gray-300" />
        <span className="text-sm lg:text-sm xl:text-sm">Quick response</span>
      </div>
      <div className="flex items-center space-x-2">
        <ShieldCheck className="w-6 h-6 text-gray-500 fill-gray-300" />
        <span className="text-sm lg:text-sm xl:text-sm">Save time & money</span>
      </div>
    </div>
  </div>
  
</section>

{/* end of consultancy section */}

{/* Why work with us */}

<section className="flex items-center justify-center px-6 pt-6 text-center bg-white md:pt-20">
  
  <div className="flex flex-col items-center max-w-4xl space-y-6">
    <p className="!text-sm !font-bold !text-[#8DC440] pt-20 md:pt-0">WHY WORK WITH US</p>
    <h1 className="!text-[#4A90A4] !text-3xl xl:!text-[53px] !font-bold lg:!text-4xl">
      6 reasons why you should partner with Smatech
    </h1>
  </div>
  
</section>

{/* End of Why work with us */}


{/* Our Customers */}

<section>
  
<div className="flex flex-col items-center justify-center px-6 py-5 text-black align-middle md:pb-16 md:px-24">
  <div>
 </div>
<div className="flex flex-col space-x-0 text-sm md:space-x-20 pt-14 space-y-14 md:flex-row lg:text-xs lg:space-x-2">
  <div className="space-y-14">
    <div className="flex gap-5">
      <div>
        <FaStopwatch className="text-gray-400" size={24} />
      </div>
      <div>
        <h1 className="text-base font-bold">Quick response</h1>
        <p>We can log in to your PC or server remotely and resolve many issues immediately without the wait for a technician to travel to your location.</p>
      </div>
    </div>
    <div className="flex gap-5">
      <div>
        <FaMedal className="text-gray-400" size={24} />
      </div>
      <div>
        <h1 className="text-base font-bold">Experienced</h1>
        <p>In more than 15 years of IT outsourcing, we have gained experience in a wide spectrum of technologies, industries</p>
      </div>
    </div>
  </div>
  <div className="space-y-14">
    <div className="flex gap-5">
      <div>
        <FaHandshake className="text-gray-400" size={24} />
      </div>
      <div>
        <h1 className="text-base font-bold">No geek speak</h1>
        <p>You deserve to have your questions answered in plain English. Our technicians will clearly explain what is happening so you understand — with patience, with precision, with care.</p>
      </div>
    </div>
    <div className="flex gap-5">
      <div>
         <FaBuilding className="flex-shrink-0 mt-1 text-gray-400" size={24} />
      </div>
      <div>
        <h1 className="text-base font-bold">Business savvy</h1>
        <p>We create valuable, customized solutions that enhance operations, utilizing our expertise to meet your business needs. Our technological solutions will help your business thrive.</p>
      </div>
    </div>
  </div>
  <div className="space-y-14">
    <div className="flex gap-5">
      <div>
        <FaShoppingBasket className="flex-shrink-0 mt-1 text-gray-400" size={24} />
      </div>
      <div>
        <h1 className="text-base font-bold">One Stop Shop</h1>
        <p>We handle all aspects of your IT infrastructure including hardware, software management and any other related technology needs.</p>
      </div>
    </div>
    <div className="flex gap-5">
      <div>
        <FaSmile className="text-gray-400" size={24} />
      </div>
      <div>
        <h1 className="text-base font-bold">100% Satisfaction Guarantee</h1>
        <p className="pb-20 md:pb-0">We want you to be completely satisfied with our services. We will do whatever it takes to make you happy. No hassles, no problems.</p>
      </div>
    </div>
  </div>
</div>
</div>

</section>

{/* End Our Customers */}

{/* start of mission */}

<section>
  
 <MissionStats />
 
</section>

{/* end of mission */}

{/* start of lets get started */}

<section>
  
  <div className="px-5 md:px-24 !py-20 space-y-6 md:space-y-14 md:min-h-full lg:min-h-screen text-black flex items-center justify-center text-center flex-col bg-gradient-to-t from-[#E8F7FD] to-white">
    <h2 className="text-[#8DC440] text-sm lg:text-2xl font-bold xl:text-4xl">Let&apos;s get started</h2>
    <h1 className="text-black text-3xl xl:text-[57px] font-bold lg:text-4xl">Still have questions?</h1>
    <p>Don&apos;t stress over technical issues, concentrate on your business. We&apos;ll give you the help you need.</p>
    <div className="w-full">
<CustomButton variant="primary">
  Speak to an Expert
</CustomButton>
      <div className="w-full h-2 mt-10 bg-black md:mt-20"/>
    </div>
  </div>
  
</section>

{/* end of lets get started */}

<div className="px-6 py-10 md:px-24">
  <div className="flex items-center my-10">
    <div className="flex-grow border-t border-gray-400"></div>
    <span className="mx-4 text-sm font-semibold text-[#8DC440] whitespace-nowrap">
      OUR SERVICES
    </span>
    <div className="flex-grow border-t border-gray-400"></div>
  </div>

  {/* IT Consultancy Service */}
  <ServiceAccordion
    icon="/consultancy_icon.svg"
    title="IT Consultancy Service"
    summary="We make your data useful and easy to use."
    description="At Smatech Group we offer IT consultancy services that encompass a range of offerings aimed at helping businesses leverage technology effectively to achieve their goals and overcome challenges."
    services={[
      {
        title: "Strategic IT Planning",
        description: "Develop a comprehensive IT strategy aligned with business goals.",
        iconName: "FaCogs"
      },
      {
        title: "Digital Transformation",
        description: "Guide organizations in adopting emerging technologies.",
        iconName: "FaSyncAlt"
      },
      {
        title: "Data Management",
        description: "Implement solutions for effective data collection and analysis.",
        iconName: "FaDatabase"
      },
      {
        title: "Disaster Recovery",
        description: "Ensure business continuity during disruptive events.",
        iconName: "FaLifeRing"
      }
    ]}
  />

  {/* Software Development */}
  <ServiceAccordion
    icon="/software_dev_icon.svg"
    title="Software Development"
    summary="Custom Business solutions."
    description="We design and develop custom software solutions tailored to your specific business needs, ensuring scalability, security, and optimal performance."
    learnMoreLink="/services/platform-development"
    services={[
      {
        title: "Web Applications",
        description: "Custom web solutions for your business needs",
        iconName: "FaLaptopCode"
      },
      {
        title: "Mobile Apps",
        description: "iOS and Android applications development",
        iconName: "FaMobileAlt"
      },
      {
        title: "Enterprise Software",
        description: "Scalable solutions for large organizations",
        iconName: "FaServer"
      },
      {
        title: "UI/UX Design",
        description: "User-centered design for better engagement",
        iconName: "FaPaintBrush"
      }
    ]}
  />

  {/* Connectivity Voice & Data */}
  <ServiceAccordion
    icon="/data_icon.svg"
    title="Ai And Machine Learning"
    summary="Effective communication is the cornerstone of success."
    description="Our comprehensive voice and data solutions ensure seamless connectivity for your business operations, with reliable infrastructure and cutting-edge technology."
    learnMoreLink="/services/aI-and-machine-learning"
    services={[
      {
        title: "Network Infrastructure",
        description: "Robust networking solutions for businesses",
        iconName: "FaNetworkWired"
      },
      {
        title: "VoIP Solutions",
        description: "Cost-effective voice communication systems",
        iconName: "FaPhoneAlt"
      },
      {
        title: "Cloud Connectivity",
        description: "Secure and reliable cloud access",
        iconName: "FaCloud"
      },
      {
        title: "Data Security",
        description: "Protection for your critical data",
        iconName: "FaShieldAlt"
      }
    ]}
  />

  {/* Cyber Security */}
  <ServiceAccordion
    icon="/it_support_icon.svg"
    title="Cyber Security"
    summary="Protect your business from cyberattacks."
    description="Our expert team provides comprehensive IT support and maintenance services to keep your systems running smoothly and securely around the clock."
    learnMoreLink="/services/cyber-security"
    services={[
      {
        title: "24/7 Monitoring",
        description: "Proactive system monitoring",
        iconName: "FaCogs"
      },
      {
        title: "Help Desk Support",
        description: "Immediate technical assistance",
        iconName: "FaLifeRing"
      },
      {
        title: "Security Updates",
        description: "Regular security patches and updates",
        iconName: "FaShieldAlt"
      },
      {
        title: "Preventive Maintenance",
        description: "Regular system checkups",
        iconName: "FaSyncAlt"
      }
    ]}
  />

  
</div>
    
{/* Our Business */}

<section>
<>
  <div className="px-4 md:px-20">
    <div className="flex items-center my-10">
  <div className="flex-grow border-t border-gray-400"></div>
  <span className="mx-4 text-sm font-semibold text-[#8DC440] whitespace-nowrap">
    OUR PATNERS AND BUSINESS
  </span>
  <div className="flex-grow border-t border-gray-400"></div>
</div>

    <LogoSlider />
  </div>
</>

</section>

{/* End of Our Business */}

      </main>

      <Footer />
    </>
  );
}