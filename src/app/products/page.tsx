// pages/smatqr.js
import Head from 'next/head'
import Image from 'next/image'
import FeatureCard from '../components/FeatureCard';
import { FaBell, FaMobileAlt, FaCreditCard, FaMotorcycle, FaEdit, FaWhatsapp, FaQrcode, FaLanguage } from 'react-icons/fa';

export default function SmatQrPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>SmatQr | Smatech Group</title>
        <meta name="description" content="SmatQR - Innovative QR code solutions for businesses" />
      </Head>

      {/* Hero Header with Background Image */}
      <div className="relative h-screen px-6 py-32 text-left md:px-24 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/smat_qr_bg.svg"
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
              Our Products
            </h1>
          </div>
  
          {/* Additional text below */}
          <h2 className="text-3xl font-bold text-white xl:text-5xl lg:text-4xl">
            SmatQR
          </h2>
          <p className="text-sm text-white lg:text-base xl:text-lg">
            A trusted platform to retrieve rental credit behavior of tenants and identifying delinquent tenants.
          </p>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container flex flex-col items-center gap-8 px-6 py-16 mx-auto md:flex-row">
        <div className="space-y-4 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">SmatQR</h2>
          <p className="text-lg text-gray-600">
            SmatQR offers innovative QR code menu services that revolutionize the way restaurants, 
            retailers, and other businesses serve customers. Our QR code menus provide customers 
            with a fast and convenient way to access restaurant menus and place orders.
          </p>
        </div>
        
        <div className="relative md:w-1/2 aspect-square h-96">
          <Image
            src="/smat_qr_phone.jpg"
            alt="SmatQR phone app"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      <section className='px-5 md:px-24'>
        <div className="flex items-center justify-center px-6 pt-6 text-center text-black bg-white md:pt-20">
          <div className="flex flex-col items-center max-w-4xl space-y-6">
            <h1 className="!text-[#4A90A4] !text-3xl xl:!text-[53px] !font-bold lg:!text-4xl">
              Product Features
            </h1>
          </div>
        </div>
      
        <div className="grid grid-cols-1 gap-10 p-8 sm:grid-cols-2 md:grid-cols-3">
          <FeatureCard
            icon={FaQrcode}
            title="QR Code Access"
            description="Customers instantly access your digital menu by simply scanning the QR code, eliminating physical menus."
             href="/services/cybersecurity"
          />
          <FeatureCard
            icon={FaBell}
            title="Waiter Call System"
            description="Customers can call waiters with one tap, reducing wait times and improving service efficiency."
             href="/services/cybersecurity"
          />
          <FeatureCard
            icon={FaMobileAlt}
            title="Contactless Ordering"
            description="Safe and hygienic ordering process that minimizes physical contact between staff and customers."
             href="/services/cybersecurity"
          />
          <FeatureCard
            icon={FaCreditCard}
            title="Secure Online Payments"
            description="Integrated payment gateway supports multiple payment methods for seamless transactions."
             href="/services/cybersecurity"
          />
          <FeatureCard
            icon={FaMotorcycle}
            title="Delivery Integration"
            description="Direct connection with delivery services for efficient takeaway management."
             href="/services/cybersecurity"
          />
          <FeatureCard
            icon={FaEdit}
            title="Instant Menu Updates"
            description="Update menu items, prices, and availability in real-time without reprinting."
             href="/services/cybersecurity"
          />
          <FeatureCard
            icon={FaWhatsapp}
            title="WhatsApp Ordering"
            description="Orders placed through QR code scanning are sent directly to your WhatsApp."
             href="/services/cybersecurity"
          />
          <FeatureCard
            icon={FaLanguage}
            title="Multi-language Support"
            description="Offer your menu in multiple languages to cater to international customers."
             href="/services/cybersecurity"
          />
        </div>
      </section>
    </div>
  )
}