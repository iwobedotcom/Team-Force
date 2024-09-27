export type Metadata = {
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
      "max-video-preview": number;
      "max-image-preview": string;
      "max-snippet": number;
    };
  };
};
