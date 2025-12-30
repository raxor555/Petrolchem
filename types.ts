
export interface NavItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
}

export interface MegaMenuContent {
  title: string;
  links: { label: string; href: string }[];
}

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  linkText: string;
}
