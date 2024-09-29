import ButtonLink from '@/components/common/buttons/button-link';
import CustomHeading from '@/components/common/custom-heading';
import CustomSection from '@/components/common/custom-section';

const CallToAction = () => {
  return (
    <CustomSection id="cta" className="bg-body-color-dark pb-16" waveColor="#f5f5f8">
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <img className="rounded-xl" src="/images/girl-smile.png" alt="Girl Smiling" />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <p className="text-sm text-black font-semibold font-neue underline underline-offset-2 decoration-lime-400 decoration-2">
                Open An Account
              </p>
              <CustomHeading title="Let's get started" size="large" center={false} />
            </div>

            <ul className="space-y-2 sm:space-y-6 w-4/5">
              <li className="flex">
                <div className="flex items-center gap-x-7">
                  <h2 className="text-2xl mr-1 font-neue text-black">01</h2>
                  <p className="text-md font-bold text-body-color font-neue">
                    Sign Up in a few minutes
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex items-center gap-x-7">
                  <h2 className="text-2xl mr-1 font-neue text-black">02</h2>
                  <p className="text-md font-bold text-body-color font-neue">
                    Let us verify your identity
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex items-center gap-x-7">
                  <h2 className="text-2xl mr-1 font-neue text-black">03</h2>
                  <p className="text-md font-bold text-body-color font-neue">
                    Your account is open; you can send your first payment
                  </p>
                </div>
              </li>
            </ul>

            <div className="space-y-1 md:space-y-3">
              <ButtonLink
                label="Open An Account in Minutes"
                to="#"
                size="medium"
                variant="button"
              />

              <p className="text-xs text-body-color">
                Try it for 30days. For free. No obligations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default CallToAction;
