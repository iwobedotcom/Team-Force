import React from 'react';
import ButtonLink from '@/components/common/buttons/button-link';
import { ArrowRightIcon } from '@/components/icons';
import useMediaQueries from '@/hooks/useMediaQueries';
import { OfferingProps } from '@/types';

const OfferingCard = ({
  title,
  description,
  mockup,
  bgColor,
  link,
  height,
  imageRes,
  positioning
}: OfferingProps) => {
  const { isMobile } = useMediaQueries();
  const heightClass = height || 'h-full';

  const desktopLayout = (
    <>
      <div className="p-8 md:p-12 flex flex-col h-full w-full z-10">
        <h3 className="text-2xl font-semibold text-black">{title}</h3>
        <p className="mt-3 text-body-color text-sm flex-grow w-[80%]">{description}</p>
        {link && (
          <div className="mt-auto pt-4">
            <ButtonLink
              label="Explore Invoicing Tools"
              to={link}
              size="small"
              variant="link"
              icon={<ArrowRightIcon />}
              color="text-black"
            />
          </div>
        )}
      </div>
      <div className={`absolute ${positioning} ${imageRes} overflow-hidden`}>
        <img src={mockup} alt={`${title} mockup`} className="object-contain w-full h-full" />
      </div>
    </>
  );

  const mobileLayout = (
    <div className="flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="mt-2 text-body-color text-sm">{description}</p>
        {link && (
          <div className="mt-4">
            <ButtonLink
              label="Explore Invoicing Tools"
              to={link}
              size="small"
              variant="link"
              icon={<ArrowRightIcon />}
              color="text-black"
            />
          </div>
        )}
      </div>
      <div className={`${imageRes} overflow-hidden mx-auto flex flex-col justify-between h-full`}>
        <div className="flex-grow"></div> {/* This will take up the available space */}
        <img src={mockup} alt={`${title} mockup`} className="object-contain w-full h-auto" />
      </div>
    </div>
  );

  return (
    <div
      className={`group relative flex flex-col shadow-sm rounded-3xl overflow-hidden ${heightClass} ${bgColor}`}
    >
      {isMobile ? mobileLayout : desktopLayout}
    </div>
  );
};

export default OfferingCard;
