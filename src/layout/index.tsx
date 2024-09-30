import { Meta } from '@/components';
import ScrollToTop from '@/components/common/scroll-to-top';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ThemeProvider from '@/providers/theme';
import 'preline/preline';
import { IStaticMethods } from 'preline/preline';
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * The main layout component for the application.
 *
 * This component wraps the entire application and provides a consistent layout with a header, footer, and scroll-to-top button.
 * It also sets up the theme provider and meta tags for the application.
 *
 * @param {LayoutProps} props - The props for the layout component.
 * @param {ReactNode} props.children - The content to be rendered within the layout.
 * @returns {ReactElement} The layout component.
 */

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <Meta />
      <main className="flex flex-col bg-white">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
