'use client';
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const NewsComponent = () => {
  const hotArticle = {
    category: 'COMPARISON',
    readTime: '5 min read',
    title:
      'A Blend of Tradition and New Sky in The Future Portsmouth Contemporary Kitchen',
    readers: '414',
    trend: 'up',
  };

  const trendingArticles = [
    {
      id: 1,
      image: '/Excise-regulations.webp',
      category: 'DRAFT',
      readTime: '5 min read',
      title: 'Draft Excise Duty (Remission of Excise Duty) Regulations, 2025',
      desc: 'In compliance with the Statutory Instruments Act, Cap. 2A, the Commissioner General on behalf of the Cabinet Secretary, National Treasury and Economic Planning, has developed the draft Excise Duty (Remission of Excise Duty) Regulations 2025.',
      author: 'Liesana Kurnavera',
      timeAgo: '1 day ago',
      avatar: '/Excise-regulations.webp',
    },
    {
      id: 2,
      image: '/ricecontainers.webp',
      category: 'FRAUD',
      readTime: '8 min read',
      title:
        'KRA Thwarts Kshs 123 m Tax Fraud Involving Irregular Clearance of Rice Containers',
      desc: 'Kenya Revenue Authority (KRA) has successfully averted an attempt to defraud the government of Kshs 123 million in taxes through irregular clearance of 161 containers of rice at one of the Container Freight Station (CFS) in Mombasa.',
      author: 'Mehul GOndes',
      timeAgo: '5 hours ago',
      avatar: '/ricecontainers.webp',
    },
    {
      id: 3,
      image: '/api.webp',
      category: 'EVENT UPDATES',
      readTime: '8 min read',
      title:
        'KRA Highlights 1000+ Developers on GavaConnect During API Masterclass',
      desc: 'The Kenya Revenue Authority (KRA) has convened the second API masterclass edition underscoring its commitment to partnerships with the tech developer community for co-creation of simplified service solutions, as part of its larger digital transformation agenda.',
      author: 'Sarjan Mehalole',
      timeAgo: '20 hours ago',
      avatar: '/api.webp',
    },
  ];

  const containerRef = useRef(null);

  const scroll = (dir) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: dir === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-black rounded-t-3xl px-8 py-14  pb-8 ">
      {/* What's Hot Section - Positioned at top */}
      {/* <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-5xl font-bold">What is Hot?</h2>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <Card className="bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl">
          <CardContent className="p-8">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-600 text-sm font-semibold uppercase tracking-wider">
                    {hotArticle.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {hotArticle.readTime}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                  {hotArticle.title}
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-8 h-8 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </div>
                <span className="text-green-500 font-bold text-2xl">
                  {hotArticle.readers}
                </span>
                <span className="text-gray-500 text-sm">readers</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div> */}

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 gap-8 h-[600px] max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Left Side - Large Image */}
        <div className="col-span-4">
          <div className="relative h-full rounded-2xl overflow-hidden shadow-xl">
            <Image src="/NN.webp" alt="herobg" fill className="object-cover" />
            <p className="absolute inset-x-0 rounded-3xl bg-white p-4 max-w-[80%]  mx-auto bottom-10 font-bold mb-6 leading-tight">
              Kenya Revenue Authority Announces Executive Appointments
            </p>
          </div>
        </div>

        {/* Right Side - Trending Section */}
        <div className="col-span-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-white text-4xl font-bold mb-3">Trending</h2>
              <p className="text-white/90 text-lg">
                Collection of trending news in last a month.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                onClick={() => scroll('left')}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all"
                onClick={() => scroll('right')}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <div
            ref={containerRef}
            className="flex flex-row gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
          >
            {trendingArticles.map((article) => (
              <Card
                key={article.id}
                className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-xl min-w-[300px] max-w-[300px]"
              >
                <div className="aspect-[4/3] bg-gray-200 relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#ff0613] text-xs font-semibold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-6 line-clamp-2 leading-tight">
                    {article.title}
                  </h3>

                  <div className="max-h-20 overflow-hidden">
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {article.desc}
                    </p>
                    <a
                      href={`/articles/${article.id}`}
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      Read more <span>→</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;