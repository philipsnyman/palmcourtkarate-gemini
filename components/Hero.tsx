import React from 'react';

const Hero: React.FC = () => {
  return (
    <section>
      <img 
        src="https://images.unsplash.com/photo-1579548950348-18ed5a260d4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Karate practitioner tying belt" 
        className="w-full h-auto object-cover" 
        style={{ maxHeight: '400px' }} 
      />
    </section>
  );
};

export default Hero;
