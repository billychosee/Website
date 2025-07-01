"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import useScrollHide from "./hooks/useScrollHide";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navbarVisible = useScrollHide(mobileMenuOpen);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed w-full z-50 ${mobileMenuOpen ? 'bg-white' : 'bg-white/95'} shadow-md backdrop-blur-sm transition-transform duration-300 ${navbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between px-6 py-4 md:px-24 xl:px-32 lg:px-12">
        <div className="flex items-center flex-shrink-0 gap-2">
          <Link href="/">
            <Image
              src="/smatech_logo.svg"
              alt="Smatech Logo"
              width={180}
              height={45}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        <DesktopNav />
        <MobileNav 
          isOpen={mobileMenuOpen} 
          onToggle={() => setMobileMenuOpen(!mobileMenuOpen)} 
        />
      </div>
    </nav>
  );
}