import { CustomSectionProps } from '@/types';

const CustomSection = ({ children, id, className, container = true }: CustomSectionProps) => {
  return (
    /*  <section
      id={id}
      className={`
      h-screen pt-8 pb-24 flex 
      snap-start snap-always
      ${className}
    `}
    > */
    <section
      id={id}
      className={`
      pt-8 pb-24 
      ${className}
    `}
    >
      <div className={container ? 'container' : ''}>{children}</div>
    </section>
  );
};

export default CustomSection;
