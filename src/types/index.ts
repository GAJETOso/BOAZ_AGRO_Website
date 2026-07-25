export interface Division {
  num: string;
  icon: string;
  name: string;
  desc: string;
}

export interface HeroHighlight {
  icon: string;
  title: string;
  desc: string;
  rotate: string;
}

export interface Commodity {
  icon: string;
  name: string;
  desc: string;
  tag: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface ChainCell {
  icon: string;
  label: string;
  highlight?: boolean;
  wide?: boolean;
}

export interface WhyItem {
  icon: string;
  title: string;
  desc: string;
}

export interface StatTile {
  value: string;
  label: string;
}

export interface ContactCard {
  icon: string;
  label: string;
  value: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
