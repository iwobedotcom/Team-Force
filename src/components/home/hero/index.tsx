import ButtonLink from '@/components/common/buttons/button-link';
import useMediaQueries from '@/hooks/useMediaQueries';

type AvatarProp = {
  id: number;
  name: string;
  image: string;
  isMobile?: boolean;
};

const clients: AvatarProp[] = [
  {
    id: 1,
    name: 'John',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  },
  {
    id: 2,
    name: 'Steve',
    image:
      'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  },
  {
    id: 3,
    name: 'Mark',
    image:
      'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80'
  },
  {
    id: 4,
    name: 'Wilford',
    image:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
  }
];

const Avatar = ({ name, image, isMobile }: AvatarProp) => {
  return (
    <div className="hs-tooltip inline-block">
      <img
        className={`hs-tooltip-toggle relative  inline-block ${isMobile ? 'h-9 w-9' : 'h-10 w-10'} rounded-full ring-2 ring-white hover:z-10 dark:ring-neutral-900`}
        src={image}
        alt={`${name}'s Avatar`}
      />
      <span
        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 glassmorphism text-xs text-white rounded-lg"
        role="tooltip"
      >
        {name}
      </span>
    </div>
  );
};

const Hero = () => {
  const { isMobile } = useMediaQueries();
  return (
    <section
      id="hero"
      className="container dark:bg-gray-dark relative z-10 overflow-hidden bg-gradient pt-[140px]"
    >
      <div className="grid md:grid-cols-2 gap-1 md:gap-1 xl:gap-20">
        <div>
          <h1
            className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-none pb-7"
            data-aos="fade-up"
          >
            The next generation payment ways.
          </h1>
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="mt-3" data-aos="fade-up" data-aos-delay="200">
              <ButtonLink
                label="Get Started For Free"
                variant="button"
                size={isMobile ? 'medium' : 'large'}
                to="#"
              />
            </div>

            <div className="relative mt-10 md:mt-20 lg:mt-24">
              <p className="mb-4 max-w-3xl text-sm font-medium leading-relaxed sm:text-base sm:leading-relaxed font-neue text-white ">
                Over 50k+ Clients &nbsp;&nbsp;&nbsp;
                <span className="text-white/75">all over the world</span>
              </p>
              <div className="flex -space-x-2">
                {clients.map((client) => (
                  <Avatar key={client.id} {...client} isMobile={isMobile} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative ms-4" data-aos="fade-left" data-aos-delay="400">
          <img
            className={`w-full rounded-md image-tilt  ${isMobile ? 'mt-5' : ''}`}
            src="/images/pino.png"
            alt="Hero Image"
          />
          <div className="absolute right-0 top-0 opacity-30 lg:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 463.771 463.771"
              width="60"
              height="60"
              fill="white"
            >
              <path d="M173.073 349.604c-4.825 0-8.961-3.444-9.835-8.188-10.587-57.508-20.312-92.657-41.352-113.697S65.695 196.954 8.189 186.367C3.444 185.493 0 181.357 0 176.532s3.445-8.961 8.189-9.835c57.506-10.586 92.657-20.311 113.697-41.352s30.765-56.191 41.352-113.697c.874-4.745 5.01-8.189 9.835-8.189s8.961 3.445 9.835 8.189c10.586 57.506 20.312 92.657 41.352 113.697 21.041 21.04 56.191 30.765 113.697 41.352 4.746.874 8.189 5.01 8.189 9.835s-3.445 8.961-8.189 9.835c-57.506 10.586-92.656 20.312-113.697 41.352-21.04 21.04-30.765 56.191-41.352 113.697-.874 4.744-5.011 8.188-9.835 8.188zm-114.404-173.072c35.099 8.738 59.633 19.319 77.359 37.044s28.307 42.26 37.044 77.359c8.738-35.099 19.319-59.633 37.044-77.359s42.261-28.307 77.358-37.044c-35.098-8.738-59.632-19.319-77.358-37.044s-28.307-42.26-37.044-77.359c-8.738 35.099-19.319 59.633-37.044 77.359s-42.26 28.307-77.359 37.044z" />
              <path d="M350.064 460.312c-4.826 0-8.961-3.444-9.836-8.188-6.6-35.85-12.584-57.686-25.291-70.393-12.709-12.708-34.543-18.692-70.393-25.292-4.744-.873-8.188-5.01-8.188-9.834 0-4.826 3.444-8.962 8.188-9.836 35.85-6.599 57.686-12.584 70.393-25.292s18.691-34.543 25.291-70.392c.875-4.745 5.012-8.189 9.836-8.189s8.961 3.445 9.834 8.189c6.602 35.849 12.586 57.686 25.293 70.392 12.707 12.708 34.543 18.693 70.393 25.292 4.744.874 8.188 5.01 8.188 9.836 0 4.824-3.443 8.961-8.188 9.834-35.85 6.6-57.686 12.584-70.393 25.292-12.707 12.707-18.691 34.543-25.293 70.393-.874 4.744-5.01 8.188-9.834 8.188zm-59.291-113.708c33.689 10.467 48.824 25.602 59.291 59.292 10.465-33.69 25.602-48.825 59.291-59.292-33.689-10.466-48.824-25.601-59.291-59.292-10.467 33.691-25.602 48.826-59.291 59.292z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
          <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
          <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" />
          <circle
            cx="325.486"
            cy="302.87"
            r="180"
            transform="rotate(-37.6852 325.486 302.87)"
            fill="url(#paint3_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="184.521"
            cy="315.521"
            r="132.862"
            transform="rotate(114.874 184.521 315.521)"
            stroke="url(#paint4_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="356"
            cy="290"
            r="179.5"
            transform="rotate(-30 356 290)"
            stroke="url(#paint5_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="191.659"
            cy="302.659"
            r="133.362"
            transform="rotate(133.319 191.659 302.659)"
            fill="url(#paint6_linear_25:217)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6624d1" />
              <stop offset="1" stopColor="#6624d1" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop offset="0.145833" stopColor="#6624d1" stopOpacity="0" />
              <stop offset="1" stopColor="#6624d1" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
            >
              <stop offset="0.145833" stopColor="#6624d1" stopOpacity="0" />
              <stop offset="1" stopColor="#6624d1" stopOpacity="0.08" />
            </radialGradient>
            <linearGradient
              id="paint3_linear_25:217"
              x1="226.775"
              y1="-66.1548"
              x2="292.157"
              y2="351.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6624d1" />
              <stop offset="1" stopColor="#6624d1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:217"
              x1="184.521"
              y1="182.159"
              x2="184.521"
              y2="448.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6624d1" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_25:217"
              x1="356"
              y1="110"
              x2="356"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6624d1" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_25:217"
              x1="118.524"
              y1="29.2497"
              x2="166.965"
              y2="338.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6624d1" />
              <stop offset="1" stopColor="#6624d1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          />
          <path
            d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="url(#paint1_linear_25:218)"
          />
          <path
            d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
            stroke="url(#paint2_linear_25:218)"
          />
          <path
            d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
            stroke="url(#paint3_linear_25:218)"
          />
          <circle
            opacity="0.8"
            cx="214.505"
            cy="60.5054"
            r="49.7205"
            transform="rotate(-13.421 214.505 60.5054)"
            stroke="url(#paint4_linear_25:218)"
          />
          <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#d2bef4" stopOpacity="0" />
              <stop offset="1" stopColor="#d2bef4" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_25:218"
              x1="156.389"
              y1="69.2405"
              x2="156.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#d2bef4" stopOpacity="0" />
              <stop offset="1" stopColor="#d2bef4" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_25:218"
              x1="125.389"
              y1="69.2405"
              x2="125.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#d2bef4" stopOpacity="0" />
              <stop offset="1" stopColor="#d2bef4" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_25:218"
              x1="93.8507"
              y1="67.2674"
              x2="89.9278"
              y2="210.214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#d2bef4" stopOpacity="0" />
              <stop offset="1" stopColor="#d2bef4" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:218"
              x1="214.505"
              y1="10.2849"
              x2="212.684"
              y2="99.5816"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#d2bef4" />
              <stop offset="1" stopColor="#d2bef4" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint5_radial_25:218"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(220 63) rotate(90) scale(43)"
            >
              <stop offset="0.145833" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.08" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
