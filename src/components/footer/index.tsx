import { FooterNavLinksProps } from '@/types';
import { Link } from 'react-router-dom';
import ButtonLink from '../common/buttons/button-link';
import DownloadButton from '../common/buttons/download-button';
import SocialsButton from '../common/buttons/socials-button';
import {
  AppStoreIcon,
  CaretDownIcon,
  EmailIcon,
  FacebookIcon,
  GooglePlayIcon,
  InstagramIcon,
  PhoneIcon,
  TwitterIcon,
  VimeoIcon
} from '../icons';

const footerNavlinks: FooterNavLinksProps[] = [
  {
    heading: 'Solutions',
    menu: [
      { id: 1, title: 'Payments', link: '#' },
      { id: 2, title: 'Advances', link: '#' },
      { id: 3, title: 'Online Checkout', link: '#' },
      { id: 4, title: 'Dashboard', link: '#' },
      { id: 5, title: 'Get Started', link: '#' }
    ]
  },
  {
    heading: 'Other Pages',
    menu: [
      { id: 6, title: 'About', link: '#' },
      { id: 7, title: 'Services', link: '#' },
      { id: 8, title: 'How It Works', link: '#' },
      { id: 9, title: 'Pricing Plan', link: '#' },
      { id: 10, title: 'Blog', link: '#' },
      { id: 11, title: 'Contact', link: '#' }
    ]
  }
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="container relative z-10 bg-body-color-dark dark:bg-gray-dark pt-72"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12 mb-12 lg:mb-16">
            <div className="max-w-[360px]">
              <Link to="/" className="inline-block mb-6">
                <img src="/images/logo-alt.png" alt="logo" width={100} height={100} />
              </Link>
              <p className="mb-5 text-sm text-body-color dark:text-body-color-dark">
                Pariatur esse sit dolor proident pariatur aliqua consectetur fugiat ea laboris anim
                et.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <PhoneIcon />
                  <p className="text-sm font-semibold text-body-color font-neue">+99999999999</p>
                </li>
                <li className="flex items-center gap-2">
                  <EmailIcon />
                  <p className="text-sm font-medium text-body-color font-neue">
                    teamforce@loremipsum.com
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {footerNavlinks.map((navItem) => (
            <div
              className="w-full px-4 sm:w-1/2 md:w-1/4 lg:w-2/12 mb-12 lg:mb-16"
              key={navItem.heading}
            >
              <h2 className="mb-4 text-lg font-bold text-black font-neue dark:text-white">
                {navItem.heading}
              </h2>
              <ul className="space-y-3">
                {navItem.menu.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.link}
                      className="inline-flex items-center text-sm font-medium text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary transition-colors duration-300"
                    >
                      <span className="mr-2">•</span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12 mb-12 lg:mb-16">
            <h2 className="mb-4 text-lg font-bold text-black font-neue dark:text-white">
              Download App
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <img src="/images/barcode.png" className="w-32 h-32 object-cover" alt="QR Code" />
              <div className="flex flex-col gap-2">
                <DownloadButton
                  store="App Store"
                  icon={<AppStoreIcon />}
                  bgColor="bg-black"
                  textColor="text-white"
                />
                <DownloadButton
                  store="Google Play"
                  icon={<GooglePlayIcon />}
                  bgColor="bg-white"
                  textColor="text-black"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

        <div className="py-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-2 mb-4 sm:mb-0">
            <SocialsButton icon={<FacebookIcon />} />
            <SocialsButton icon={<TwitterIcon />} />
            <SocialsButton icon={<VimeoIcon />} />
            <SocialsButton icon={<InstagramIcon />} />
          </div>
          <p className="text-sm text-body-color dark:text-white mb-4 sm:mb-0">
            Full Copyright & Design by TeamForce - {new Date().getFullYear()}
          </p>
          <ButtonLink
            label="English (US)"
            size="small"
            variant="button"
            icon={<CaretDownIcon />}
            to="#"
            color="white"
            alt
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
