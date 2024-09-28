import { PropsWithChildren } from 'react';
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
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

export type CustomHeadingProps = {
  title: string;
  size: 'small' | 'medium' | 'large';
  paragraph?: string;
  center?: boolean;
};

export type CustomSectionProps<T = unknown> = PropsWithChildren<T> & {
  id: string;
  container?: boolean;
  className?: string;
};
