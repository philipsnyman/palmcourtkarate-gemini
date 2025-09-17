import { blogPostsData } from '../constants';

type BlogPostPageProps = {
  slug?: string;
};

const BlogPostPage = ({ slug }: BlogPostPageProps) => {
    const post = blogPostsData.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h1 className="text-4xl font-bold">Post not found</h1>
            </div>
        );
    }

    return (
        <article className="bg-white py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <header className="mb-12 text-center">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{post.category}</p>
                        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900">{post.title}</h1>
                        <div className="flex items-center justify-center mt-6">
                            <img src={post.authorImageUrl} alt={post.author} className="w-12 h-12 rounded-full object-cover mr-4" />
                            <div>
                                <p className="font-semibold">{post.author}</p>
                                <p className="text-sm text-gray-500">{post.date} &middot; {post.readTimeInMinutes} min read</p>
                            </div>
                        </div>
                    </header>
                    <div className="mb-12">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="prose lg:prose-xl max-w-none mx-auto text-gray-700">
                        <p>{post.excerpt}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <h2>A Deeper Dive</h2>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogPostPage;