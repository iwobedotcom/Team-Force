import CustomHeading from '@/components/common/custom-heading';
import CustomSection from '@/components/common/custom-section';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { TestimonialsProps } from '@/types';
import TestimonialCard from './card';
import { useState } from 'react';

const testimonials: TestimonialsProps[] = [
  {
    id: 1,
    name: 'Lana Rey',
    avatar: '',
    title: 'Founder & Leader',
    stars: 4,
    message: 'Is it possible to Love your credit card processor? with TeamForce, yes!'
  },
  {
    id: 2,
    name: 'J. McGhee',
    avatar: '',
    title: 'Founder & Leader',
    stars: 5,
    message: 'Is it possible to Love your credit card processor? with TeamForce, yes!'
  },
  {
    id: 3,
    name: 'Michael H.',
    avatar: '',
    title: 'Founder & Leader',
    stars: 4,
    message: 'Is it possible to Love your credit card processor? with TeamForce, yes!'
  },
  {
    id: 4,
    name: 'John Doe',
    avatar: '',
    title: 'Founder & Leader',
    stars: 4,
    message: 'Is it possible to Love your credit card processor? with TeamForce, yes!'
  },
  {
    id: 5,
    name: 'Jane Doe',
    avatar: '',
    title: 'Founder & Leader',
    stars: 4,
    message: 'Is it possible to Love your credit card processor? with TeamForce, yes!'
  },
  {
    id: 6,
    name: 'Steve Doe',
    avatar: '',
    title: 'Founder & Leader',
    stars: 4,
    message: 'Is it possible to Love your credit card processor? with TeamForce, yes!'
  }
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 1.25,
      spacing: 8
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 1, spacing: 18 }
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 22 }
      }
    }
  });

  return (
    <CustomSection id="testimonials" className="bg-gradient pb-16" waveColor="#6f2fd7">
      <CustomHeading
        title="What people are saying about us"
        size="large"
        className="text-white w-full md:w-2/3 lg:w-1/2 text-center mx-auto mb-12"
      />
      <div className="relative py-5">
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial) => (
            <div className="keen-slider__slide" key={testimonial.id}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-4">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                const totalSlides = instanceRef.current?.track.details.slides.length ?? 0;
                const targetSlide = Math.floor((idx / 2) * (totalSlides - 1));
                instanceRef.current?.moveToIdx(targetSlide);
              }}
              className={`mx-1 w-3 h-3 rounded-full ${
                Math.floor(
                  (currentSlide / ((instanceRef.current?.track.details.slides.length ?? 1) - 1)) * 2
                ) === idx
                  ? 'bg-white'
                  : 'bg-white/50'
              }`}
            ></button>
          ))}
        </div>
      )}
    </CustomSection>
  );
};

export default Testimonials;
