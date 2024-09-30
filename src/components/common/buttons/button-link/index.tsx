import { useButtonClasses } from '@/hooks/useButtonClasses';
import { ButtonLinkProp, ButtonSize, ButtonVariant } from '@/types';
import { Link } from 'react-router-dom';

/**
 * A React component that renders a button-styled link.
 *
 * @param {ButtonLinkProp} props - The props for the button link component.
 * @param {string} props.to - The URL or path to link to.
 * @param {string} props.label - The label text to display on the button.
 * @param {React.ReactNode} [props.icon] - An optional icon to display alongside the label.
 * @param {ButtonSize} [props.size=ButtonSize.Medium] - The size of the button.
 * @param {ButtonVariant} [props.variant=ButtonVariant.Button] - The variant of the button (either a button or a link).
 * @param {string} [props.color='text-white'] - The color of the button text.
 * @param {boolean} [props.alt=false] - Whether to use an alternative button style.
 * @returns {React.ReactElement} - The rendered button link component.
 */
const ButtonLink = ({
  to,
  label,
  icon = null,
  size = ButtonSize.Medium,
  variant = ButtonVariant.Button,
  color = 'text-white',
  alt = false
}: ButtonLinkProp) => {
  const { linkClasses, buttonClasses } = useButtonClasses({
    to,
    label,
    icon,
    size,
    variant,
    color,
    alt
  });

  if (variant === ButtonVariant.Link) {
    return (
      <Link to={to} className={linkClasses} role="button" aria-label={label}>
        {label}
        {icon && <span>{icon}</span>}
      </Link>
    );
  }

  return (
    <Link to={to} className={buttonClasses} role="button" aria-label={label}>
      {label}
      {icon && <span>{icon}</span>}
    </Link>
  );
};

export default ButtonLink;
