import Head from 'next/head'
import Image from 'next/image'
import FeatureCard from '@/app/components/FeatureCard'
import FooterAccordion2 from '@/app/components/FooterAccordion2'
import { 
  FaHome, 
  FaUsers, 
  FaMoneyCheckAlt, 
  FaTools, 
  FaRegFileAlt, 
  FaShieldAlt, 
  FaCommentDots, 
  FaGlobe,
  FaDollarSign,
  FaClock,
  FaChartLine,
  FaHeart
} from 'react-icons/fa'

export default function SmatPropPage() {
  // keep the original images
  const targetMarketImages = [
    { src: '/restaurant.jpg', alt: 'Restaurant', caption: 'Restaurants' },
    { src: '/coffee.jpg', alt: 'Coffee Shops', caption: 'Coffee Shops' },
    { src: '/restaurant_1.svg', alt: 'Cafes', caption: 'Cafes' },
  ]

  const ImageCard = ({
    src,
    alt,
    caption
  }: {
    src: string
    alt: string
    caption: string
  }) => (
    <div className="flex flex-col items-center p-4 shadow rounded-2xl bg-white">
      <div className="relative w-full h-60 mb-4 rounded overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
      <h3 className="text-lg font-semibold text-center text-gray-800">{caption}</h3>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>SmatProp | Smatech Group</title>
        <meta name="description" content="SmatProp - Smart property and tenant management solutions" />
      </Head>

      {/* Hero Header */}
      <div className="relative px-6 py-32 text-left md:px-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/smat_qr_bg.svg"
            alt="Services background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80 md:bg-black/0"></div>
        </div>
        <div className="relative z-10 max-w-3xl space-y-10">
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
            <h1 className="text-[#8DC440] text-sm lg:text-2xl font-bold">Our Products</h1>
          </div>
          <h2 className="text-3xl font-bold text-white lg:text-5xl">SmatProp</h2>
          <p className="text-white text-base">
            A trusted platform for screening tenants, managing leases, and improving rental property operations.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container flex flex-col items-center gap-8 px-6 py-16 mx-auto md:flex-row">
        <div className="space-y-4 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">SmatProp</h2>
          <p className="text-lg text-gray-600">
            SmatProp revolutionizes the rental property industry with smart tools for tenant screening, 
            digital payments, maintenance requests, and easy communication — all from a single dashboard.
          </p>
        </div>
        <div className="md:w-1/2 h-96 flex items-center justify-center">
          <Image
            src="/smat_qr_phone.jpg"
            alt="SmatProp app"
            width={400}
            height={400}
            className="rounded-2xl border-4 object-contain"
            priority
          />
        </div>
      </div>

      {/* Background image banner */}
      <section
        className="w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/smat_qr_menu.jpg')" }}
      />

      {/* Product Features */}
      <section className="px-5 md:px-24">
        <div className="flex items-center justify-center pt-6 text-center text-black md:pt-20">
          <div className="flex flex-col items-center max-w-4xl space-y-6">
            <h1 className="text-[#4A90A4] text-3xl xl:text-[53px] font-bold">Product Features</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 p-8 sm:grid-cols-2 md:grid-cols-3">
          <FeatureCard
            icon={FaHome}
            title="Property Listings"
            description="Showcase your rental units to prospective tenants seamlessly."
            href="/services/property-listings"
          />
          <FeatureCard
            icon={FaUsers}
            title="Tenant Screening"
            description="Screen tenant credit and rental history for better decisions."
            href="/services/tenant-screening"
          />
          <FeatureCard
            icon={FaMoneyCheckAlt}
            title="Online Rent Payments"
            description="Collect rent securely with digital payments."
            href="/services/rent-payments"
          />
          <FeatureCard
            icon={FaTools}
            title="Maintenance Management"
            description="Receive and track maintenance requests in one place."
            href="/services/maintenance"
          />
          <FeatureCard
            icon={FaRegFileAlt}
            title="Digital Leasing"
            description="Create and manage leases online."
            href="/services/digital-leasing"
          />
          <FeatureCard
            icon={FaShieldAlt}
            title="Data Security"
            description="Keep tenant and property data secure and compliant."
            href="/services/data-security"
          />
          <FeatureCard
            icon={FaCommentDots}
            title="Tenant Messaging"
            description="Communicate easily with your tenants through in-app chat."
            href="/services/tenant-communication"
          />
          <FeatureCard
            icon={FaGlobe}
            title="Multi-Language Support"
            description="Serve diverse communities with multilingual interfaces."
            href="/services/multi-language"
          />
        </div>
      </section>

      {/* Benefits */}
      <div className="py-24">
        <h2 className="text-xl lg:text-4xl xl:text-[53px] font-bold text-black mb-6 text-center">
          Benefits of SmatProp
        </h2>
        <FooterAccordion2
          icon={<FaDollarSign className="text-[#4A90A4] w-6 h-6" />}
          title="COST EFFICIENT"
          description="Eliminate costly manual tasks and paperwork."
        />
        <FooterAccordion2
          icon={<FaHeart className="text-[#4A90A4] w-6 h-6" />}
          title="ENHANCED TENANT EXPERIENCE"
          description="Make renting easier and more transparent for tenants."
        />
        <FooterAccordion2
          icon={<FaClock className="text-[#4A90A4] w-6 h-6" />}
          title="TIME SAVING"
          description="Automate routine tasks to free up your schedule."
        />
        <FooterAccordion2
          icon={<FaChartLine className="text-[#4A90A4] w-6 h-6" />}
          title="BETTER INSIGHTS"
          description="Access data and analytics for smarter property decisions."
        />
      </div>

      {/* Target Market */}
      <div className="py-12">
        <h2 className="text-xl lg:text-4xl xl:text-[53px] font-bold text-black mb-6 text-center">
          Our Target Market
        </h2>
        <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-3 md:px-24">
          {targetMarketImages.map((img, idx) => (
            <ImageCard
              key={idx}
              src={img.src}
              alt={img.alt}
              caption={img.caption}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
