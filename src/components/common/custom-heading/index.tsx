import { CustomHeadingProps } from '@/types';

const CustomHeading = ({
  title,
  size,
  paragraph,
  center = true,
  className
}: CustomHeadingProps) => {
  const sizeClasses = {
    small: 'text-xl sm:text-3xl',
    medium: 'text-2xl sm:text-4xl',
    large: 'text-3xl sm:text-5xl'
  };

  return (
    <div
      className={`relative flex flex-col left-0 top-0 w-full ${center ? 'justify-center items-center' : 'justify-start items-start'}`}
    >
      <h1 className={`mb-4 font-bold font-neue ${sizeClasses[size]} ${className}`}>
        {title}
        <span className="text-primary">.</span>
      </h1>
      {paragraph && (
        <p
          className={`mb-4 max-w-3xl text-md font-medium leading-relaxed sm:text-base text-body-color sm:leading-relaxed `}
        >
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default CustomHeading;
