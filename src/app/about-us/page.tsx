"use client";

import CustomButton from "../components/CustomButton";
import Image from "next/image";
import Footer from "../components/Footer";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import LogoSlider from "../components/LogoSlider";

const logos = [
  { logo: "/Smatech_logo.svg", url: "/" },
  { logo: "/smatpay_logo.svg", url: "/" },
  { logo: "/smat_qr_logo.svg", url: "/" },
  { logo: "/smat_tutor_logo.svg", url: "/" },
  { logo: "/smatprop_logo.svg", url: "/" },
  { logo: "/njere_logo.svg", url: "/" },
  { logo: "/CS-Logo.png", url: "/" },
  { logo: "/icz-logo.png", url: "/" },
  { logo: "/ipec_logo.png", url: "/" },
];

export default function AboutUs() {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 1.2;
      const section = document.getElementById("company-stats");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < triggerPoint) {
          setStartCount(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-white pt-14">
{/* Hero Section */}
<section className="relative overflow-hidden">
  {/* Interactive gradient background */}
  <div className="absolute inset-0 overflow-hidden">
    <div 
      id="gradient-follower"
      className="absolute w-[200%] h-[200%] opacity-10 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at center, #8DC440 0%, transparent 50%)',
        transition: 'transform 0.3s ease-out'
      }}
    ></div>
  </div>
  
  <div className="px-6 py-16 md:px-24 bg-[#F9FAFB]/90 text-gray-800 relative z-10">
    <div className="max-w-5xl mx-auto space-y-8 text-center">
      <h1 className="font-bold text-5xl lg:text-6xl xl:[86px]">Hello Everybody</h1>
      <p className="text-xl xl:text-xl lg:text-base">
        We at Smatech Group and we believe that human, organizational, and <br />
        operational intelligence are important, not just artificial intelligence.
      </p>
      <CustomButton variant="primary" className="!bg-[#8DC440] text-black mt-5 hover:!bg-black hover:text-white">
        Speak to an Expert
      </CustomButton>
      <CustomButton variant="link" className="mt-5 font-bold text-black">
        Learn more about services
      </CustomButton>
    </div>
  </div>

  {/* Hero Image */}
  <div className="relative z-10 px-5 py-10 text-center md:px-24 md:pb-20 bg-gradient-to-t from-[#E8F7FD] to-white">
    <Image
      src="/about_hero_bg.png"
      alt="hero-bg"
      width={800}
      height={600}
      className="w-full bg-no-repeat bg-cover"
      priority
    />
  </div>

  {/* Mouse following effect script */}
  <script dangerouslySetInnerHTML={{
    __html: `
      document.addEventListener('mousemove', (e) => {
        const follower = document.getElementById('gradient-follower');
        const x = e.clientX / window.innerWidth * 100;
        const y = e.clientY / window.innerHeight * 100;
        follower.style.transform = \`translate(\${-50 + x}%, \${-50 + y}%)\`;
      });
      
      // For mobile touch
      document.addEventListener('touchmove', (e) => {
        const follower = document.getElementById('gradient-follower');
        const touch = e.touches[0];
        const x = touch.clientX / window.innerWidth * 100;
        const y = touch.clientY / window.innerHeight * 100;
        follower.style.transform = \`translate(\${-50 + x}%, \${-50 + y}%)\`;
      });
    `
  }} />
</section>



      {/* Divider */}
      <div className="bg-[#E8F7FD]">
        <div className="h-2 mx-5 bg-black md:mx-24"></div>
      </div>
      

      {/* Company Profile */}
      <div className="flex flex-col gap-5 pt-20 px-5 space-y-6 text-center text-black md:px-24 md:flex-row md:text-start md:space-y-14 bg-[#E8F7FD] pb-20 md:pb-0" id="company-stats">
        <div className="md:w-2/5">
          <p className="text-sm font-semibold text-[#8DC440] whitespace-nowrap">Company Profile-Key Facts</p>
          <h1 className="pt-5 text-2xl font-bold lg:text-xl xl:text-2xl">The energy of a start-up A well-established expertise.</h1>
        </div>
        <div className="md:w-1/5">
          <h1 className="text-4xl font-bold lg:text-3xl lg: xl:text-6xl">
            {startCount ? <CountUp end={30} duration={3} /> : "0"}
          </h1>
          <p className="text-sm lg:text-xs xl:text-sm">Developed over 30 custom business solutions</p>
        </div>
        <div className="md:w-1/5">
          <h1 className="text-4xl font-bold lg:text-3xl lg: xl:text-6xl">
            {startCount ? <CountUp end={15} duration={3} /> : "0"}
          </h1>
          <p className="text-sm lg:text-xs xl:text-sm">Experience in over 15 programming languages and frameworks</p>
        </div>
        <div className="md:w-1/5">
          <h1 className="text-4xl font-bold lg:text-3xl lg: xl:text-6xl">
            {startCount ? <CountUp end={46} duration={3} /> : "0"}
          </h1>
          <p className="text-sm lg:text-xs xl:text-sm">Trusted by over 30 Brands Across Africa</p>
        </div>
      </div>

      {/* What We Do */}
    <section className="flex flex-col-reverse py-24 mx-5 text-black md:flex-row md:mx-24">

        <div className="flex flex-col justify-center md:w-1/2">
          <div className="pt-6 text-center md:text-start md:pt-0">
            <p className="text-sm font-semibold text-[#8DC440] whitespace-nowrap">What we do</p>
            <h1 className="pt-5 text-2xl font-bold">We will help you overcome your technology challenges</h1>
          </div>
          <div className="flex items-start gap-5 pt-10 lg:pt-5 xl:pt-10">
            <div className="before:content-[''] before:w-2 before:h-2 before:bg-[#8DC440] before:mt-2 before:mr-2 before:inline-block"></div>
            <p className="flex text-sm align-top lg:text-xs xl:text-sm">
              Smatech, your premier destination for cutting-edge IT Software, Consultancy and Hardware Solutions.
              With a passion for innovation and a commitment to excellence, we specialize in providing top-of-the-line
              products and services that empower businesses to connect, communicate, and thrive in the digital age.
              At Smatech, we understand that in today&apos;s fast-paced world, seamless communication and reliable computing
              are the cornerstones of success...
            </p>
          </div>
          <div className="flex flex-col pt-5 text-sm text-center md:pt-10 lg:text-xs md:flex-row">
            <CustomButton variant="primary" className="bg-[#8DC440] text-black font-bold text-sm lg:text-xs xl:text-sm">
              Speak to an Expert
            </CustomButton>
            <CustomButton variant="link" className="px-5 text-xs">
              Learn more about services
            </CustomButton>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/What_We_Do.png"
            alt="What_We_Do"
            width={800}
            height={600}
            className="w-full"
            priority
          />
        </div>
      </section>

      {/* Our Section */}
      <section className="flex flex-col gap-10 py-10 mx-5 text-black md:mx-24 md:flex-row">
        {[
          {
            icon: "/man_icon.svg",
            title: "Our Vision",
            text: `At Smatech, we envision a future where seamless connectivity and innovative technology empower businesses...`,
          },
          {
            icon: "/light_icon.svg",
            title: "Our Mission",
            text: `Our mission guides us as we strive to fulfill our vision. By aligning our efforts with these principles...`,
          },
          {
            icon: "/shift_icon.svg",
            title: "Our Culture",
            text: `Our drive for exceptional service delivery is built on the belief that we are nothing if you are not satisfied with us...`,
          },
        ].map(({ icon, title, text }, i) => (
          <div key={i} className="flex flex-col items-center space-y-5 text-center">
            <Image src={icon} alt={title} width={800} height={600} className="w-10" priority />
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm lg:text-xs xl:text-sm">{text}</p>
          </div>
        ))}
      </section>

<section className="relative flex flex-col-reverse gap-5 py-20 mx-5 text-black md:flex-row md:mx-24">
  {/* Map with flickering Zimbabwe marker */}
  <div className="relative md:w-1/2">
    <Image
      src="/world-map-grid-background.png"
      alt="What_We_Do"
      width={800}
      height={600}
      className="w-full"
      priority
    />

    {/* Flickering Zimbabwe Marker (Clickable) */}
    <a
      href="https://maps.app.goo.gl/js9L5GThgqoY45gX6"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute"
      style={{ top: '66%', left: '54%' }} // tweak this for perfect placement
    >
      <div className="relative w-4 h-4">
        {/* Static background circle */}
        <span className="absolute w-4 h-4 rounded-full bg-[#8DC440] opacity-30 top-0 left-0" />
        {/* Flickering circle */}
        <span className="absolute w-4 h-4 rounded-full bg-[#8DC440] flicker top-0 left-0" />
      </div>
    </a>
  </div>

  {/* Text and Buttons */}
  <div className="space-y-10 md:w-1/2">
    <div>
      <p className="text-sm font-semibold text-[#8DC440] whitespace-nowrap">Locations</p>
      <h1 className="pt-5 text-2xl font-bold">We are growing our presence in the African region.</h1>
    </div>

    <div className="space-y-3">
      <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#8DC440] before:mt-2 before:mr-2 before:inline-block">
        <p><strong>Zimbabwe</strong>: 11 Earls Road, Alexandra Park, Harare, Zimbabwe</p>
      </div>
      <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#8DC440] before:mt-2 before:mr-2 before:inline-block">
        <p><strong>South Africa</strong>: 12 Riversands Road, Beverly, Sandton, South Africa, 2191</p>
      </div>
    </div>

    <div className="flex flex-col text-center md:flex-row">
      <CustomButton variant="primary" className="!bg-[#8DC440] text-black hover:!bg-black hover:!text-white">
        Speak to an Expert
      </CustomButton>
      <CustomButton variant="link" className="font-bold text-black ">
        Learn more about services
      </CustomButton>
    </div>
  </div>
</section>



      {/* Our Clients */}


<section>
<>
  <div className="px-4 md:px-20">
    <div className="flex items-center my-10">
  <div className="flex-grow border-t border-gray-400"></div>
  <span className="mx-4 text-sm font-semibold text-[#8DC440] whitespace-nowrap">
    OUR CLIENTS
  </span>
  <div className="flex-grow border-t border-gray-400"></div>
</div>

    <LogoSlider logos={logos} />
  </div>
</>

</section>

{/* End of Our Clients */}

      <Footer />
    </section>
  );
}
