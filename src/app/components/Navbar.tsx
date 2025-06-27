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
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  // Scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) return; // Don't hide if mobile menu is open
      
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`fixed w-full z-50 bg-white/95 shadow-md backdrop-blur-sm transition-transform duration-300 ${navbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 gap-2">
          <Link href="/">
            <Image
              src="/smatech_logo.svg"
              alt="Smatech Logo"
              width={160}
              height={40}
              priority
              className="object-contain"
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 md:hidden"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 transition-opacity duration-300 bg-black bg-opacity-50 md:hidden">
          <div
            ref={menuRef}
            className="fixed inset-y-0 right-0 z-50 flex flex-col w-3/4 max-w-sm p-4 bg-white shadow-lg"
          >
            {/* Header with logo and close button */}
            <div className="flex items-center justify-between pb-2 mb-4 border-b">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/smatech_logo.svg"
                  alt="Smatech Logo"
                  width={120}
                  height={30}
                  className="object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-700 bg-gray-100 rounded-full"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <ul className="flex flex-col flex-1 gap-4 font-semibold text-black">
              <NavLinks
                isMobile
                mobileServicesOpen={mobileServicesOpen}
                setMobileServicesOpen={setMobileServicesOpen}
                mobileProductsOpen={mobileProductsOpen}
                setMobileProductsOpen={setMobileProductsOpen}
                closeMenu={() => setMobileMenuOpen(false)}
              />
              <form onSubmit={handleSearch} className="mt-4">
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
      )}
    </nav>
  );
}

type NavLinksProps = {
  isMobile?: boolean;
  mobileServicesOpen?: boolean;
  setMobileServicesOpen?: (v: boolean) => void;
  mobileProductsOpen?: boolean;
  setMobileProductsOpen?: (v: boolean) => void;
  closeMenu?: () => void;
};

function NavLinks({
  isMobile = false,
  mobileServicesOpen = false,
  setMobileServicesOpen = () => {},
  mobileProductsOpen = false,
  setMobileProductsOpen = () => {},
  closeMenu = () => {},
}: NavLinksProps) {
  const linkClass = isMobile
    ? "flex items-center gap-3 text-sm py-2 px-3 hover:bg-gray-100 rounded hover:text-[#8DC440]"
    : "flex flex-col items-center text-xs uppercase tracking-tight group hover:text-[#8DC440] relative";

  const iconClass = "text-gray-500 group-hover:text-[#8DC440]";

  const desktopDropdownClass =
    "absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-0 text-black font-normal w-48 z-50 top-full py-2 transition-all duration-200 ease-out";

  const mobileDropdownClass =
    "ml-6 mt-1 flex flex-col gap-1 border-l-2 border-gray-200 pl-4";

  return (
    <>
      {/* Home */}
      <li>
        <Link href="/" className={linkClass} onClick={closeMenu}>
          <FontAwesomeIcon icon={faHome} className={iconClass} />
          <span>Home</span>
        </Link>
      </li>

      {/* About Us */}
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
                <FontAwesomeIcon
                  icon={faCog}
                  className={mobileServicesOpen ? "text-[#8DC440]" : "text-gray-500"}
                />
                <span>Services</span>
              </div>
              {mobileServicesOpen ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </button>
            {mobileServicesOpen && (
              <ul className={mobileDropdownClass}>
                <li>
                  <Link
                    href="/services/it-consulting"
                    onClick={() => {
                      closeMenu();
                      setMobileServicesOpen(false);
                    }}
                    className="py-2 px-3 hover:bg-gray-100 rounded hover:text-[#8DC440]"
                  >
                    IT Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cloud-solutions"
                    onClick={() => {
                      closeMenu();
                      setMobileServicesOpen(false);
                    }}
                    className="py-2 px-3 hover:bg-gray-100 rounded hover:text-[#8DC440]"
                  >
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cybersecurity"
                    onClick={() => {
                      closeMenu();
                      setMobileServicesOpen(false);
                    }}
                    className="py-2 px-3 hover:bg-gray-100 rounded hover:text-[#8DC440]"
                  >
                    Cybersecurity
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
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#8DC440] transition-colors"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-solutions"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#8DC440] transition-colors"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cybersecurity"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#8DC440] transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </>
        )}
      </li>

      {/* Products Dropdown */}
      <li className={`relative ${!isMobile ? "group" : ""}`}>
        {isMobile ? (
          <>
            <button
              className={`${linkClass} w-full justify-between`}
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              aria-expanded={mobileProductsOpen}
            >
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faBoxOpen}
                  className={mobileProductsOpen ? "text-[#8DC440]" : "text-gray-500"}
                />
                <span>Products</span>
              </div>
              <FontAwesomeIcon 
                icon={mobileProductsOpen ? faChevronUp : faChevronDown} 
              />
            </button>

            {/* Mobile Dropdown Menu */}
            {mobileProductsOpen && (
              <ul className={mobileDropdownClass}>
                <li>
                  <Link
                    href="/products/smat-qr"
                    onClick={() => {
                      closeMenu();
                      setMobileProductsOpen(false);
                    }}
                    className="py-2 px-3 hover:bg-gray-100 rounded hover:text-[#8DC440] transition-colors"
                  >
                    Smat QR
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/smat-prop"
                    onClick={() => {
                      closeMenu();
                      setMobileProductsOpen(false);
                    }}
                    className="py-2 px-3 hover:bg-gray-100 rounded hover:text-[#8DC440] transition-colors"
                  >
                    Smat Prop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/njere-erp"
                    onClick={() => {
                      closeMenu();
                      setMobileProductsOpen(false);
                    }}
                    className="py-2 px-3 hover:bg-gray-100 rounded hover:text-[#8DC440] transition-colors"
                  >
                    Njere ERP
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products/smat-pay"
                    onClick={() => {
                      closeMenu();
                      setMobileProductsOpen(false);
                    }}
                    className="py-2 px-3 hover:bg-gray-100 rounded hover:text-[#8DC440] transition-colors"
                  >
                    SmatPay
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

            {/* Desktop Dropdown Menu */}
            <ul className={desktopDropdownClass}>
              <li>
                <Link
                  href="/products/smat-qr"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#8DC440] transition-colors"
                >
                  Smat QR
                </Link>
              </li>
              <li>
                <Link
                  href="/products/smat-prop"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#8DC440] transition-colors"
                >
                  Smat Prop
                </Link>
              </li>
              <li>
                <Link
                  href="/products/njere-erp"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#8DC440] transition-colors"
                >
                  Njere ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/products/smat-pay"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#8DC440] transition-colors"
                >
                  SmatPay
                </Link>
              </li>
            </ul>
          </>
        )}
      </li>

      {/* Other Links */}
      <li>
        <Link href="/resources" className={linkClass} onClick={closeMenu}>
          <FontAwesomeIcon icon={faBook} className={iconClass} />
          <span>Resources</span>
        </Link>
      </li>
      <li>
        <a 
          href="https://erp.smatechgroup.com/recruitment/recruitment_portal" 
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={faBriefcase} className={iconClass} />
          <span>Carriers</span>
        </a>
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