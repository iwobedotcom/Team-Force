import { ButtonLinkProps } from '@/types';
import { Link } from 'react-router-dom';

const ButtonLink = ({
  to,
  label,
  icon = null,
  size = 'medium',
  variant = 'button',
  color = 'text-white',
  alt = false
}: ButtonLinkProps) => {
  const sizeClasses = {
    small: 'py-2 px-3 text-sm',
    medium: 'py-2 px-6 text-base',
    large: 'py-3 px-8 text-lg'
  };

  const baseClasses = `
    font-bold rounded-lg font-neue
    transition-all duration-300 ease-in-out
    ${sizeClasses[size]}
    ${icon ? 'inline-flex items-center gap-x-2' : ''}
  `;

  const linkClasses = `
    ${baseClasses}
    ${color}
    hover:text-white/75
  `;

  const buttonClasses = `
    ${baseClasses}
    ${alt ? 'bg-white text-black' : 'bg-gradient-to-t from-[#399d3b] via-[#77cf38] to-[#abf43c] text-white'}
    shadow-lg ${alt ? 'shadow-white/50' : 'shadow-[#77cf38]/50'}
    hover:brightness-110 hover:animate-pulse
    transform hover:-translate-y-0.5 active:translate-y-0
  `;

  if (variant === 'link') {
    return (
      <Link to={to} className={linkClasses}>
        {label}
        {icon && <span>{icon}</span>}
      </Link>
    );
  }

  return (
    <Link to={to} className={buttonClasses}>
      {label}
      {icon && <span>{icon}</span>}
    </Link>
  );
};

export default ButtonLink;
