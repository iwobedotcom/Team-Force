import React, { ReactElement, ReactNode, useEffect } from 'react';
import 'preline/preline';
import { IStaticMethods } from 'preline/preline';
import { useLocation } from 'react-router-dom';
import ThemeProvider from '@/providers/theme';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/common/scroll-to-top';
import { Meta } from '@/components';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): ReactElement {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <Meta />
      {/*   <div className="flex flex-col h-screen overflow-hidden bg-body-color dark:bg-black"> */}
      <div className="flex flex-col bg-white">
        {/* <Header /> */}
        {/*  <div className="flex-grow overflow-y-scroll snap-y snap-mandatory"> */}
        {children}
        <Footer />
        {/* </div> */}
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
