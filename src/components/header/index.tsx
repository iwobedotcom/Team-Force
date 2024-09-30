import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ButtonLink from '../common/buttons/button-link';
import { headerNavlinks } from '../../config/headerNavlinks';
import { useMediaQueries } from '@/hooks/useMediaQueries';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { isMobile } = useMediaQueries();

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  const location = useLocation();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? 'dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] glassmorphism !bg-opacity-80 shadow-sticky backdrop-blur-sm transition'
            : 'absolute bg-transparent'
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                to="/"
                className={`header-logo block w-full ${sticky ? 'py-5 lg:py-2' : 'py-5'} `}
              >
                {sticky ? (
                  <>
                    <img
                      src="/images/logo-alt.png"
                      alt="logo"
                      className="dark:hidden"
                      width={100}
                      height={100}
                    />
                    <img
                      src="/images/logo-alt.png"
                      alt="logo"
                      className="hidden dark:block"
                      width={100}
                      height={100}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      className="dark:hidden"
                      width={100}
                      height={100}
                    />
                    <img
                      src="/images/logo.png"
                      alt="logo"
                      className="hidden dark:block"
                      width={100}
                      height={100}
                    />
                  </>
                )}
              </Link>
            </div>

            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] ${sticky ? 'bg-black/65' : 'bg-white'} transition-all duration-300 dark:bg-white ${
                      navbarOpen ? ' top-[7px] rotate-45' : ' '
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] ${sticky ? 'bg-black/65' : 'bg-white'} transition-all duration-300 dark:bg-white ${
                      navbarOpen ? 'opacity-0 ' : ' '
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] ${sticky ? 'bg-black/65' : 'bg-white'} transition-all duration-300 dark:bg-white ${
                      navbarOpen ? ' top-[-8px] -rotate-45' : ' '
                    }`}
                  />
                </button>

                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-full border-[.5px] border-body-color/50 px-6 py-4 duration-300 ${isMobile ? 'bg-gradient' : ''} dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? 'visibility top-full opacity-100'
                      : 'invisible top-[120%] opacity-0'
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-8">
                    {headerNavlinks.map((menuItem) => (
                      <li key={menuItem.id} className="group relative">
                        <Link
                          to={menuItem.path}
                          className={`flex py-2 md:text-md font-bold text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 font-neue ${
                            location.pathname === menuItem.path
                              ? sticky
                                ? 'text-black/75'
                                : 'text-white/75 dark:text-white'
                              : sticky
                                ? 'text-black hover:text-primary dark:text-white/70 dark:hover:text-white'
                                : 'text-white hover:text-primary dark:text-white/70 dark:hover:text-white'
                          }`}
                          onClick={closeNavbar}
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                    ))}
                    {/* Add ButtonLinks to the navigation in mobile view */}
                    {isMobile && (
                      <div className="flex items-center justify-start lg:pr-0 gap-2 mt-3">
                        <ButtonLink
                          label="Sign Up"
                          to="#"
                          size="medium"
                          variant="button"
                          color={sticky ? 'text-black' : 'text-white'}
                        />
                        <ButtonLink
                          label="Login"
                          to="#"
                          size="medium"
                          variant="link"
                          color={sticky ? 'text-black' : 'text-white'}
                        />
                      </div>
                    )}
                  </ul>
                </nav>
              </div>

              {/* Only show ButtonLinks in desktop view */}
              {!isMobile && (
                <div className="flex items-center justify-end lg:pr-0 gap-2">
                  <ButtonLink
                    label="Login"
                    to="#"
                    size="medium"
                    variant="link"
                    color={sticky ? 'text-black' : 'text-white'}
                  />
                  <ButtonLink
                    label="Sign Up"
                    to="#"
                    size="medium"
                    variant="button"
                    color={sticky ? 'text-black' : 'text-white'}
                  />
                </div>
              )}

              {/* <div className="ml-2">
                <ThemeToggle sticky={sticky} />
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
