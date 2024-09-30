import {
  CallToAction,
  Contact,
  FAQs,
  Hero,
  Offerings,
  PaymentMethods,
  Services,
  Testimonials
} from '@/components';

/**
 * Renders the main homepage component, which includes the following sections:
 * - Hero
 * - Offerings
 * - Payment Methods
 * - Services
 * - Call to Action
 * - Testimonials
 * - FAQs
 * - Contact
 */
const HomePage = () => {
  return (
    <>
      <Hero />
      <Offerings />
      <PaymentMethods />
      <Services />
      <CallToAction />
      <Testimonials />
      <FAQs />
      <div className="relative">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
