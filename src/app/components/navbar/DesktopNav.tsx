"use client";
import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS, ICONS } from "./config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NavItem, DropdownItem } from "./types"; // Added DropdownItem import

function hasDropdown(item: NavItem): item is NavItem & { dropdown: { items: readonly DropdownItem[] } } {
  return !!item.dropdown;
}

export default function DesktopNav() {
  const [query, setQuery] = useState("");

  const renderDropdown = (item: NavItem & { dropdown: { items: readonly DropdownItem[] } }) => (
    <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-0 text-black font-normal w-48 z-50 top-full py-2 transition-all duration-200 ease-out">
      {item.dropdown.items.map((subItem: DropdownItem) => ( // Explicitly typed subItem
        <li key={subItem.href}>
          <Link
            href={subItem.href}
            className="block px-4 py-2 hover:bg-gray-100 hover:text-[#8DC440] transition-colors"
          >
            {subItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <ul className="items-center justify-center flex-1 hidden gap-6 font-bold text-black md:flex">
        {NAV_ITEMS.map((item) => (
          <li key={item.href} className={`relative ${hasDropdown(item) ? 'group' : ''}`}>
            <Link 
              href={item.href} 
              className="flex flex-col items-center text-xs uppercase tracking-tight group-hover:text-[#8DC440]"
              target={item.href.startsWith('http') ? '_blank' : undefined}
            >
              <FontAwesomeIcon 
                icon={item.icon} 
                className="text-gray-500 group-hover:text-[#8DC440]" 
              />
              <span>{item.label}</span>
            </Link>
            {hasDropdown(item) && renderDropdown(item)}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <form className="hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="py-1 pl-10 pr-4 text-sm text-black bg-gray-100 rounded-full xl:pr-4 lg:pr-0 focus:outline-none focus:ring-2 focus:ring-custom-green"
            />
            <FontAwesomeIcon
              icon={ICONS.search}
              className="absolute left-3 top-1.5 text-gray-500"
              size="sm"
            />
          </div>
        </form>
      </div>
    </>
  );
}