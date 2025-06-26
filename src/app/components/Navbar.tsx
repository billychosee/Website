"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faInfoCircle,
  faCog,
  faBoxOpen,
  faBook,
  faBriefcase,
  faEnvelope,
  faSearch,
  faBars,
  faTimes,
  faChevronDown,
  faChevronUp,
  faMinus
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-3 top-1.5 text-gray-500" 
                size="sm"
              />
            </div>
          </form>

          <button
            className="text-gray-700 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 transition-opacity duration-300 bg-black bg-opacity-50 md:hidden">
          {/* Mobile Menu Panel */}
          <div 
            ref={menuRef}
            className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm transition-transform duration-300 ease-in-out transform translate-x-0 bg-white shadow-lg"
          >
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Header with Logo and Close Button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link href="/" className="block" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/smatech_logo.svg"
                    alt="Smatech Logo"
                    width={120}
                    height={30}
                    className="object-contain"
                  />
                </Link>
                <button
                  className="p-2 text-gray-700 bg-gray-100 rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 px-4 py-4">
                <ul className="flex flex-col gap-4 font-semibold text-black">
                  <NavLinks 
                    isMobile 
                    mobileServicesOpen={mobileServicesOpen}
                    setMobileServicesOpen={setMobileServicesOpen}
                    mobileProductsOpen={mobileProductsOpen}
                    setMobileProductsOpen={setMobileProductsOpen}
                    closeMenu={() => setMobileMenuOpen(false)}
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
                      <FontAwesomeIcon 
                        icon={faSearch} 
                        className="absolute left-3 top-2.5 text-gray-500" 
                        size="sm"
                      />
                    </div>
                  </form>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ 
  isMobile = false, 
  mobileServicesOpen = false,
  setMobileServicesOpen = (value: boolean) => {},
  mobileProductsOpen = false,
  setMobileProductsOpen = (value: boolean) => {},
  closeMenu = () => {}
}: { 
  isMobile?: boolean;
  mobileServicesOpen?: boolean;
  setMobileServicesOpen?: (value: boolean) => void;
  mobileProductsOpen?: boolean;
  setMobileProductsOpen?: (value: boolean) => void;
  closeMenu?: () => void;
}) {
  const linkClass = isMobile
    ? "flex items-center gap-3 text-sm py-2 px-3 hover:bg-gray-100 rounded transition-colors hover:text-[#8DC440]"
    : "flex flex-col items-center text-xs uppercase tracking-tight group hover:text-[#8DC440]";

  const iconClass = isMobile 
    ? "text-gray-500 group-hover:text-[#8DC440]"
    : "text-gray-500 group-hover:text-[#8DC440]";

  const desktopDropdownClass = "absolute hidden group-hover:block bg-navy-blue shadow-lg mt-2 text-black font-normal rounded-md overflow-hidden w-64";
  const mobileDropdownClass = "ml-6 mt-1 flex flex-col gap-1 border-l-2 border-gray-200 pl-4";

  return (
    <>
      <li>
        <Link href="/" className={linkClass} onClick={closeMenu}>
          <FontAwesomeIcon icon={faHome} className={iconClass} />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href="/about-us" className={linkClass} onClick={closeMenu}>
          <FontAwesomeIcon icon={faInfoCircle} className={iconClass} />
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
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCog} className={mobileServicesOpen ? "text-[#8DC440]" : "text-gray-500"} />
                <span className={mobileServicesOpen ? "text-[#8DC440]" : ""}>Services</span>
              </div>
              {mobileServicesOpen ? (
                <FontAwesomeIcon icon={faChevronUp} className="text-gray-500" />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} className="text-gray-500" />
              )}
            </button>
            {mobileServicesOpen && (
              <ul className={mobileDropdownClass}>
                <li>
                  <Link 
                    href="/services/it-consulting" 
                    className="flex items-start py-2 px-3 hover:bg-gray-100 rounded transition-colors hover:text-[#8DC440]"
                    onClick={() => {
                      setMobileServicesOpen(false);
                      closeMenu();
                    }}
                  >
                    <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#8DC440] before:mt-2 before:mr-2 before:inline-block">
                      <span>IT Consulting</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/cloud-solutions" 
                    className="flex items-start py-2 px-3 hover:bg-gray-100 rounded transition-colors hover:text-[#8DC440]"
                    onClick={() => {
                      setMobileServicesOpen(false);
                      closeMenu();
                    }}
                  >
                    <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#8DC440] before:mt-2 before:mr-2 before:inline-block">
                      <span>Cloud Solutions</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/cybersecurity" 
                    className="flex items-start py-2 px-3 hover:bg-gray-100 rounded transition-colors hover:text-[#8DC440]"
                    onClick={() => {
                      setMobileServicesOpen(false);
                      closeMenu();
                    }}
                  >
                    <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#8DC440] before:mt-2 before:mr-2 before:inline-block">
                      <span>Cybersecurity</span>
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </>
        ) : (
          <>
            <Link href="/services" className={linkClass}>
              <FontAwesomeIcon icon={faCog} className={iconClass} />
              <span>Services</span>
            </Link>
            <ul className={desktopDropdownClass}>
              <li>
                <Link 
                  href="/services/it-consulting" 
                  className="flex items-start px-4 py-3 transition-colors hover:bg-blue-800"
                >
                  <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#8DC440] before:mt-2 before:mr-3 before:inline-block">
                    <span>IT Consulting</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/cloud-solutions" 
                  className="flex items-start px-4 py-3 transition-colors hover:bg-blue-800"
                >
                  <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#8DC440] before:mt-2 before:mr-3 before:inline-block">
                    <span>Cloud Solutions</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/cybersecurity" 
                  className="flex items-start px-4 py-3 transition-colors hover:bg-blue-800"
                >
                  <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#8DC440] before:mt-2 before:mr-3 before:inline-block">
                    <span>Cybersecurity</span>
                  </div>
                </Link>
              </li>
            </ul>
          </>
        )}
      </li>

      {/* Products Dropdown */}
{/* Products Dropdown */}
<li className={`relative ${!isMobile ? "group" : ""}`}>
  {isMobile ? (
    <>
      <button 
        className={`${linkClass} w-full justify-between`}
        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
      >
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faBoxOpen} className={mobileProductsOpen ? "text-[#8DC440]" : "text-gray-500"} />
          <span className={mobileProductsOpen ? "text-[#8DC440]" : ""}>Products</span>
        </div>
        {mobileProductsOpen ? (
          <FontAwesomeIcon icon={faChevronUp} className="text-gray-500" />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className="text-gray-500" />
        )}
      </button>
      {mobileProductsOpen && (
        <ul className={mobileDropdownClass}>
          <li>
            <Link 
              href="/products/smat-qr" 
              className="flex items-start py-2 px-3 hover:bg-gray-100 rounded transition-colors hover:text-[#8DC440]"
              onClick={() => {
                setMobileProductsOpen(false);
                closeMenu();
              }}
            >
              <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#8DC440] before:mt-2 before:mr-2 before:inline-block">
                <span>Smat QR</span>
              </div>
            </Link>
          </li>
          <li>
            <Link 
              href="/products/hardware" 
              className="flex items-start py-2 px-3 hover:bg-gray-100 rounded transition-colors hover:text-[#8DC440]"
              onClick={() => {
                setMobileProductsOpen(false);
                closeMenu();
              }}
            >
              <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#8DC440] before:mt-2 before:mr-2 before:inline-block">
                <span>Hardware Products</span>
              </div>
            </Link>
          </li>
        </ul>
      )}
    </>
  ) : (
    <>
      <Link href="/products" className={linkClass}>
        <FontAwesomeIcon icon={faBoxOpen} className={iconClass} />
        <span>Products</span>
      </Link>
      <ul className={desktopDropdownClass}>
        <li>
          <Link 
            href="/products/smat-qr" 
            className="flex items-start px-4 py-3 transition-colors hover:bg-blue-800"
          >
            <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#8DC440] before:mt-2 before:mr-3 before:inline-block">
              <span>Smat QR</span>
            </div>
          </Link>
        </li>
        <li>
          <Link 
            href="/products/hardware" 
            className="flex items-start px-4 py-3 transition-colors hover:bg-blue-800"
          >
            <div className="flex items-start before:content-[''] before:w-2 before:h-2 before:bg-[#8DC440] before:mt-2 before:mr-3 before:inline-block">
              <span>Hardware Products</span>
            </div>
          </Link>
        </li>
      </ul>
    </>
  )}
</li>

      {/* Other nav items... */}
      <li>
        <Link href="/resources" className={linkClass} onClick={closeMenu}>
          <FontAwesomeIcon icon={faBook} className={iconClass} />
          <span>Resources</span>
        </Link>
      </li>
      <li>
        <Link href="/carriers" className={linkClass} onClick={closeMenu}>
          <FontAwesomeIcon icon={faBriefcase} className={iconClass} />
          <span>Carriers</span>
        </Link>
      </li>
      <li>
        <Link href="/contact-us" className={linkClass} onClick={closeMenu}>
          <FontAwesomeIcon icon={faEnvelope} className={iconClass} />
          <span>Contact</span>
        </Link>
      </li>
    </>
  );
}