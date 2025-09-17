const HistoryPage = () => {
    return (
        <div className="bg-white">
            <header className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Our Journey</p>
                        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">The History of Palm Court Karate</h1>
                        <p className="text-lg text-gray-600">From humble beginnings to a pillar of the community, discover the story of our dojo.</p>
                    </div>
                </div>
            </header>

            <main className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose lg:prose-xl mx-auto text-gray-700">
                        <h2>The Founding (1992)</h2>
                        <p>
                            Palm Court Karate Centre was established in 1992 by Mario Sequeira, a passionate martial artist with a vision to create a community dedicated to the practice of traditional Okinawan Goju-Ryu Karate-Do. With the unwavering support of his wife, Zenobia, the first dojo opened its doors, welcoming students of all ages and backgrounds. The early days were marked by a commitment to discipline, respect, and the authentic teachings of the art.
                        </p>
                        <figure className="my-12">
                            <img 
                                src="https://images.unsplash.com/photo-1549477119-34e715206034?q=80&w=1200&auto=format&fit=crop" 
                                alt="Early days of the dojo" 
                                className="w-full h-auto object-cover rounded-lg shadow-md"
                            />
                            <figcaption className="text-center text-sm text-gray-500 mt-2">A class in session, embodying the spirit of our early years.</figcaption>
                        </figure>

                        <h2>Growth and Community</h2>
                        <p>
                            Over the next three decades, the dojo grew from a small group of dedicated students into a thriving family. Generations of karateka have trained on our mats, forging lifelong friendships and developing skills that extend far beyond self-defense. We became a place where families could train together, where children learned confidence, and where adults found a path to physical and mental well-being.
                        </p>
                        <p>
                            Our affiliation with the International Okinawan Goju-Ryu Karate-do Federation (IOGKF) was a pivotal moment, connecting our students to a global community and ensuring our standards remained at the highest level. We began participating in national and international tournaments, seminars, and gasshukus, broadening our horizons and enriching our practice.
                        </p>

                        <h2>A New Chapter in Constantia Kloof</h2>
                        <p>
                            Today, we are proud to have moved into our new, state-of-the-art facility in Constantia Kloof. This modern space honors our traditional roots while providing our students with the best possible training environment. Equipped with top-quality gear and a spacious training area, the new dojo represents a new chapter in our story, but our core mission remains the same: to empower individuals and build a strong community through the practice of Karate-Do.
                        </p>
                        <blockquote className="border-l-4 border-amber-800 pl-4 italic my-8">
                            <p>"The ultimate aim of Karate lies not in victory or defeat, but in the perfection of the character of its participants."</p>
                            <cite className="block text-right not-italic text-gray-600">- Gichin Funakoshi</cite>
                        </blockquote>
                        <p>
                            We look forward to continuing our journey and welcoming new members into the Palm Court Karate family for many years to come.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HistoryPage;
