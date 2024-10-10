import { ButtonLink } from '@/components';
import { ButtonSize, ButtonVariant } from '@/types';
import { useForm, ValidationError } from '@formspree/react';
import FormspreeSuccess from './formspree-success';
import { useEffect, useState } from 'react';
import ManageNotifications from './manage-notification';
import { useMediaQueries } from '@/hooks/useMediaQueries';

/**
 * The `Contact` component represents a contact form section on the website. It uses the Formspree service to handle form submissions and provides a success message when the form is successfully submitted.
 *
 * The component includes the following features:
 * - Renders a form with fields for full name, email, phone number, and message
 * - Handles form submission using the `useForm` hook from the `@formspree/react` library
 * - Displays a success message when the form is successfully submitted, which is hidden after 10 seconds
 * - Displays error messages for any validation errors in the form fields
 * - Includes a `ManageNotifications` component to display any form submission errors
 *
 * The `Contact` component is rendered within a section element with an absolute position and a z-index of 50, which places it on top of other content on the page.
 */

const Contact = () => {
  const { isMobile } = useMediaQueries();
  const [state, handleSubmit] = useForm('mldervay');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (state.errors) {
      setShowErrors(true);
    }
  }, [state.errors]);

  const handleDismiss = () => {
    setShowErrors(false);
  };

  if (showSuccess) {
    return <FormspreeSuccess />;
  }
  return (
    <section className="absolute top-[-230px] w-full z-50 bg-transparent">
      <div className="container">
        <div className="bg-gradient rounded-3xl" data-aos="fade-up">
          <div className="mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
            <div className="mx-auto mt-5 max-w-xl text-center">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="peer p-4 block w-full bg-purple-200 border-transparent rounded-3xl text-sm text-body-color"
                      placeholder="Full Name"
                    />
                    <label
                      htmlFor="fullname"
                      className="absolute top-0 start-0 p-4 h-full text-body-color text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent"
                    ></label>
                    <ValidationError prefix="Full Name" field="fullname" errors={state.errors} />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="peer p-4 block w-full bg-purple-200 border-transparent rounded-3xl text-sm text-body-color"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute top-0 start-0 p-4 h-full text-body-color text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent"
                    ></label>
                    <ValidationError prefix="Email Address" field="email" errors={state.errors} />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="peer p-4 block w-full bg-purple-200 border-transparent rounded-3xl text-sm text-body-color"
                      placeholder="Phone Number"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute top-0 start-0 p-4 h-full text-body-color text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent"
                    ></label>
                    <ValidationError prefix="Phone Number" field="phone" errors={state.errors} />
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      className="peer p-4 block w-full bg-purple-200 border-transparent rounded-3xl text-sm text-body-color"
                      placeholder="Enter Message"
                      rows={5}
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute top-0 start-0 p-4 h-full text-body-color text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent "
                    ></label>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                </div>

                <div className="pt-8 pb-5">
                  <ButtonLink
                    label={state.submitting ? 'Submitting...' : 'Get Started Now'}
                    type="submit"
                    variant={ButtonVariant.Button}
                    size={isMobile ? ButtonSize.Medium : ButtonSize.Large}
                    disabled={state.submitting}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showErrors && state.errors && (
        <ManageNotifications
          emailStatus={state.errors
            .getFormErrors()
            .map((error) => error.message)
            .join(', ')}
          onDismiss={handleDismiss}
        />
      )}
    </section>
  );
};

export default Contact;
