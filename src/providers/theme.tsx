import { ReactNode, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      disable: 'phone'
    });
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
}
