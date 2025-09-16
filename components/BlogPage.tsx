import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'The Philosophy of Goju-Ryu: Hard and Soft',
    author: 'Mario Sequeira',
    date: 'October 26, 2023',
    excerpt: 'Goju-Ryu, which translates to "hard-soft style," is a comprehensive martial art that blends circular, soft techniques with linear, hard strikes. This post explores the core philosophy behind this balance and how it applies both in the dojo and in everyday life.',
    imageUrl: 'https://images.unsplash.com/photo-1593352222347-1422794a0857?q=80&w=800&auto=format&fit=crop',
    category: 'Philosophy',
  },
  {
    id: 2,
    title: '5 Benefits of Karate for Young Children',
    author: 'Isabella Rossi',
    date: 'September 15, 2023',
    excerpt: 'Enrolling your child in karate offers more than just self-defense skills. From improved focus and discipline to enhanced physical fitness and confidence, we break down five key benefits that karate training provides for preschoolers and scholars.',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    category: 'Training',
  },
  {
    id: 3,
    title: 'Preparing for Your First Karate Tournament',
    author: 'Kenji Tanaka',
    date: 'August 02, 2023',
    excerpt: 'Competition can be a daunting but rewarding experience. This guide provides practical tips for students preparing for their first tournament, covering everything from mental preparation to what to pack in your gear bag.',
    imageUrl: 'https://images.unsplash.com/photo-1579548950348-18ed5a260d4b?q=80&w=800&auto=format&fit=crop',
    category: 'Competition',
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold mb-4">From the Dojo</h1>
          <p className="text-lg text-gray-600">
            Insights, stories, and news from the Palm Court Karate community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-amber-800 uppercase mb-2">{post.category}</p>
                <h2 className="text-2xl font-bold mb-3 hover:text-amber-900 transition-colors">
                  <a href="#">{post.title}</a>
                </h2>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                <div className="text-sm text-gray-500 mt-auto">
                  <span>By {post.author}</span> &middot; <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
