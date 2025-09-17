import { blogPostsData } from '../constants';
import type { BlogPost } from '../types';

const categories = ["View all", "Karate Tips", "Training Techniques", "Self-Defense", "Dojo Etiquette"];

const FeaturedPost = ({ post }: { post: BlogPost }) => (
    <a href={`/blog/${post.slug}`} className="block group">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="overflow-hidden rounded-lg">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{post.category}</p>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-amber-800 transition-colors">{post.title}</h3>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <div className="flex items-center">
                    <img src={post.authorImageUrl} alt={post.author} className="w-12 h-12 rounded-full object-cover mr-4" />
                    <div>
                        <p className="font-semibold">{post.author}</p>
                        <p className="text-sm text-gray-500">{post.date} &middot; {post.readTimeInMinutes} min read</p>
                    </div>
                </div>
            </div>
        </div>
    </a>
);

const BlogPostCard = ({ post }: { post: BlogPost }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <a href={`/blog/${post.slug}`} className="block">
            <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
        </a>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{post.category}</p>
            <h2 className="text-xl font-bold mb-3 flex-grow">
                <a href={`/blog/${post.slug}`} className="hover:text-amber-800 transition-colors">{post.title}</a>
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                <img src={post.authorImageUrl} alt={post.author} className="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                    <p className="text-sm font-semibold">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.date} &middot; {post.readTimeInMinutes} min read</p>
                </div>
            </div>
        </div>
    </div>
);


const BlogPage = () => {
    const featuredPost = blogPostsData.find(post => post.isFeatured);
    const regularPosts = blogPostsData.filter(post => !post.isFeatured);

    return (
        <div className="bg-white">
            <header className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Blog</p>
                        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">Explore Our Latest Insights</h1>
                        <p className="text-lg text-gray-600">Dive into the world of Karate with our blog.</p>
                    </div>
                </div>
            </header>

            <main className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {featuredPost && (
                        <section className="mb-20">
                            <FeaturedPost post={featuredPost} />
                        </section>
                    )}

                    <section>
                        <div className="mb-12 border-b border-gray-200">
                            <div className="flex space-x-6 overflow-x-auto pb-4">
                                {categories.map((category, index) => (
                                    <a 
                                        key={category} 
                                        href="#" 
                                        className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${index === 0 ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-100'}`}
                                    >
                                        {category}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {regularPosts.map((post) => (
                                <BlogPostCard key={post.id} post={post} />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">Join Our Karate Community Today</h2>
                        <p className="text-gray-600 mb-8">
                            Stay updated with our latest news, events, and exclusive offers by subscribing to our newsletter.
                        </p>
                        <form className="max-w-lg mx-auto">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-700 focus:border-amber-700 transition"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-8 py-3 bg-amber-800 text-white font-semibold rounded-md hover:bg-amber-900 transition-colors shadow flex-shrink-0"
                                >
                                    Sign Up
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-3">
                                By clicking Sign Up, you agree to our Terms and Conditions.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
