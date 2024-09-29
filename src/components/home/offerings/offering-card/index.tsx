import ButtonLink from '@/components/common/buttons/button-link';
import { ArrowRightIcon } from '@/components/icons';
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
              icon={ArrowRightIcon}
            />
          </div>
        )}
      </div>
      <div className="absolute bottom-0 right-0 w-4/5 h-4/5 overflow-hidden flex items-end justify-end">
        <img src={mockup} alt={`${title} mockup`} className="object-contain w-full h-full" />
      </div>
    </div>
  );
};
export default OfferingCard;
