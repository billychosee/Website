import { 
  faHome, faInfoCircle, faCog, faBoxOpen,
  faBook, faBriefcase, faEnvelope, faSearch,
  faBars, faTimes, faChevronDown, faChevronUp
} from '@fortawesome/free-solid-svg-icons';

export const NAV_ITEMS = [
  {
    label: "HOME",
    href: "/",
    icon: faHome
  },
  {
    label: "ABOUT US",
    href: "/about-us",
    icon: faInfoCircle
  },
  {
    label: "SERVICES",
    href: "/services",
    icon: faCog,
    dropdown: {
      items: [
        { label: "IT Consulting", href: "/services/it-consulting" },
        { label: "Cloud Solutions", href: "/services/cloud-solutions" },
        { label: "Cybersecurity", href: "/services/cybersecurity" }
      ] as const
    }
  },
  {
    label: "PRODUCTS",
    href: "/products",
    icon: faBoxOpen,
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
    icon: faBook
  },
  {
    label: "CARRIERS",
    href: "https://erp.smatechgroup.com/recruitment/recruitment_portal",
    icon: faBriefcase
  },
  {
    label: "CONTACT",
    href: "/contact-us",
    icon: faEnvelope
  }
] as const;

export const ICONS = {
  search: faSearch,
  bars: faBars,
  times: faTimes,
  chevronDown: faChevronDown,
  chevronUp: faChevronUp
} as const;