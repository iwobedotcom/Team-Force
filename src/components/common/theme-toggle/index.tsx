import useMediaQueries from '@/hooks/useMediaQueries';
import { useState } from 'react';

export default function ThemeToggle({ sticky }: { sticky?: boolean }) {
  const { isMobile } = useMediaQueries();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.getItem('hs_theme') === 'dark' ||
      (localStorage.getItem('hs_theme') === 'auto' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  const handleToggle = () => {
    const html = document.querySelector('html');
    if (isDarkMode) {
      html?.classList.remove('dark');
      localStorage.setItem('hs_theme', 'light');
    } else {
      html?.classList.add('dark');
      localStorage.setItem('hs_theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const buttonTextColor = sticky && isMobile ? 'text-white' : 'text-white';
  const buttonHoverColor = sticky && isMobile ? 'hover:text-white/75' : 'hover:text-black/75';

  return (
    <div className="flex items-center">
      <button
        type="button"
        className={`hs-dark-mode-active:hidden block hs-dark-mode font-medium ${buttonTextColor} ${buttonHoverColor} ${isDarkMode ? 'hidden' : 'block'}`}
        onClick={handleToggle}
        data-hs-theme-click-value="dark"
      >
        <span className="group inline-flex shrink-0 justify-center items-center size-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            className="shrink-0 size-6"
          >
            <g fill="currentColor">
              <path
                d="M12.612 3.474a5 5 0 0 0-2.887 3.55a5.005 5.005 0 0 0 3.85 5.94A5 5 0 0 0 19 10.47c.245-.447.923-.285.939.224a8.5 8.5 0 0 1-.184 2.047c-.978 4.6-5.493 7.538-10.085 6.562S2.15 13.806 3.127 9.206c.92-4.326 4.99-7.22 9.345-6.686c.504.062.605.75.14.954"
                opacity="0.2"
              />
              <path
                fillRule="evenodd"
                d="M8.275 6.024a5 5 0 0 1 2.887-3.55c.465-.205.364-.892-.14-.954C6.667.986 2.597 3.88 1.677 8.206c-.977 4.6 1.952 9.12 6.544 10.097c4.592.976 9.107-1.962 10.085-6.562a8.6 8.6 0 0 0 .184-2.047c-.016-.509-.694-.671-.939-.224a5 5 0 0 1-5.427 2.494a5.005 5.005 0 0 1-3.849-5.94m-5.62 2.39a7.52 7.52 0 0 1 6.618-5.923c-.989.844-1.694 2-1.976 3.325a6.005 6.005 0 0 0 4.62 7.126a6 6 0 0 0 5.446-1.584l-.035.175c-.863 4.06-4.847 6.653-8.899 5.792c-4.051-.862-6.636-4.85-5.773-8.91"
                clipRule="evenodd"
              />
            </g>
          </svg>
        </span>
      </button>

      <button
        type="button"
        className={`hs-dark-mode-active:block hidden hs-dark-mode font-medium ${buttonTextColor} ${buttonHoverColor} ${isDarkMode ? 'block' : 'hidden'}`}
        onClick={handleToggle}
        data-hs-theme-click-value="light"
      >
        <span className="group inline-flex shrink-0 justify-center items-center size-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
            className="shrink-0 size-6"
          >
            <g fill="currentColor">
              <path d="M184 128a56 56 0 1 1-56-56a56 56 0 0 1 56 56" opacity="0.2" />
              <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16" />
            </g>
          </svg>
        </span>
      </button>
    </div>
  );
}
