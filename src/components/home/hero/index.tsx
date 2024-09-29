import ButtonLink from '@/components/common/buttons/button-link';
import CustomSection from '@/components/common/custom-section';

type AvatarProp = {
  id: number;
  name: string;
  image: string;
};
const clients: AvatarProp[] = [
  {
    id: 1,
    name: 'John',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  },
  {
    id: 1,
    name: 'Steve',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  },
  {
    id: 1,
    name: 'Mark',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  },
  {
    id: 1,
    name: 'Wilford',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  }
];

const Avatars = ({ name, image }: AvatarProp) => {
  return (
    <div className="flex -space-x-2">
      <div className="hs-tooltip inline-block">
        <img
          className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
          src={image}
          alt="Avatar"
        />
        <span
          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 glassmorphism text-xs text-white rounded-lg"
          role="tooltip"
        >
          {name}
        </span>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="container dark:bg-gray-dark relative z-10 overflow-hidden bg-gradient pt-[140px]"
    >
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20">
        <div>
          <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-none pb-7">
            The next generation payment ways.
          </h1>

          <ButtonLink label="Get Started For Free" variant="button" size="large" to="#" />

          <div className="pt-20">
            <p className="mb-4 max-w-3xl text-md font-medium leading-relaxed sm:text-base sm:leading-relaxed font-neue text-white ">
              Over 50k+ Clients &nbsp;&nbsp;&nbsp;
              <span className="text-white/75">all over the world</span>
            </p>
            <div className="flex -space-x-2">
              <div className="hs-tooltip inline-block">
                <img
                  className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Avatar"
                />
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                  role="tooltip"
                >
                  James
                </span>
              </div>
              <div className="hs-tooltip inline-block">
                <img
                  className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
                  src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Avatar"
                />
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                  role="tooltip"
                >
                  Maria
                </span>
              </div>
              <div className="hs-tooltip inline-block">
                <img
                  className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
                  src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                  alt="Avatar"
                />
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                  role="tooltip"
                >
                  Anna
                </span>
              </div>
              <div className="hs-tooltip inline-block">
                <img
                  className="hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Avatar"
                />
                <span
                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                  role="tooltip"
                >
                  Brian
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ms-4">
          <img className="w-full rounded-md" src="/images/pino.png" alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
