import CustomHeading from '@/components/common/custom-heading';
import CustomSection from '@/components/common/custom-section';
import offImage from '@/assets/images/offerings.png';

const PaymentMethods = () => {
  return (
    <CustomSection id="payment-methods" className="bg-white" container={false}>
      <CustomHeading
        title="All major payment methods"
        paragraph="We've got all your payments covered"
        size="large"
      />
      <div className="relative min-h-[35vh] rounded-xl md:min-h-[75vh]">
        <img
          src={offImage}
          alt="offerings"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
    </CustomSection>
  );
};

export default PaymentMethods;
