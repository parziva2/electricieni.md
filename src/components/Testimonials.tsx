'use client';

import { StarIcon } from '@heroicons/react/20/solid';

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  imageUrl?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <div key={testimonialIdx} className="h-full">
                <figure className="h-full rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.comment}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    {testimonial.imageUrl ? (
                      <img 
                        src={testimonial.imageUrl} 
                        alt={testimonial.name} 
                        className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center">
                        <StarIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 