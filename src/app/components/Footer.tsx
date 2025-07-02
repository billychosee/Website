"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillBuildingFill, BsMailbox2 } from "react-icons/bs";

export default function Footer() {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your message was sent successfully!");
        setFormData({ email: "", message: "" });
      } else {
        alert("There was a problem sending your message.");
      }
    } catch (err) {
      console.error(err);
      alert("There was a problem sending your message.");
    }
  };

  return (
    <footer className="relative px-6 py-12 text-white min-h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/footer_bg.png"
          alt="Footer Background"
          fill
          className="object-cover"
          quality={90}
          priority
        />
      </div>

      <div className="relative z-10 px-0 md:mx-24">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link href="/">
            <Image
              src="/smatech_logo.svg"
              alt="Smatech Logo"
              width={208}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
          {/* Column 1: Quick Links */}
          <div>
            <h2 className="mb-4 text-xl font-bold lg:text-sm xl:text-base">Our Company</h2>
            <ul className="space-y-2 text-xl lg:text-sm xl:text-base">
              <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/products" className="hover:underline">Products</Link></li>
              <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col items-center text-xl md:items-start lg:text-sm xl:text-base space-y-2">
            <h2 className="mb-4 font-bold">Contact Info</h2>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#8DC440] w-4 h-4" />
              <p>+263 86 880 08361</p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#8DC440] w-4 h-4" />
              <p>+263 78 956 6427</p>
            </div>
            <div className="flex items-center gap-2">
              <BsMailbox2 className="text-[#8DC440] w-4 h-4" />
              <a href="mailto:info@smatechgroup.com" className="hover:underline">
                info@smatechgroup.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <BsFillBuildingFill className="text-[#8DC440] w-4 h-4" />
              <p>13 Brentwood Avenue, Harare, Zimbabwe</p>
            </div>
          </div>

          {/* Column 3: Contact Form */}
          <div className="flex flex-col items-center text-xl md:items-end lg:text-sm xl:text-base">
            <h2 className="mb-4 font-bold">Get in Touch</h2>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md space-y-3 text-white"
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded resize-none"
                required
              />
              <button
                type="submit"
                className="bg-[#8DC440] text-white px-5 py-2 rounded hover:bg-[#76a532] transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 mt-10 text-sm text-center text-gray-300 border-t border-gray-400">
          © {new Date().getFullYear()} Smatech Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
