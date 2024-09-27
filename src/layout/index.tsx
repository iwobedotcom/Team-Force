import { ReactElement, ReactNode, useEffect } from 'react';

import 'preline/preline';
import { IStaticMethods } from 'preline/preline';
import { useLocation } from 'react-router-dom';
import ThemeProvider from '@/providers/theme';
import Meta from '@/components/common/meta';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/common/scroll-to-top';

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
      <div className="min-h-screen bg-body-color dark:bg-black">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
