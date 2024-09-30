import { ReactNode, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

/**
 * Provides a React component that initializes the AOS (Animate On Scroll) library and manages the theme (light/dark mode) of the application.
 *
 * The `ThemeProvider` component is responsible for the following:
 * 1. Initializing the AOS library with specific configuration options.
 * 2. Handling the theme of the application based on the user's preference or system settings.
 *
 * The component uses the `useEffect` hooks to perform the necessary setup and cleanup tasks.
 *
 * @param {object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered within the `ThemeProvider`.
 * @returns {ReactNode} - The `ThemeProvider` component with the provided children.
 */
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      disable: 'phone'
    });
    return () => Aos.refresh();
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');
    if (!html) return;

    const isLightOrAuto =
      localStorage.getItem('hs_theme') === 'light' ||
      (localStorage.getItem('hs_theme') === 'auto' &&
        !window.matchMedia('(prefers-color-scheme: dark)').matches);
    const isDarkOrAuto =
      localStorage.getItem('hs_theme') === 'dark' ||
      (localStorage.getItem('hs_theme') === 'auto' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isLightOrAuto && html.classList.contains('dark')) {
      html.classList.remove('dark');
    } else if (isDarkOrAuto && html.classList.contains('light')) {
      html.classList.remove('light');
    } else if (isDarkOrAuto && !html.classList.contains('dark')) {
      html.classList.add('dark');
    } else if (isLightOrAuto && !html.classList.contains('light')) {
      html.classList.add('light');
    }
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
