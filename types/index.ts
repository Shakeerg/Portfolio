import type { StaticImageData } from "next/image";

/** A single project shown in the "My Work" section. */
export interface WorkItem {
  title: string;
  description: string;
  bgImage: string;
}

/** A single card in the "My Services" section. */
export interface ServiceItem {
  icon: StaticImageData;
  title: string;
  description: string;
  link: string;
}

/** A single stat card in the "About Me" section. */
export interface InfoItem {
  icon: StaticImageData;
  iconDark: StaticImageData;
  title: string;
  description: string;
}

/** Props shared by every top-level section that reacts to dark mode. */
export interface DarkModeProps {
  isDarkMode: boolean;
}

/** Props for the Navbar, which also controls the dark mode toggle. */
export interface NavbarProps extends DarkModeProps {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
