"use client";
import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS, ICONS } from "./config";
import type { NavItem, DropdownItem } from "./types"; 

function hasDropdown(item: NavItem): item is NavItem & { dropdown: { items: readonly DropdownItem[] } } {
  return !!item.dropdown;
}

export default function DesktopNav() {
  const [query, setQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const renderDropdown = (item: NavItem & { dropdown: { items: readonly DropdownItem[] } }) => (
    <ul 
      className={`absolute ${activeDropdown === item.href ? 'block' : 'hidden'} group-hover:block bg-white shadow-lg rounded-md text-black font-normal w-56 z-50 py-2 transition-all duration-200 ease-out border border-gray-100`}
      onMouseEnter={() => setActiveDropdown(item.href)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {item.dropdown.items.map((subItem: DropdownItem) => (
        <li key={subItem.href}>
          <Link
            href={subItem.href}
            className="block px-4 py-2.5 hover:bg-gray-50 hover:text-[#8DC440] transition-colors text-sm"
          >
            {subItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="flex items-center">
      <ul className="items-center justify-center flex-1 hidden gap-10 font-bold text-black md:flex">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <li 
              key={item.href} 
              className={`relative ${hasDropdown(item) ? 'group' : ''}`}
              onMouseEnter={() => hasDropdown(item) && setActiveDropdown(item.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href={item.href} 
                className={`flex flex-col items-center text-xs uppercase tracking-tight transition-colors ${activeDropdown === item.href ? 'text-[#8DC440]' : 'hover:text-[#8DC440]'}`}
                target={item.href.startsWith('http') ? '_blank' : undefined}
              >
                <Icon 
                  className={`w-6 h-6 mb-1.5 transition-colors ${activeDropdown === item.href ? 'text-[#8DC440]' : 'text-gray-400 hover:text-[#8DC440]'}`} 
                />
                <span>{item.label}</span>
              </Link>
              {hasDropdown(item) && renderDropdown(item)}
            </li>
          );
        })}
      </ul>

      <div className="hidden ml-8 md:block">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="py-2 pl-10 pr-4 text-sm text-black bg-gray-100 rounded-full w-48 focus:outline-none focus:ring-2 focus:ring-[#8DC440] transition-all"
          />
          <ICONS.search className="absolute w-4 h-4 text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
        </div>
      </div>
    </div>
  );
}