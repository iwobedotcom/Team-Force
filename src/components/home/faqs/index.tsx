import { ButtonLink, CustomHeading, CustomSection } from '@/components';
import { FAQsProps } from '@/types';
import { useState } from 'react';
import FAQItem from './faq-item';

const faqs: FAQsProps[] = [
  {
    id: 1,
    question: 'Do I need to change banks??',
    answer:
      'Nulla irure ipsum labore consequat duis. Adipisicing cupidatat cillum amet cupidatat aliqua velit dolore nostrud cupidatat adipisicing sit ipsum officia et.'
  },
  {
    id: 2,
    question: 'Do I need to change banks??',
    answer:
      'Nulla irure ipsum labore consequat duis. Adipisicing cupidatat cillum amet cupidatat aliqua velit dolore nostrud cupidatat adipisicing sit ipsum officia et. '
  },
  {
    id: 3,
    question: 'How can I order equipment?',
    answer:
      'Nulla irure ipsum labore consequat duis. Adipisicing cupidatat cillum amet cupidatat aliqua velit dolore nostrud cupidatat adipisicing sit ipsum officia et. '
  },
  {
    id: 4,
    question: 'Do you offer volume discounts?',
    answer:
      'Nulla irure ipsum labore consequat duis. Adipisicing cupidatat cillum amet cupidatat aliqua velit dolore nostrud cupidatat adipisicing sit ipsum officia et.'
  },
  {
    id: 5,
    question: 'How does signing up work?',
    answer:
      'Nulla irure ipsum labore consequat duis. Adipisicing cupidatat cillum amet cupidatat aliqua velit dolore nostrud cupidatat adipisicing sit ipsum officia et. '
  }
];
const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <CustomSection id="faqs" className="bg-white">
      <div className="md:grid md:grid-cols-2 md:items-start md:gap-12 xl:gap-32">
        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-1 sm:space-y-3 sticky top-0">
            <div className="space-y-2 md:space-y-4">
              <p className="text-sm text-black font-semibold font-neue underline underline-offset-2 decoration-lime-400 decoration-2">
                Support
              </p>
              <div className="w-11/12">
                <CustomHeading
                  title="Frequently Asked Questions"
                  paragraph="Magna exercitation duis fugiat minim velit quis sit non nulla. "
                  size="large"
                  center={false}
                />
              </div>
            </div>

            <div className="flex flex-row sm:flex-row items-start gap-5">
              <ButtonLink label="Get in Touch" to="#" size="medium" variant="button" />
              <img
                className="rounded-xl w-44 h-44 object-cover"
                src="/images/boy-girl.png"
                alt="Boy & Girl"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-2xl mx-auto">
            <div className="hs-accordion-group">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  {...faq}
                  isOpen={index === openIndex}
                  onToggle={() => setOpenIndex(index === openIndex ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default FAQs;
