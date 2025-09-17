const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Experience the Power of Traditional Karate
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Join us at Palm Court Karate Centre, where you can train under the guidance of internationally acclaimed instructors. Our traditional Karate-Do classes cater to preschoolers, children, and adults, ensuring a high standard of teaching and adherence to dojo etiquette.
            </p>
            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
              <a href="#" className="inline-block px-8 py-3 bg-amber-800 text-white font-semibold rounded-md hover:bg-amber-900 transition-colors shadow">
                Learn More
              </a>
              <a href="#" className="inline-block px-8 py-3 bg-gray-100 text-amber-800 font-semibold rounded-md hover:bg-gray-200 transition-colors">
                Sign Up
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1549477119-34e715206034?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Karate class in session" 
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;