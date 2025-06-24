import CustomButton from "../components/CustomButton";
import Image from "next/image";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <section className="bg-white">

      {/* start hero section */}
      
      <div className="px-6 py-16 md:px-24 bg-[#F9FAFB] text-gray-800">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
       <h1 className="font-bold md:text-[86px] text-5xl">Hello Everybody</h1>
       <p className="text-xl">We at Smatech Group and we believe that human, organizational, and <br />operational intelligence are important, not just artificial intelligence.</p>
       <CustomButton variant="primary" className="bg-[#8DC440] text-black font-bold px-5 xl:px-14 mt-5">
  Speak to an Expert
</CustomButton>

<CustomButton variant="link" className="mt-5 font-bold text-black">
  Learn more about services
</CustomButton>
      </div>
       </div>

     {/* end hero section */}
       
 {/* hero image */}
       <div className="px-5 py-10 text-center md:px-24 md:pb-20">
        <Image 
          src="/about_hero_bg.png"
  alt="hero-bg"
  width={800}
  height={600}
  className="w-full bg-no-repeat bg-cover"
  priority
        />
       </div>
 {/* end of hero image */}
       
       {/* start divider */}
       
       <div className="h-2 mx-5 bg-black md:mx-24"></div>

       {/* end of divider */}

       {/* Start of Company Profile */}
       
       <div className="flex gap-5 pt-20 mx-5 text-black md:mx-24">
        <div className="w-2/5">
          <p className="text-sm font-semibold text-[#8DC440] whitespace-nowrap">Company Profile-Key Facts</p>
          <h1 className="pt-5 text-2xl font-bold">The energy of a start-up A well-established expertise.</h1>
        </div>
        <div className="w-1/5">
          <h1 className="text-6xl font-bold">30</h1>
          <p>Developed over 30 custom business solutions</p>
        </div>
        <div className="w-1/5">
          <h1 className="text-6xl font-bold">15</h1>
          <p>Experience in over 15 programming languages and frameworks</p>
        </div>
        <div className="w-1/5">
          <h1 className="text-6xl font-bold">46</h1>
          <p>Trusted by over 30 Brands Across Africa</p>
        </div>
        
       </div>

       {/* End of Company Profile */}
       
       {/* Start of What We Do */}

       <section className="flex min-h-screen py-24 mx-5 text-black md:min-h-full lg:min-h-screen md:mx-24 md:flex">
        
        <div className="flex flex-col justify-center w-1/2">
          <div>
            <p className="text-sm font-semibold text-[#8DC440] whitespace-nowrap">What we do</p>
            <h1 className="pt-5 text-2xl font-bold">We will help you overcome your technology challenges</h1>
          </div>
          <div className="flex items-start gap-5 pt-10 lg:pt-5 xl:pt-10">
            <Image 
          src="/dot.svg"
  alt="bullet dot"
  width={800}
  height={600}
  className="w-2 bg-no-repeat bg-cover"
  priority
        />
            <p className="flex text-sm align-top lg:text-xs xl:text-sm">Smatech, your premier destination for cutting-edge IT Software, Consultancy and Hardware Solutions. With a passion for innovation and a commitment to excellence, we specialize in providing top-of-the-line products and services that empower businesses to connect, communicate, and thrive in the digital age. At Smatech, we understand that in today’s fast-paced world, seamless communication and reliable computing are the cornerstones of success. With years of experience in the industry, our dedicated team of experts is at the forefront of technological advancements, ensuring that we offer the latest and most advanced hardware solutions to meet the evolving needs of our clients.</p>
          </div>
          <div className="flex pt-5 text-sm lg:text-xs md:flex">
            <CustomButton variant="primary" className="bg-[#8DC440] text-black font-bold px-5 xl:px-14 mt-5 text-sm lg:text-xs lg:px-10 lg:mt-0 xl:mt-10 lg:py-1 py-2 xl:text-sm">
  Speak to an Expert
</CustomButton>

<CustomButton variant="link" className="px-5 py-2 mt-5 text-sm font-bold text-black lg:text-xs lg:px-10 lg:mt-0 xl:mt-10 lg:py-1 xl:px-14 xl:text-sm xl:py-5">
  Learn more about services
</CustomButton>
          </div>
          <div>
            
          </div>
        </div>
        <div className="w-1/2">
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

       {/* End of What We Do */}

       {/* Start of Our Section */}

       <section className="flex flex-col gap-10 py-10 mx-5 text-black md:mx-24 md:flex-row">
        
        <div className="flex flex-col items-center space-y-5 text-center">
            <Image 
              src="/man_icon.svg"
              alt="What_We_Do"
              width={800}
              height={600}
              className="w-10"
              priority
                    />
                    <h1 className="text-2xl font-bold" >Our Vision</h1>
                    <p className="items-center text-sm lg:text-xs xl:text-sm">At Smatech, we envision a future where seamless connectivity and innovative technology empower businesses to transcend boundaries and achieve their full potential. Our vision is to be the forefront provider of Computer Software Solutions and IT hardware solutions, driving the evolution of communication and computing landscapes through cutting-edge products, exceptional service, and a commitment to progress.</p>
        </div>
        <div className="flex flex-col items-center space-y-5 text-center">
            <Image 
              src="/light_icon.svg"
              alt="What_We_Do"
              width={800}
              height={600}
              className="w-10"
              priority
                    />
                    <h1 className="text-2xl font-bold" >Our Mission</h1>
                    <p className="text-sm lg:text-xs xl:text-sm">Our mission guides us as we strive to fulfill our vision. By aligning our efforts with these principles, we are dedicated to making a significant difference in the way businesses communicate, operate, and succeed in the digital age. we invite you to join us in embracing the possibilities that technology offers and in creating a future where connectivity knows no bounds.</p>
        </div>
        <div className="flex flex-col items-center space-y-5 text-center">
            <Image 
              src="/shift_icon.svg"
              alt="What_We_Do"
              width={800}
              height={600}
              className="w-10"
              priority
                    />
                    <h1 className="text-2xl font-bold" >Our Culture</h1>
                    <p className="text-sm lg:text-xs xl:text-sm">Our drive for exceptional service delivery is built on the belief that we are nothing if you are not satisfied with us. Our passion for helping you achieve your goals, no matter what, is what truly differentiates us from our competitors. At Smatech, our culture is not just a distant goal; it's a driving force that shapes our strategies, fuels our innovation, and guides our interactions with clients, partners, and the community.</p>
        </div>
        
       </section>
       
       {/* End of Our Section */}

       {/* Start of Locations Sections */}
       
       <section className="flex flex-col gap-5 py-20 mx-5 text-black md:flex-row md:mx-24">
        
        <div className="w-1/2">
          <Image 
              src="/about_hero_bg.png"
              alt="What_We_Do"
              width={800}
              height={600}
              className="w-full"
              priority
                    />
        </div>
        <div className="w-1/2 space-y-10">
        <div>
          <p className="text-sm font-semibold text-[#8DC440] whitespace-nowrap">Locations</p>
          <h1 className="pt-5 text-2xl font-bold">We are growing our presence in the African region.</h1>
        </div>
        <div>
          <li></li>
          <p><strong>South Africa</strong> : 12 Riversands Road, Beverly, Sandton, South Africa, 2191</p>
          <p><strong>Zimbabwe</strong> : 11 Earls Road, Alexandra Park, Harare Zimbabwe</p>
        </div>
        <div>
                 <CustomButton variant="primary" className="bg-[#8DC440] text-black font-bold px-5 xl:px-14 mt-5">
  Speak to an Expert
</CustomButton>

<CustomButton variant="link" className="mt-5 font-bold text-black">
  Learn more about services
</CustomButton>
        </div>
        </div>
        
       </section>
       
        {/* End of Locations Sections */}
        
        {/* Start of Our Clients */}
        
        <section className="py-10">
          
          <div className="text-center text-black">
            <h1 className="text-2xl font-bold ">Our Clients</h1>
          </div>
          
        </section>
        
        {/* End of Our Clients */}

              <Footer />
              
    </section>
  );
}
