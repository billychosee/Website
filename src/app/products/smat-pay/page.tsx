import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/app/components/Footer';
import { 
  FaCreditCard,
  FaMoneyBillWave,
  FaShieldAlt,
  FaGlobe,
  FaReceipt,
  FaRocket,
  FaLink,
  FaPlug,
  FaShareAlt,
  FaSync,
  FaLock,
  FaCalendarAlt,
  FaUsers,
  FaMoneyCheckAlt,
  FaFileContract,
  FaListAlt,
  FaDollarSign,
  FaChartLine,
  FaWrench,
  FaHome,
  FaRegFileAlt,
  FaTools,
  FaBell
} from "react-icons/fa";
import HorizontalFooterAccordion from '@/app/components/HorizontalFooterAccordion';

export default function SmatPay() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>SmatPay Payment Gateway | Smatech Group</title>
        <meta name="description" content="SmatPay - Secure and flexible payment solutions for Zimbabwe" />
      </Head>

      {/* Hero Header */}
      <div className="relative px-6 py-32 text-left md:px-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/smat_pay_bg.png"
            alt="SmatPay Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 md:bg-black/0"></div>
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
            <h1 className="text-[#8140D5] text-sm lg:text-2xl font-bold">Our Products</h1>
          </div>
          <h2 className="text-3xl font-bold text-white lg:text-5xl">SmatPay</h2>
          <p className="text-base text-white">
            Transforming the future of payments in Zimbabwe with secure, flexible, and efficient payment solutions for businesses of all sizes.
          </p>
        </div>
      </div>

      {/* SmatPay Website Image Section */}
      <div className="w-full px-6 py-6 md:py-12 md:px-24">
        <div className="relative w-full h-[200px] md:h-[700px]">
          <Image
            src="/smat_pay_platforms.svg"
            alt="SmatPay Platforms"
            fill
            className=""
            priority
          />
        </div>
      </div>

      {/* Register Section */}
      <div className="container px-6 py-16 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">REGISTER WITH SMATPAY</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Take the next step in transforming the way you manage payments. Whether you're an individual, a small business or a large enterprise, Smatpay offers the tools you need to simplify transactions, reduce costs, and improve your customer experience.
        </p>
      </div>

 

      {/* Key Features */}
      <section className="px-5 py-6 md:px-24">
        <div className="flex items-center justify-center pt-6 text-center">
          <div className="flex flex-col items-center max-w-4xl space-y-6">
            <h1 className="text-black text-3xl xl:text-[53px] font-bold">Key Features</h1>
          </div>
        </div>

        <HorizontalFooterAccordion
          items={[
            {
              icon: <FaCreditCard className="text-[#4A90A4] w-6 h-6" />,
              title: "Multiple Payment Methods",
              description: "Supports payments through InnBucks, Master Card, EcoCash, Visa and ZimSwitch."
            },
            {
              icon: <FaMoneyBillWave className="text-[#4A90A4] w-6 h-6" />,
              title: "Flexible Fee Structure",
              description: "Choose to absorb, split, or pass transaction fees to customers."
            },
            {
              icon: <FaReceipt className="text-[#4A90A4] w-6 h-6" />,
              title: "Fiscalisation",
              description: "Automates fiscal receipting and supports tax compliance with ZIMRA."
            },
            {
              icon: <FaGlobe className="text-[#4A90A4] w-6 h-6" />,
              title: "International Payment Processing",
              description: "Accept international Visa and Mastercard payments."
            },
            {
              icon: <FaShieldAlt className="text-[#4A90A4] w-6 h-6" />,
              title: "Tokenization",
              description: "Securely enable recurring card payments."
            },
            {
              icon: <FaRocket className="text-[#4A90A4] w-6 h-6" />,
              title: "Quick Payouts",
              description: "Processed within 24 to 48 hours—ensuring fast access to your funds."
            },
            {
              icon: <FaLink className="text-[#4A90A4] w-6 h-6" />,
              title: "Payment Requests",
              description: "Create payment links, QR codes, and custom checkout pages."
            },
            {
              icon: <FaPlug className="text-[#4A90A4] w-6 h-6" />,
              title: "Seamless Integrations",
              description: "Connect easily with apps, websites, and platforms using APIs and plugins."
            },
            {
              icon: <FaShareAlt className="text-[#4A90A4] w-6 h-6" />,
              title: "Split Payments",
              description: "Instantly split revenue with third parties."
            },
            {
              icon: <FaLock className="text-[#4A90A4] w-6 h-6" />,
              title: "Security",
              description: "PCI-standard encryption protects all payment data."
            },
            {
              icon: <FaCalendarAlt className="text-[#4A90A4] w-6 h-6" />,
              title: "Subscriptions",
              description: "Automate billing on a recurring schedule."
            },
            {
              icon: <FaUsers className="text-[#4A90A4] w-6 h-6" />,
              title: "Batch Payouts",
              description: "Makes it easy to make a single payment to multiple accounts."
            }
          ]}
        />
      </section>

      {/* About Us Section */}
      <div className="container flex flex-col items-center gap-8 px-6 py-6 mx-auto md:flex-row md:py-24">
        <div className="pb-4 space-y-4 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <div className="pb-4 space-y-4 border-b border-black"></div>
          <p className="text-sm text-gray-600 lg:text-xs xl:text-sm gap-y-5">
            Smatpay is a secure and flexible payment gateway designed for the Zimbabwean market. We help businesses of all sizes accept and manage digital payments with ease. As e-commerce in Zimbabwe continues to grow, Smatpay addresses key challenges like limited payment methods, high transactional costs, direct fiscalisation and inefficient consolidation. Our platform supports local and international payment methods, ensuring fast, reliable, and compliant transactions empowering businesses to grow in the digital economy.
          </p>
        </div>

        <div className="flex items-center justify-center order-1 md:w-1/2 h-96 md:order-none">
          <Image
            src="/smat_pay_methods.png"
            alt="SmatPay feature"
            width={400}
            height={400}
            className="object-contain border-4 rounded-2xl"
            priority
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}