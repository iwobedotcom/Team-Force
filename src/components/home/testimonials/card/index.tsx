import React from 'react';
import { StarIcon } from '@/components/icons';
import { TestimonialsProps } from '@/types';

type TestimonialCardProps = Omit<TestimonialsProps, 'id'>;

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  message,
  stars,
  title,
  avatar
}) => {
  const ratingIcons = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`text-2xl ${index < stars ? 'text-yellow-400' : 'text-gray-300'}`}>
      <StarIcon />
    </span>
  ));

  return (
    <div className="flex h-auto p-1">
      <div className="flex flex-col rounded-3xl glassmorphism w-full overflow-hidden shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(255,255,255,0.1)]">
        <div className="flex-auto p-6 md:p-8">
          <div className="flex gap-1 mb-4">{ratingIcons}</div>
          <p className="text-sm md:text-base text-white dark:text-neutral-200 mb-6">"{message}"</p>
        </div>
        <div className="p-6 md:p-8 rounded-b-xl bg-white/10">
          <div className="flex items-center gap-x-4">
            <div className="shrink-0">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={
                  avatar ||
                  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
                }
                alt={`Avatar of ${name}`}
              />
            </div>
            <div>
              <p className="text-base md:text-lg font-semibold text-white dark:text-neutral-200">
                {name}
              </p>
              <p className="text-sm text-white/80 dark:text-neutral-400">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
