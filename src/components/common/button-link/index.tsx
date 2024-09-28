import { ButtonLinkProps } from '@/types';
import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ to, label, className = '', size = 'medium' }: ButtonLinkProps) => {
  const sizeClasses = {
    small: 'py-2 px-3 text-sm',
    medium: 'py-2.5 px-4 text-md',
    large: 'py-3 px-5 text-lg'
  };

  return (
    <Link
      to={to}
      className={`
        inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 ${sizeClasses[size]}
        ${className}
      `}
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
