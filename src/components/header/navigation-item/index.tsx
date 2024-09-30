import { Link, useLocation } from 'react-router-dom';

/**
 * Renders a navigation item component that displays a link with the provided menu item details.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.menuItem - The menu item object containing the path and title.
 * @param {boolean} props.sticky - Indicates whether the navigation is in a sticky header.
 * @param {function} props.closeNavbar - A function to close the navbar when the link is clicked.
 * @returns {JSX.Element} - The rendered navigation item component.
 */
const NavigationItem = ({
  menuItem,
  sticky,
  closeNavbar
}: {
  menuItem: { path: string; title: string };
  sticky: boolean;
  closeNavbar: () => void;
}) => {
  const location = useLocation();

  return (
    <li className="group relative">
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
  );
};

export default NavigationItem;
