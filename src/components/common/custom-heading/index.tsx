import { CustomHeadingProps } from '@/types';

const CustomHeading = ({ title, size, paragraph, center = true }: CustomHeadingProps) => {
  const sizeClasses = {
    small: 'text-xl sm:text-3xl',
    medium: 'text-2xl sm:text-4xl',
    large: 'text-3xl sm:text-5xl'
  };

  return (
    <div className={`relative left-0 top-0 w-full ${center ? 'text-center' : ''}`}>
      <h1 className={`mb-4 font-bold text-black font-neue ${sizeClasses[size]}`}>
        {title}
        <span className="text-primary">.</span>
      </h1>
      {paragraph && (
        <p
          className={`mx-auto mb-4 max-w-3xl text-md font-medium leading-relaxed text-bsm:text-lg text-body-color sm:leading-relaxed ${center ? 'text-center' : ''}`}
        >
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default CustomHeading;
