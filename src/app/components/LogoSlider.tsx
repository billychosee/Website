"use client";
import Image from "next/image";
import Link from "next/link";

const logos = [
  { logo: "/Smatech_logo.svg", url: "/" },
  { logo: "/smatpay_logo.svg", url: "/" },
  { logo: "/smat_qr_logo.svg", url: "/" },
  { logo: "/smat_tutor_logo.svg", url: "/" },
  { logo: "/smatprop_logo.svg", url: "/" },
  { logo: "/njere_logo.svg", url: "/" },
];

export default function LogoSlider() {
  return (
    <div className="w-full py-10 overflow-hidden bg-white">
      <div className="flex gap-16 px-4 animate-slide w-max">
        {[...logos, ...logos].map((item, i) => (
          <Link key={i} href={item.url}>
            <Image
              src={item.logo}
              alt="Business Logo"
              width={100}
              height={100}
              className="object-contain w-24 h-auto"
            />
          </Link>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 50s linear infinite;
        }
      `}</style>
    </div>
  );
}
