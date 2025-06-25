"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  Info,
  Cog,
  Box,
  Book,
  Briefcase,
  Mail,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Minus,
} from "lucide-react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="relative z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 gap-2">
          <Link href="/" className="block">
            <Image
              src="/smatech_logo.svg"
              alt="Smatech Logo"
              width={160}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="items-center justify-center flex-1 hidden gap-6 font-bold text-black md:flex">
          <NavLinks />
        </ul>

        {/* Search + Hamburger */}
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="py-1 pl-10 pr-4 text-sm text-black bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-green"
              />
              <Search className="absolute left-3 top-1.5 text-gray-500" size={18} />
            </div>
          </form>

          <button
            className="text-gray-700 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="px-4 pb-4 md:hidden bg-navy-blue">
          <ul className="flex flex-col gap-4 font-semibold text-white">
            <NavLinks 
              isMobile 
              mobileServicesOpen={mobileServicesOpen}
              setMobileServicesOpen={setMobileServicesOpen}
            />
            <form onSubmit={handleSearch} className="mt-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 text-sm text-black bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-green"
                />
                <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
              </div>
            </form>
          </ul>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ 
  isMobile = false, 
  mobileServicesOpen = false,
  setMobileServicesOpen = (value: boolean) => {}
}: { 
  isMobile?: boolean;
  mobileServicesOpen?: boolean;
  setMobileServicesOpen?: (value: boolean) => void;
}) {
  const linkClass = isMobile
    ? "flex items-center gap-2 text-sm py-2 px-3 hover:bg-blue-800 rounded transition-colors"
    : "flex flex-col items-center text-xs uppercase tracking-tight";

  const dropdownClass = isMobile
    ? "ml-6 mt-1 flex flex-col gap-1 border-l-2 border-blue-400 pl-4"
    : "absolute hidden group-hover:block bg-white shadow-lg mt-2 text-black font-normal rounded-md overflow-hidden";

  return (
    <>
      <li>
        <Link href="/" className={linkClass}>
          <Home size={18} className={isMobile ? "text-blue-300" : "text-gray-500"} />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href="/about-us" className={linkClass}>
          <Info size={18} className={isMobile ? "text-blue-300" : "text-gray-500"} />
          <span>About Us</span>
        </Link>
      </li>

      {/* Services Dropdown */}
      <li className={`relative ${!isMobile ? "group" : ""}`}>
        {isMobile ? (
          <>
            <button 
              className={`${linkClass} w-full justify-between`}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <div className="flex items-center gap-2">
                <Cog size={18} className="text-blue-300" />
                <span>Services</span>
              </div>
              {mobileServicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            <Link 
              href="/services" 
              className={`${linkClass} text-blue-200 text-xs ml-6`}
              onClick={() => setMobileServicesOpen(false)}
            >
              All Services
            </Link>
            {mobileServicesOpen && (
              <ul className={dropdownClass}>
                <li>
                  <Link 
                    href="/services/it-consulting" 
                    className="flex items-center gap-2 py-2 px-3 hover:bg-blue-700 rounded transition-colors"
                  >
                    <Minus size={16} className="text-blue-300" />
                    <span>IT Consulting</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/cloud-solutions" 
                    className="flex items-center gap-2 py-2 px-3 hover:bg-blue-700 rounded transition-colors"
                  >
                    <Minus size={16} className="text-blue-300" />
                    <span>Cloud Solutions</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/cybersecurity" 
                    className="flex items-center gap-2 py-2 px-3 hover:bg-blue-700 rounded transition-colors"
                  >
                    <Minus size={16} className="text-blue-300" />
                    <span>Cybersecurity</span>
                  </Link>
                </li>
              </ul>
            )}
          </>
        ) : (
          <>
            <Link href="/services" className={linkClass}>
              <Cog size={18} className="text-gray-500" />
              <span>Services</span>
            </Link>
            <ul className={dropdownClass}>
              <li>
                <Link 
                  href="/services/it-consulting" 
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <span>IT Consulting</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/cloud-solutions" 
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <span>Cloud Solutions</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/cybersecurity" 
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  <span>Cybersecurity</span>
                </Link>
              </li>
            </ul>
          </>
        )}
      </li>

      {/* Other nav items... */}
      <li>
        <Link href="/products" className={linkClass}>
          <Box size={18} className={isMobile ? "text-blue-300" : "text-gray-500"} />
          <span>Products</span>
        </Link>
      </li>
      <li>
        <Link href="/resources" className={linkClass}>
          <Book size={18} className={isMobile ? "text-blue-300" : "text-gray-500"} />
          <span>Resources</span>
        </Link>
      </li>
      <li>
        <Link href="/carriers" className={linkClass}>
          <Briefcase size={18} className={isMobile ? "text-blue-300" : "text-gray-500"} />
          <span>Carriers</span>
        </Link>
      </li>
      <li>
        <Link href="/contact-us" className={linkClass}>
          <Mail size={18} className={isMobile ? "text-blue-300" : "text-gray-500"} />
          <span>Contact</span>
        </Link>
      </li>
    </>
  );
}