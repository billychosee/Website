import Link from 'next/link';
import Footer from '../components/Footer';

function Resources() {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-gradient-to-t from-[#ccf1ff] to-white justify-center items-center text-center animate-fade-in px-4">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Resources</h1>
        <p className="text-xl text-gray-600 mb-8">
          This page is under production. Please check back soon.
        </p>
        <Link
          href="/"
          className="bg-[#8DC440] hover:bg-black text-white px-6 py-3 rounded-full text-lg transition duration-300 shadow-md"
        >
          Go back Home
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Resources;
