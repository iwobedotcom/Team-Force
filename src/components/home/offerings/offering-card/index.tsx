import ButtonLink from '@/components/common/button-link';
import { OfferingProps } from '@/types';

const OfferingCard = ({ title, description, mockup, bgColor, link, height }: OfferingProps) => {
  const heightClass = height || 'h-full';

  return (
    <div
      className={`group relative flex flex-col shadow-sm rounded-3xl overflow-hidden ${heightClass} ${bgColor}`}
    >
      <div className="p-3 md:p-12 flex flex-col h-full w-full z-10">
        <h3 className="text-2xl font-semibold text-black">{title}</h3>
        <p className="mt-3 text-body-color text-sm flex-grow">{description}</p>
        {link && (
          <div className="mt-auto pt-4">
            <ButtonLink
              label="Explore Invoicing Tools"
              to={link}
              size="small"
              variant="link"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
          </div>
        )}
      </div>
      <div className="absolute bottom-0 right-0 w-3/4 h-3/4 overflow-hidden flex items-end justify-end">
        <img
          src={mockup}
          alt={`${title} mockup`}
          className="object-contain max-w-full max-h-full"
        />
      </div>
    </div>
  );
};

export default OfferingCard;
