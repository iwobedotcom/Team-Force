import useMediaQueries from '@/hooks/useMediaQueries';
import { CustomHeadingProps } from '@/types';

const CustomHeading = ({
  title,
  size,
  paragraph,
  center = true,
  className
}: CustomHeadingProps) => {
  const { isMobile } = useMediaQueries();
  const sizeClasses = {
    small: 'text-xl sm:text-3xl',
    medium: 'text-2xl sm:text-4xl',
    large: 'text-3xl sm:text-5xl'
  };

  return (
    <div
      className={`relative flex flex-col left-0 top-0 w-full ${center ? 'justify-center items-center' : 'justify-start items-start'}`}
    >
      <h1
        className={`${isMobile ? 'mb-1' : 'mb-4'} font-bold font-neue ${sizeClasses[size]} ${className}`}
      >
        {title}
        <span className="text-primary">.</span>
      </h1>
      {paragraph && (
        <p
          className={`mb-4 max-w-3xl text-base font-medium leading-relaxed sm:leading-relaxed sm:text-lg text-body-color ${isMobile ? 'mr-auto' : ''} sm:leading-relaxed`}
        >
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default CustomHeading;
