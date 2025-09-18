import type { ReactNode } from 'react';

const SocialShare = ({ text }: { text: string }) => {
    const iconWrapperClass = "w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-black transition-colors";
    
    return (
        <div className="flex items-center space-x-4">
            <p className="text-sm font-semibold">{text}</p>
            <div className="flex items-center space-x-2">
                <a href="#" className={iconWrapperClass} aria-label="Copy link">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                </a>
                <a href="#" className={iconWrapperClass} aria-label="Share on LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className={iconWrapperClass} aria-label="Share on X">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className={iconWrapperClass} aria-label="Share on Facebook">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
            </div>
        </div>
    );
};

const NewsletterSignup = () => (
    <div className="p-6 border border-gray-200 rounded-lg">
        <h3 className="font-bold text-xl mb-2">Join our newsletter</h3>
        <p className="text-sm text-gray-600 mb-4">Stay updated with our latest blog posts delivered straight to your inbox weekly.</p>
        <form>
            <label htmlFor="email" className="sr-only">Your email address</label>
            <input 
                id="email"
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-700 focus:border-amber-700 transition"
            />
            <button 
                type="submit" 
                className="w-full mt-3 px-8 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-black transition-colors shadow"
            >
                Subscribe
            </button>
            <p className="text-xs text-gray-500 mt-3 text-center">
                By subscribing, you agree to our Privacy Policy.
            </p>
        </form>
    </div>
);

const BlogPostPage = () => {
    const tags = ["Karate Training", "Self-Defense Tips", "Martial Arts", "Community Spirit"];

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                
                <p className="text-sm text-gray-500 mb-4">Blog &gt; Karate</p>
                
                <div className="grid md:grid-cols-5 gap-8 items-start mb-8">
                    <div className="md:col-span-3">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Celebrating a Year in Our New Dojo</h1>
                        <div className="text-gray-600 mb-4">
                            <span>By Mario Sequeira</span>
                            <span className="mx-2">&middot;</span>
                            <span>25 May 2023 &middot; 5 min read</span>
                        </div>
                        <SocialShare text="Share this post" />
                    </div>
                    <div className="md:col-span-2">
                        <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center">
                            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 xl:gap-12">
                    <article className="lg:col-span-2 space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>It's hard to believe, but we've just celebrated our first anniversary in our new dojo! Time flies when you're having fun, and that's certainly been the case for us at Palm Court Karate. Every day, I walk into our beautiful new space and feel incredibly blessed that we've been able to make this dream a reality.</p>
                        <p>The journey to this point has been remarkable. Just three years ago, during the height of the pandemic, we were setting up a small home dojo and creating online training videos for our students. Those challenging times planted the seeds for where we are today. It's amazing to see how far we've come.</p>
                        <p>Our new dojo isn't just a place to train; it's become a second home for our karate family. The energy and enthusiasm of our students fill the space, making every session a joy. As one of our students aptly put it, "Training here is just lekker!"</p>
                        <p>We're grateful for everyone who has been part of this journey - our dedicated students, supportive families, and passionate instructors. Here's to many more years of growth, learning, and martial arts excellence in our wonderful new home!</p>
                        
                        <div className="pt-8 border-t border-gray-200">
                            <SocialShare text="Share this post" />
                        </div>

                        <div className="pt-4">
                            <div className="flex flex-wrap gap-2">
                                {tags.map(tag => (
                                    <button key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors">{tag}</button>
                                ))}
                            </div>
                        </div>
                    </article>

                    <aside className="lg:col-span-1">
                        <div className="sticky top-24">
                            <NewsletterSignup />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;