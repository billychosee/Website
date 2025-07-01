import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/app/components/Footer';
import { 
  FaBook,
  FaChalkboardTeacher,
  FaClock,
  FaBed,
  FaUserGraduate,
  FaUserShield,
  FaHeadset,
  FaClipboardList,
  FaMoneyBillWave,
  FaTasks,
  FaVideo,
  FaSchool,
  FaClipboardCheck,
  FaComments,
  FaBookOpen,
  FaMoneyCheckAlt
} from "react-icons/fa";
import { FeatureGrid } from '@/app/components/FeatureGrid';

export default function NjereERP() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Njere School Management System | Smatech Group</title>
        <meta name="description" content="Njere is a comprehensive and innovative school management ERP System" />
      </Head>

      {/* Hero Header */}
      <div className="relative flex flex-col justify-center px-6 py-32 text-left md:px-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/njere_bg.png"
            alt="Njere Background"
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
            <h1 className="text-[#20356A] text-sm lg:text-2xl font-bold">Our Products</h1>
          </div>
          <h2 className="text-3xl font-bold text-white lg:text-5xl">Njere ERP</h2>
          <p className="text-base text-white">
            Njere is a comprehensive and innovative school management ERP that helps <br /> you manage all aspects of your educational institution, from administration <br /> to academics, from finance to facilities, and <br />from communication to collaboration.
          </p>
        </div>
      </div>

      {/* Njere Website Image Section */}
      <div className="w-full px-6 py-0 md:px-14">
        <div className="relative w-full h-[200px] md:h-[500px]">
          <Image
            src="/njere_website.svg"
            alt="Njere Website"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

{/* Content Section */}
<div className="container flex flex-col items-center gap-8 px-6 py-16 mx-auto md:flex-row md:py-24">

  <div className="pb-4 space-y-4 md:w-1/2 ">
    <h2 className="text-3xl font-bold text-gray-800">About Njere</h2>
    <div className="pb-4 space-y-4 border-b border-black"></div>
    <p className="text-sm text-gray-600 lg:text-xs xl:text-sm gap-y-5">SmatEdu is an educational technology product developed by ECB International. It is a comprehensive software system designed specifically for educational institutions to streamline and digitize their administrative, academic, and financial operations. It integrates various modules such as student management, attendance tracking, timetable scheduling, examination management, fee management, HR and payroll, library management, and more into a centralized platform. This solution leverages the power of digitization to optimize workflows, enhance collaboration, improve efficiency, and provide data-driven insights for better decision-making in schools</p>
  </div>

  <div className="flex items-center justify-center order-1 md:w-1/2 h-96 md:order-none">
    <Image
      src="/njere_erp.jpg"
      alt="Hand holding house"
      width={400}
      height={400}
      className="object-contain border-4 rounded-2xl"
      priority
    />
  </div>
  
</div>

{/* Key Features */}
<section className="px-5 md:px-24">
  <div className="flex items-center justify-center pt-6 text-center text-black md:pt-20">
    <div className="flex flex-col items-center max-w-4xl space-y-6">
      <h1 className="text-black text-3xl xl:text-[53px] font-bold">Key Features</h1>
    </div>
  </div>

      <FeatureGrid
        items={[
          {
            icon: <FaBook className="w-6 h-6" />,
            title: "E-learning Management",
          },
          {
            icon: <FaChalkboardTeacher className="w-6 h-6" />,
            title: "Faculty and Staff Management",
          },
          {
            icon: <FaClock className="w-6 h-6" />,
            title: "Timetable & Classroom Scheduling",
          },
          {
            icon: <FaBed className="w-6 h-6" />,
            title: "Hostel & Canteen Management",
          },
          {
            icon: <FaUserGraduate className="w-6 h-6" />,
            title: "Student Information System",
          },
          {
            icon: <FaUserShield className="w-6 h-6" />,
            title: "User Access Control & Security Gate Management",
          },
          {
            icon: <FaHeadset className="w-6 h-6" />,
            title: "Enquiry & Contact Management",
          },
          {
            icon: <FaClipboardList className="w-6 h-6" />,
            title: "Gradebook and Marksheet Generator",
          },
          {
            icon: <FaMoneyBillWave className="w-6 h-6" />,
            title: "Multicurrency Payment Gateway Integration",
          },
          {
            icon: <FaTasks className="w-6 h-6" />,
            title: "Assignment, Course & Examination Management",
          },
          {
            icon: <FaVideo className="w-6 h-6" />,
            title: "Virtual Classroom Management",
          },
          {
            icon: <FaSchool className="w-6 h-6" />,
            title: "Multi-campus/Schools Management",
          },
          {
            icon: <FaClipboardCheck className="w-6 h-6" />,
            title: "Attendance Tracking Management",
          },
          {
            icon: <FaComments className="w-6 h-6" />,
            title: "Communication Management",
          },
          {
            icon: <FaBookOpen className="w-6 h-6" />,
            title: "Library Management",
          },
          {
            icon: <FaMoneyCheckAlt className="w-6 h-6" />,
            title: "Account & Salary Management",
          },
        ]}
      />
</section>

<section>
    <div className="flex items-center justify-center pt-6 text-center text-black md:pt-20">
    <div className="flex flex-col items-center max-w-4xl space-y-6">
      <h1 className="text-black text-3xl xl:text-[53px] font-bold">Star Key Features</h1>
          <p className="text-sm font-semibold text-[#8DC440] uppercase tracking-wide mb-4">
    Payment gateway integrations
    </p>
    </div>
  </div>
    <div className="flex flex-col flex-wrap justify-center gap-4 pt-6 pb-24 md:flex-row md:mx-24">
      <div className="w-full md:w-[calc(25%-16px)]">
        <Image
          src="/Njere_feature_1.png"
          alt="Image 1"
          width={300}
          height={200}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-[calc(25%-16px)]">
        <Image
          src="/Njere_feature_2.png"
          alt="Image 2"
          width={300}
          height={200}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-[calc(25%-16px)]">
        <Image
          src="/Njere_feature_3.png"
          alt="Image 3"
          width={300}
          height={200}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-[calc(25%-16px)]">
        <Image
          src="/Njere_feature_4.png"
          alt="Image 4"
          width={300}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </div>
</section>

{/* feature Section */}
<div className="container flex flex-col items-center gap-8 px-6 py-16 mx-auto md:flex-row md:py-14">

  <div className="pb-4 space-y-4 md:w-1/2 ">
    <h2 className="text-xl font-bold text-gray-800">Njere is intergrated with an open-source web conferencing system designed for online learning and collaboration.</h2>
    <div className="pb-4 space-y-4 border-b border-black"></div>
    <p className="text-sm text-gray-600 lg:text-xs xl:text-sm gap-y-5"> It provides real-time audio, video, and chat capabilities, along with shared whiteboard, screen sharing, and interactive features such as polls and breakout rooms.. It offers an interactive and engaging environment for participants to communicate and collaborate, making it a popular tool for distance learning and remote teamwork.</p>
  </div>

  <div className="flex items-center justify-center order-1 md:w-1/2 h-96 md:order-none">
    <Image
      src="/Njere_key_feature.png"
      alt="Njere feature"
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