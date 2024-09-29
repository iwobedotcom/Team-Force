import { ButtonLink } from '@/components';

const Contact = () => {
  return (
    <section className="container absolute top-[-230px] w-full z-50 bg-transparent">
      <div className="bg-gradient rounded-3xl">
        <div className="mx-auto max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto mt-5 max-w-xl text-center">
            <form>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="fullname"
                    className="peer p-4 block w-full bg-purple-200 border-transparent rounded-3xl text-sm text-body-color"
                    placeholder=""
                  />
                  <label
                    htmlFor="fullname"
                    className="absolute top-0 start-0 p-4 h-full text-body-color text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="peer p-4 block w-full bg-purple-200 border-transparent rounded-3xl text-sm text-body-color"
                    placeholder=""
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-0 start-0 p-4 h-full text-body-color text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent"
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="phone"
                    className="peer p-4 block w-full bg-purple-200 border-transparent rounded-3xl text-sm text-body-color"
                    placeholder=""
                  />
                  <label
                    htmlFor="phone"
                    className="absolute top-0 start-0 p-4 h-full text-body-color text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent"
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    className="peer p-4 block w-full bg-purple-200 border-transparent rounded-3xl text-sm text-body-color"
                    placeholder=""
                    rows={5}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute top-0 start-0 p-4 h-full text-body-color text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent "
                  >
                    Enter your message
                  </label>
                </div>
              </div>

              <div className="my-10">
                <ButtonLink label="Get Started Now" to="#" variant="button" size="large" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
