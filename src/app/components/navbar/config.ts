import { 
  FiHome, 
  FiInfo, 
  FiGrid, 
  FiBox,
  FiBook, 
  FiUsers, 
  FiMail,
  FiSearch,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiGlobe
} from 'react-icons/fi';

export const NAV_ITEMS = [
  {
    label: "HOME",
    href: "/",
    icon: FiHome,
    iconClass: "text-current"
  },
  {
    label: "ABOUT US",
    href: "/about-us",
    icon: FiInfo,
    iconClass: "text-current"
  },
  {
    label: "SERVICES",
    href: "/services",
    icon: FiGrid,
    iconClass: "text-current",
    dropdown: {
      items: [
        { label: "AI & Machine Learning", href: "/services/ai-and-machine-learning" },
        { label: "Cyber Security", href: "/services/cyber-security" },
        { label: "Platform Development", href: "/services/platform-development" }
      ] as const
    }
  },
  {
    label: "PRODUCTS",
    href: "/products",
    icon: FiBox,
    iconClass: "text-current",
    dropdown: {
      items: [
        { label: "Smat QR", href: "/products/smat-qr" },
        { label: "Smat Prop", href: "/products/smat-prop" },
        { label: "Njere ERP", href: "/products/njere-erp" },
        { label: "SmatPay", href: "/products/smat-pay" }
      ] as const
    }
  },
  {
    label: "RESOURCES",
    href: "/resources",
    icon: FiGlobe,
    iconClass: "text-current"
  },
  {
    label: "CAREERS",
    href: "https://erp.smatechgroup.com/recruitment/recruitment_portal",
    icon: FiUsers,
    iconClass: "text-current"
  },
  {
    label: "CONTACT",
    href: "/contact-us",
    icon: FiMail,
    iconClass: "text-current"
  }
] as const;

export const ICONS = {
  search: FiSearch,
  bars: FiMenu,
  times: FiX,
  chevronDown: FiChevronDown,
  chevronUp: FiChevronUp
} as const;
