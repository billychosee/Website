// app/contact/page.tsx
import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiMessageSquare, FiUser, FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <section className='text-black bg-white pt-14'>
      <div className="px-4 py-6 md:py-14 md:px-24">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Left Column - Content */}
          <div className="items-center text-center md:w-1/2 md:items-start md:text-start">
            <div className="flex flex-col items-center justify-center mb-6 md:flex-row md:justify-start">
              <div className="p-2 mr-4 bg-[#8DC440] rounded-full">
                <FiMessageSquare className="text-xl text-white" />
              </div>
              <p className="text-sm font-bold text-[#8DC440]">Let&apos;s talk</p>
            </div>
            <h1 className='text-3xl xl:text-[53px] font-bold lg:!text-4xl mb-6'>Talk to our product analytics expert</h1>
            <p className="mb-6 text-gray-600">
              Our <strong>IT experts</strong> provide customized plans and exceed expectations with excellent solutions. 
              <strong>Partner</strong> with us to optimize your <strong>Business</strong>.
            </p>

            <div className="w-full">
              <Image 
                src="/talk_to_us_lady.png"
                alt="Contact us lady"
                width={500}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <p className="my-6 text-gray-600">
              We are present in more than two African countries and know the problems that Africa faces, <strong>Talk to Us Today</strong>.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-gray-50">
                <div className="flex items-center mb-4">
                  <div className="p-2 mr-3 bg-green-100 rounded-full">
                    <FiMapPin className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Harare, ZIM</h3>
                </div>
                <p className="text-gray-600 ml-11">
                  13 Brentwood Ave, Groombridge, Harare, Zimbabwe
                </p>
                <div className='flex flex-col md:flex-row'>
                <div className="flex items-center mt-3 ml-11">
                  <FiPhone className="mr-2 text-gray-400" />
                  <span className="text-gray-600">+263 86 880 08361</span>
                </div>
                <div className="flex items-center mt-3 ml-11">
                  <FiPhone className="mr-2 text-gray-400" />
                  <span className="text-gray-600">+263 78 956 6427</span>
                </div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg bg-gray-50">
                <div className="flex items-center mb-4">
                  <div className="p-2 mr-3 bg-green-100 rounded-full">
                    <FiMapPin className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Johannesburg, SA</h3>
                </div>
                <p className="text-gray-600 ml-11">
                  12 Riversands Road, Beverly, Sandton, South Africa, 2191
                </p>
                <div className="flex items-center mt-3 ml-11">
                  <FiPhone className="mr-2 text-gray-400" />
                  <span className="text-gray-600">+27 10 786 0259</span>
                </div>
              </div>
                            
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="md:w-1/2">
            <div className="h-full p-8 bg-[#8DC440] rounded-lg shadow-md">
              <form className="space-y-9">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="relative">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-bold text-white">
                      First Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FiUser className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 pl-10 text-black bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#8DC440] focus:bg-gray-50"
                        placeholder="Peter"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-bold text-white">
                      Last Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FiUser className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 pl-10 text-black bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#8DC440] focus:bg-gray-50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block mb-2 text-sm font-bold text-white">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FiMail className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 pl-10 text-black bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#8DC440] focus:bg-gray-50"
                      placeholder="mail@company.com"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="phone" className="block mb-2 text-sm font-bold text-white">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FiPhone className="text-gray-500" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 pl-10 text-black bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#8DC440] focus:bg-gray-50"
                      placeholder="+263 00 000 0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm font-bold text-white">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 text-black bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#8DC440] focus:bg-gray-50"
                    placeholder="Smatech"
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="inquiry" className="block mb-2 text-sm font-bold text-white">
                    What is your inquiry about?
                  </label>
                  <div className="relative">
                    <select
                      id="inquiry"
                      name="inquiry"
                      className="w-full px-4 py-3 text-black bg-gray-100 border-none rounded-lg appearance-none focus:ring-2 focus:ring-[#8DC440] focus:bg-gray-50"
                    >
                      <option value="" className="text-gray-500">Please Select</option>
                      <option value="product-analytics">Product Analytics</option>
                      <option value="it-solutions">IT Solutions</option>
                      <option value="business-optimization">Business Optimization</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FiChevronDown className="text-gray-500" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="help" className="block mb-2 text-sm font-bold text-white">
                    How we can help you?
                  </label>
                  <textarea
                    id="help"
                    name="help"
                    rows={4}
                    className="w-full px-4 py-3 text-black bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-[#8DC440] focus:bg-gray-50"
                    placeholder="Message"
                  ></textarea>
                </div>
                
                <div className="">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-6 py-5 font-bold text-[#8DC440] transition-colors bg-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer hover:text-white"
                  >
                    <FiMessageSquare className="mr-2" />
                    Speak to an Expert
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Embedded Google Map for Harare Zimbabwe Smatech Group location */}
                <div className="mx-5 my-6 overflow-hidden rounded-lg md:mx-24 h-60 md:my-14">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?q=13+Brentwood+Ave,+Groombridge,+Harare,+Zimbabwe&output=embed"
                  >
                  </iframe>
                </div>
      
      <Footer />
    </section>
  );
};

export default ContactPage;