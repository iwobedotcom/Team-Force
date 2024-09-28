import React from 'react';
import CustomHeading from '@/components/common/custom-heading';
import CustomSection from '@/components/common/custom-section';
import { ServsProps, StatsProps } from '@/types';
import { Icon } from '@iconify/react';

const stats: StatsProps[] = [
  { id: 1, sum: '3.5m', label: 'Active Users' },
  { id: 2, sum: '240+', label: 'Trusted Companies' },
  { id: 3, sum: '78k', label: 'Customer care' }
];

const servs: ServsProps[] = [
  { id: 1, icon: 'ph:globe-simple-duotone', title: 'Online', bgColor: 'bg-sky-200' },
  {
    id: 2,
    icon: 'solar:buildings-bold-duotone',
    title: 'Bank Transfers',
    bgColor: 'bg-green-200'
  },
  { id: 3, icon: 'solar:keyboard-bold-duotone', title: 'Keyed', bgColor: 'bg-red-200' },
  { id: 4, icon: 'ph:person-duotone', title: 'In-Person', bgColor: 'bg-purple-200' }
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
  return (
    <CustomSection id="services" className="bg-body-color-dark">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <CustomHeading
            title="We provide the best service for you"
            paragraph="We've got all your payments covered"
            size="large"
            center={false}
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center md:items-end">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200 font-semibold">
                  {stat.sum}
                </h3>
                <p className="text-sm sm:text-xs text-body-color">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] py-10 sm:px-6 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servs.map((serv) => (
            <div className="relative w-full h-[250px]">
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
                <div className="p-4 md:p-6 flex flex-col h-full">
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

      <div className="w-4/5 py-10 sm:px-6 lg:py-14 mx-auto">
        <div
          className={`group relative flex flex-col shadow-sm rounded-3xl overflow-hidden bg-red-100`}
        >
          <div className="p-3 md:p-8 flex flex-col h-full w-full z-10">
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
