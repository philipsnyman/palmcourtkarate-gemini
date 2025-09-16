
import React, { useState, useCallback, useEffect } from 'react';

const SLIDE_COUNT = 7;
const slides = Array.from({ length: SLIDE_COUNT }, (_, i) => `https://picsum.photos/600/400?random=${i}`);

const TournamentsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? SLIDE_COUNT - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === SLIDE_COUNT - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);
  
  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, nextSlide]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-6">Tournaments</h2>
          <p className="text-gray-600">
            Tournaments in traditional karate offer invaluable lessons beyond winning medals. They test skills, character, and resilience, providing experiences that are hard to replicate in the dojo. Competitions reveal students' strengths and weaknesses, helping instructors refine training. While tournaments are beneficial, they should not overshadow the essence of traditional karate training.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform ease-in-out duration-500"
              style={{ transform: `translateX(-${(100 / 5) * currentIndex}%)` }}
            >
              {slides.map((src, index) => (
                 <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2">
                  <div className="bg-gray-200 aspect-w-4 aspect-h-3 flex items-center justify-center">
                    <img src={src} alt={`Tournament scene ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-2">
              {Array.from({ length: SLIDE_COUNT }).map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentIndex(dotIndex)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === dotIndex ? 'bg-black' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                ></button>
              ))}
            </div>

            <div className="flex space-x-3">
              <button onClick={prevSlide} className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="Previous slide">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button onClick={nextSlide} className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors" aria-label="Next slide">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;
