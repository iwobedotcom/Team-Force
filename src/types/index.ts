import { PropsWithChildren, ReactElement } from 'react';
export type MetadataProps = {
  title: string;
  description: string;
  applicationName: string;
  referrer: string;
  keywords: string[];
  robots: {
    index?: boolean;
    follow?: boolean;
    nocache?: boolean;
    googleBot?: {
      index: boolean;
      follow: boolean;
      noimageindex: boolean;
      'max-video-preview': number;
      'max-image-preview': string;
      'max-snippet': number;
    };
  };
};

export type ButtonLinkProps = {
  to: string;
  label: string;
  variant?: 'button' | 'link';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactElement | null;
  color?: string;
  alt?: boolean;
};

export type CustomHeadingProps = {
  title: string;
  size: 'small' | 'medium' | 'large';
  className?: string;
  paragraph?: string;
  center?: boolean;
};

export type CustomSectionProps = PropsWithChildren<{
  id: string;
  container?: boolean;
  className?: string;
  waveColor?: string;
}>;

export type OfferingProps = {
  id?: number;
  title: string;
  description: string;
  mockup: string;
  link?: string;
  bgColor?: string;
  height?: string;
  imageRes?: string;
  positioning?: string;
};

export type StatsProps = {
  id: number;
  sum: string;
  label: string;
};

export type ServsProps = {
  id: number;
  icon: string;
  title: string;
  bgColor: string;
};

export type FAQsProps = {
  id: number;
  question: string;
  answer: string;
};

type FooterNavItem = {
  id: number;
  title: string;
  link: string;
};

export type FooterNavLinksProps = {
  heading: string;
  menu: FooterNavItem[];
};

export type TestimonialsProps = {
  id: number;
  avatar: string;
  name: string;
  message: string;
  title: string;
  stars: number;
};
