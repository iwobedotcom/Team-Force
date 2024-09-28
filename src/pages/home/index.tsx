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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Offerings />
      <PaymentMethods />
      <Services />
      <CallToAction />
      <Testimonials />
      <FAQs />
      <Contact />
    </>
  );
}
