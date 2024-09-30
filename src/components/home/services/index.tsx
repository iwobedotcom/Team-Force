import React from 'react';
import CustomHeading from '@/components/common/custom-heading';
import CustomSection from '@/components/common/custom-section';
import { ServsProps, StatsProps } from '@/types';
import { Icon } from '@iconify/react';
import useMediaQueries from '@/hooks/useMediaQueries';

const stats: StatsProps[] = [
  { id: 1, sum: '3.5m', label: 'Active Users' },
  { id: 2, sum: '240+', label: 'Trusted Companies' },
  { id: 3, sum: '78k', label: 'Customer care' }
];

const servs: ServsProps[] = [
  { id: 1, icon: 'ph:globe-simple-duotone', title: 'Online', bgColor: 'bg-sky-300' },
  {
    id: 2,
    icon: 'solar:buildings-bold-duotone',
    title: 'Bank Transfers',
    bgColor: 'bg-green-300'
  },
  { id: 3, icon: 'solar:keyboard-bold-duotone', title: 'Keyed', bgColor: 'bg-red-300' },
  { id: 4, icon: 'ph:person-duotone', title: 'In-Person', bgColor: 'bg-purple-300' }
];

const freebies: string[] = [
  'Invoicing',
  'Online Checkout',
  'Point-of-Sale',
  'Online Food Ordering',
  'ICard Vault',
  'Customer Portal',
  'Inventory',
  'Virtual Terminal',
  'Recurring Plans',
  'Payments Links',
  'SMS Payments',
  'QR Codes'
];

const Services = () => {
  const { isMobile } = useMediaQueries();
  return (
    <CustomSection id="services" className="bg-body-color-dark pb-16" waveColor="#ffffff">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <CustomHeading
            title="We provide the best service for you"
            paragraph="We've got all your payments covered"
            size="large"
            center={false}
          />
        </div>

        <div className="md:w-1/2 flex justify-end" data-aos="fade-left">
          <div className="w-full md:w-auto">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-5">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col items-center md:items-start">
                  <h3 className="text-xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 font-semibold">
                    {stat.sum}
                  </h3>
                  <p className="text-xs sm:text-sm text-body-color">{stat.label}</p>
                </div>
              ))}
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 50"
              className="w-[92%] mt-1 transform -translate-y-4"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'orange', stopOpacity: 0 }} />
                  <stop offset="20%" style={{ stopColor: 'orange', stopOpacity: 0.3 }} />
                  <stop offset="50%" style={{ stopColor: 'orange', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: 'red', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              {/* Line 1 - First irregular curve */}
              <path
                d="M 0 30 C 150 10, 250 40, 500 30"
                stroke="url(#grad1)"
                strokeWidth="2"
                fill="transparent"
              />
              {/* Line 2 - Intersecting with more variation */}
              <path
                d="M 0 35 C 100 50, 300 20, 500 35"
                stroke="url(#grad1)"
                strokeWidth="2"
                fill="transparent"
              />
              {/* Line 3 - Slightly wavy, intersecting */}
              <path
                d="M 0 40 C 200 20, 350 50, 500 25"
                stroke="url(#grad1)"
                strokeWidth="2"
                fill="transparent"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] py-10 sm:px-6 lg:py-14 mx-auto container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 space-y-3">
          {servs.map((serv) => (
            <div className="relative w-full h-[250px]" data-aos="flip-left">
              {/* Rotated background card */}
              <div
                className={`absolute inset-0 ${serv.bgColor} rounded-3xl shadow-sm dark:bg-neutral-800 dark:shadow-neutral-700/70`}
                style={{
                  transform: 'rotate(-8deg)',
                  zIndex: 0
                }}
              ></div>

              {/* Main card */}
              <div
                className={`relative z-10 flex flex-col h-full glassmorphism shadow-sm rounded-3xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70`}
              >
                <div className="p-6 md:p-6 flex flex-col h-full">
                  <div className="mb-auto">
                    <Icon icon={serv.icon} width={30} height={30} />
                  </div>
                  <p className="text-sm text-black font-semibold font-neue">{serv.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`py-10 sm:px-6 lg:py-14 ${isMobile ? 'w-full' : 'mx-auto w-4/5'}`}>
        <div
          className={`group relative flex flex-col shadow-sm rounded-3xl overflow-hidden bg-red-100`}
          data-aos="flip-up"
        >
          <div className="p-8 md:p-12 flex flex-col h-full w-full z-10">
            <h3 className="text-2xl font-semibold text-black">
              More free tools than you can handle
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
              {freebies.map((freebie, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="text-lg mr-1">•</span>
                  <span className="text-sm font-medium text-body-color">{freebie}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default Services;
