
import React from 'react';
import { MoveUpRight } from 'lucide-react';

export const DesignThoughts: React.FC = () => {
  const posts = [
    {
      id: '1',
      title: 'Starting and Growing a Career in Web Design',
      excerpt: 'As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.',
      date: 'Apr 8, 2022',
      readTime: '6min read'
    },
    {
      id: '2',
      title: 'Create a Landing Page That Performs Great',
      excerpt: 'Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.',
      date: 'Mar 15, 2022',
      readTime: '6min read'
    },
    {
      id: '3',
      title: 'How Can Designers Prepare for the Future?',
      excerpt: 'Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.',
      date: 'Feb 28, 2022',
      readTime: '6min read'
    },
  ];

  return (
    <div>
      <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase mb-12">
        Design <br />
        <span className="text-white/10">Thoughts</span>
      </h2>

      <div className="space-y-12">
        {posts.map((post) => (
          <div key={post.id} className="group cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-[#FF7D4D] transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl line-clamp-2">{post.excerpt}</p>
              </div>
              <div className="text-gray-600 group-hover:text-[#FF7D4D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all ml-4">
                <MoveUpRight size={24} />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 font-medium uppercase tracking-wider">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
