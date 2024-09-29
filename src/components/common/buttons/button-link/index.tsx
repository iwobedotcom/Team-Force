import { ButtonLinkProps } from '@/types';
import { Link } from 'react-router-dom';

const ButtonLink = ({
  to,
  label,
  icon = null,
  size = 'medium',
  variant = 'button',
  color = 'text-black'
}: ButtonLinkProps) => {
  const sizeClasses = {
    small: 'py-2 px-3 text-sm',
    medium: 'py-2.5 px-4 text-md',
    large: 'py-3 px-5 text-lg'
  };

  if (variant === 'link') {
    return (
      <Link
        to={to}
        className={`${color} font-semibold font-neue  ${sizeClasses[size]} px-0 ${icon ? 'inline-flex items-center gap-x-2 ' : ''}`}
      >
        {label}
        {icon && <span className="">{icon}</span>}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={`
        inline-flex items-center gap-x-2 text-sm font-semibold font-neue rounded-lg border border-transparent bg-gray-800 ${color} hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 ${sizeClasses[size]}
        ${icon ? 'inline-flex items-center gap-x-2 ' : ''}
      `}
    >
      {label}
      {icon && <span className="">{icon}</span>}
    </Link>
  );
};

export default ButtonLink;
