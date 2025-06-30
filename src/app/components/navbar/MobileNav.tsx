"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, ICONS } from "./config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NavItem, DropdownItem } from "./types";

function hasDropdown(item: NavItem): item is NavItem & { dropdown: { items: readonly DropdownItem[] } } {
  return !!item.dropdown;
}

export default function MobileNav({ 
  isOpen, 
  onToggle 
}: { 
  isOpen: boolean; 
  onToggle: () => void 
}) {
  const [query, setQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      onToggle();
    }
  }, [onToggle]);

  useEffect(() => {
    if (!isOpen) setOpenDropdown(null);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, handleClickOutside]);

  const renderDropdownItems = (items: readonly DropdownItem[]) => (
    <ul className="ml-6 mt-1 flex flex-col gap-1 border-l-2 border-[#8DC440] pl-4">
      {items.map((subItem) => (
        <li key={subItem.href}>
          <Link
            href={subItem.href}
            className="block py-2 px-3 hover:bg-gray-100 rounded hover:text-[#8DC440] text-sm"
            onClick={onToggle}
          >
            {subItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <button
        onClick={onToggle}
        className="text-gray-700 md:hidden"
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isOpen ? ICONS.times : ICONS.bars} size="lg" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div ref={menuRef} className="fixed right-0 z-50 flex flex-col w-3/4 max-w-sm p-4 bg-white shadow-lg">
            <div className="flex items-center justify-between pb-2 mb-4 border-b">
              <Link href="/" onClick={onToggle}>
                <Image
                  src="/smatech_logo.svg"
                  alt="Smatech Logo"
                  width={120}
                  height={30}
                  className="object-contain"
                />
              </Link>
              <button onClick={onToggle} className="p-2 text-gray-700 bg-gray-100 rounded-full">
                <FontAwesomeIcon icon={ICONS.times} />
              </button>
            </div>

            <ul className="flex flex-col flex-1 gap-4 font-semibold text-black">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  {hasDropdown(item) ? (
                    <>
                      <button
                        className={`flex items-center justify-between w-full py-2 px-3 hover:bg-gray-100 rounded hover:text-[#8DC440] ${
                          openDropdown === item.href ? 'text-[#8DC440]' : ''
                        }`}
                        onClick={() => setOpenDropdown(
                          openDropdown === item.href ? null : item.href
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <FontAwesomeIcon 
                            icon={item.icon} 
                            className={openDropdown === item.href ? "text-[#8DC440]" : "text-gray-500"} 
                          />
                          <span>{item.label}</span>
                        </div>
                        <FontAwesomeIcon 
                          icon={openDropdown === item.href ? ICONS.chevronUp : ICONS.chevronDown} 
                        />
                      </button>
                      {openDropdown === item.href && renderDropdownItems(item.dropdown.items)}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 py-2 px-3 hover:bg-gray-100 rounded hover:text-[#8DC440]"
                      onClick={onToggle}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                    >
                      <FontAwesomeIcon icon={item.icon} className="text-gray-500" />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <form className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 text-sm text-black bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-green"
                />
                <FontAwesomeIcon
                  icon={ICONS.search}
                  className="absolute left-3 top-2.5 text-gray-500"
                  size="sm"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}