const CtaSection = () => {
  return (
    <section className="relative bg-gray-900 py-24">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=2070&auto=format&fit=crop" 
          alt="Karate training session" 
          className="w-full h-full object-cover opacity-30"
        />
         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/50"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Start Your Karate Journey Today
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Step onto the mat and discover the discipline, focus, and community at Palm Court Karate. Sign up for a trial class and experience the transformative power of traditional Goju-Ryu firsthand.
          </p>
          <a 
            href="/booking" 
            className="inline-block px-10 py-4 bg-amber-700 text-white font-semibold text-lg rounded-md hover:bg-amber-800 transition-colors shadow-lg transform hover:scale-105"
          >
            Book a Trial Class
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
