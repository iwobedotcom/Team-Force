import CustomHeading from '@/components/common/custom-heading';
import CustomSection from '@/components/common/custom-section';
import { OfferingProps } from '@/types';
import OfferingCard from './offering-card';

const offerings: OfferingProps[] = [
  {
    id: 1,
    title: 'Scan  & Go',
    description:
      'Transform your payment link into a QR code that customers can scan with their phone to  pay.',
    mockup: '/images/scan-and-go.png',
    bgColor: 'bg-red-100'
  },
  {
    id: 2,
    title: 'Easily Send Requests via e-mail or SMS',
    description: '...or copy-paste the link',
    mockup: '/images/email-and-sms.png',
    bgColor: 'bg-blue-100'
  },
  {
    id: 3,
    title: 'Online Billing & Invoicing Payments',
    description: 'Get paid faster with Online Invoicing and Virtual Terminal',
    mockup: '/images/online-billing-and-invoicing.png',
    link: '#',
    bgColor: 'bg-purple-100'
  }
];

const Offerings = () => {
  return (
    <CustomSection id="offerings" className="bg-white">
      <CustomHeading
        title="You'll love our powerful payments"
        paragraph="We've got all your payments covered"
        size="large"
      />

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2 mt-10">
        {offerings.map((offering, index) => (
          <div
            key={offering.id}
            className={`
        ${index === offerings.length - 1 && offerings.length % 2 !== 0 ? 'md:col-span-2 lg:col-span-2' : ''}
      `}
          >
            <OfferingCard
              {...offering}
              height={index === offerings.length - 1 ? 'h-[300px]' : 'h-[350px]'}
            />
          </div>
        ))}
      </div>
    </CustomSection>
  );
};

export default Offerings;
