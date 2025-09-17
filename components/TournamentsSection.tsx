import { useState, useCallback, useEffect } from 'react';

const SLIDE_COUNT = 7;
const slides = Array.from({ length: SLIDE_COUNT }, (_, i) => `https://picsum.photos/600/400?random=${i}`);

const TournamentsSection = () => {
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
              className="flex transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${(100 / (slides.length)) * currentIndex}%)` }}
            >
              {slides.map((src, index) => (
                 <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex-shrink-0 px-2">
                  <div className="bg-gray-200 aspect-w-4 aspect-h-3 flex items-center justify-center">
                    <img src={src} alt={`Tournament scene ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between items-center px-4">
             <button onClick={prevSlide} className="bg-white/50 p-2 rounded-full hover:bg-white transition-colors shadow-md" aria-label="Previous slide">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button onClick={nextSlide} className="bg-white/50 p-2 rounded-full hover:bg-white transition-colors shadow-md" aria-label="Next slide">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
          </div>

           <div className="flex justify-center space-x-2 pt-8">
              {Array.from({ length: slides.length }).map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentIndex(dotIndex)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === dotIndex ? 'bg-black' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                ></button>
              ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;