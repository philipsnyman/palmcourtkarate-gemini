import { testimonialsData } from '../constants';
import type { Testimonial } from '../types';

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 flex flex-col h-full">
        <div className="flex mb-4">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
        </div>
        <blockquote className="text-lg text-gray-700 mb-6 flex-grow">
            <p>"{testimonial.quote}"</p>
        </blockquote>
        <div className="mt-auto flex items-center">
            <img className="h-12 w-12 rounded-full object-cover" src={testimonial.author.imageUrl} alt={testimonial.author.name} />
            <div className="ml-4">
                <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.author.title}</div>
            </div>
            {testimonial.companyLogoUrl && (
                <div className="ml-auto pl-4 border-l border-gray-200">
                    <img className="h-8" src={testimonial.companyLogoUrl} alt="Company logo" />
                </div>
            )}
        </div>
    </div>
);

const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-amber-800 font-semibold mb-2">What Our Students Say</p>
                    <h2 className="text-5xl font-bold mb-6">Testimonials</h2>
                    <p className="text-gray-600">
                        Hear from members of our dojo about their experience training at Palm Court Karate.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
