import CustomHeading from '@/components/common/custom-heading';
import CustomSection from '@/components/common/custom-section';

const PaymentMethods = () => {
  return (
    <CustomSection id="payment-methods" className="bg-white" container={false}>
      <CustomHeading
        title="All major payment methods"
        paragraph="We've got all your payments covered"
        size="large"
      />
      <img
        src="/images/team-force-network.png"
        alt="offerings"
        className=" inset-0 object-cover w-full h-full"
      />
    </CustomSection>
  );
};

export default PaymentMethods;
