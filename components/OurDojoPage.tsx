import type { ReactNode } from 'react';
import { testimonialsData } from '../constants';
import type { Testimonial } from '../types';

const CheckmarkIcon = () => (
    <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

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


const OurDojoPage = () => {
    return (
        <div className="bg-white text-gray-800">
            <header className="relative bg-gray-800 py-32 text-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" alt="Dojo background" className="absolute inset-0 w-full h-full object-cover opacity-30"/>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-2">Empower</p>
                        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">Welcome to the Palm Court Karate Dojo</h1>
                        <p className="text-lg text-gray-200">
                           Experience the Tradition and Discipline of Karate-Do at Palm Court Karate Centre
                        </p>
                        <div className="mt-8">
                            <a href="#" className="inline-block px-8 py-3 bg-amber-700 text-white font-semibold rounded-md hover:bg-amber-800 transition-colors shadow-lg">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section className="py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-4">Established in 1992 by Mario &amp; Zenobia Sequeira</h2>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Our dojo is not just a place to learn martial arts; it's a community where students of all ages come together to embrace the rich heritage of Karate-Do. With a curriculum that emphasises both physical and mental development, we ensure that each student gains a comprehensive understanding of the art. Our classes are designed to cater to all skill levels, from beginners to advanced practitioners, ensuring personalised attention and growth.
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="inline-block px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition-colors">
                                        Learn More
                                    </a>
                                    <a href="#" className="inline-block px-8 py-3 bg-transparent text-amber-800 font-semibold rounded-md hover:bg-amber-50 transition-colors flex items-center group">
                                        <span>Sign Up</span>
                                        <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img loading="lazy" src="https://images.unsplash.com/photo-1549477119-34e715206034?q=80&w=800&auto=format&fit=crop" alt="Dojo founders" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[450px]" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                             <div className="flex justify-center lg:order-last">
                                <img loading="lazy" src="https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=800&auto=format&fit=crop" alt="State-of-the-art facilities" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[450px]" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Modern</p>
                                <h2 className="text-4xl font-bold mb-4">State-of-the-Art Facilities and Equipment</h2>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Our new dojo in Constantia Kloof is equipped with state-of-the-art facilities and top-of-the-line equipment, providing the perfect environment for practicing traditional Karate-Do. The spacious training areas are designed to accommodate a variety of classes, ensuring that each session is both comfortable and effective. Our equipment includes high-quality mats, punching bags, and protective gear, all maintained to the highest standards to ensure safety and enhance training experiences.
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="inline-block px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition-colors">
                                        Learn More
                                    </a>
                                    <a href="#" className="inline-block px-8 py-3 bg-transparent text-amber-800 font-semibold rounded-md hover:bg-amber-50 transition-colors flex items-center group">
                                        <span>Sign Up</span>
                                        <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                 <section className="py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Excellence</p>
                                <h2 className="text-4xl font-bold mb-4">Experience the Highest Standard of Traditional Karate-Do</h2>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    At Palm Court Karate Centre, we pride ourselves on delivering the highest standard of tuition in traditional Karate-Do. Our experienced instructors are dedicated to helping you develop your skills and achieve your goals.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start"><span className="mr-3 mt-1"><CheckmarkIcon /></span><span>Expert Instructors with Decades of Experience</span></li>
                                    <li className="flex items-start"><span className="mr-3 mt-1"><CheckmarkIcon /></span><span>Comprehensive Curriculum for All Ages and Skill Levels</span></li>
                                    <li className="flex items-start"><span className="mr-3 mt-1"><CheckmarkIcon /></span><span>Focus on Discipline, Respect, and Personal Growth</span></li>
                                </ul>
                                <div className="flex gap-4">
                                    <a href="#" className="inline-block px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-md hover:bg-gray-200 transition-colors">
                                        Learn More
                                    </a>
                                    <a href="#" className="inline-block px-8 py-3 bg-transparent text-amber-800 font-semibold rounded-md hover:bg-amber-50 transition-colors flex items-center group">
                                        <span>Sign Up</span>
                                        <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img loading="lazy" src="https://images.unsplash.com/photo-1574680096145-f844349f0409?q=80&w=800&auto=format&fit=crop" alt="Karate excellence" className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[450px]" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                             <h2 className="text-4xl font-bold mb-4">Student Feedback</h2>
                             <p className="text-lg text-gray-600">Amazing karate classes, highly recommended for all ages!</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {testimonialsData.slice(0, 2).map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl font-bold mb-4">Dojo Gallery</h2>
                            <p className="text-lg text-gray-600">Explore our state-of-the-art facilities and dynamic classes.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <a href="#" className="col-span-2 row-span-2 block group overflow-hidden rounded-lg">
                                <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop" alt="Dojo gallery image 1" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </a>
                            <a href="#" className="block group overflow-hidden rounded-lg">
                                <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800&auto=format&fit=crop" alt="Dojo gallery image 2" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </a>
                            <a href="#" className="block group overflow-hidden rounded-lg">
                                <img src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=800&auto=format&fit=crop" alt="Dojo gallery image 3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </a>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default OurDojoPage;