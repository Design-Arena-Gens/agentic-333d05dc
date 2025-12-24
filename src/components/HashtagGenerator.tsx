'use client';

import React, { useState } from 'react';

const popularCategories = [
  { name: 'Fashion', emoji: '👗' },
  { name: 'Food', emoji: '🍕' },
  { name: 'Travel', emoji: '✈️' },
  { name: 'Fitness', emoji: '💪' },
  { name: 'Beauty', emoji: '💄' },
  { name: 'Tech', emoji: '💻' },
  { name: 'Photography', emoji: '📸' },
  { name: 'Business', emoji: '💼' },
];

const sampleHashtags = {
  trending: [
    { tag: '#christmas2024', posts: '2.5M', growth: '+45%' },
    { tag: '#newyear2025', posts: '1.8M', growth: '+120%' },
    { tag: '#holidayvibes', posts: '980K', growth: '+28%' },
    { tag: '#winterwonderland', posts: '1.2M', growth: '+35%' },
  ],
  niche: [
    { tag: '#contentcreator', posts: '15.2M', competition: 'Medium' },
    { tag: '#socialmediatips', posts: '4.5M', competition: 'Low' },
    { tag: '#instagramgrowth', posts: '8.7M', competition: 'Medium' },
    { tag: '#digitalmarketing', posts: '22.1M', competition: 'High' },
  ],
  suggested: [
    '#instagood', '#photooftheday', '#instadaily', '#explore',
    '#viral', '#trending', '#lifestyle', '#motivation',
    '#inspiration', '#love', '#beautiful', '#happy',
  ],
};

export default function HashtagGenerator() {
  const [keyword, setKeyword] = useState('');
  const [generatedTags, setGeneratedTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!keyword.trim()) return;
    setIsGenerating(true);
    
    setTimeout(() => {
      const baseTags = [
        `#${keyword.toLowerCase().replace(/\s+/g, '')}`,
        `#${keyword.toLowerCase().replace(/\s+/g, '')}life`,
        `#${keyword.toLowerCase().replace(/\s+/g, '')}lovers`,
        `#${keyword.toLowerCase().replace(/\s+/g, '')}community`,
        `#${keyword.toLowerCase().replace(/\s+/g, '')}daily`,
        `#${keyword.toLowerCase().replace(/\s+/g, '')}inspiration`,
        '#instagood', '#photooftheday', '#instadaily',
        '#viral', '#trending', '#explore', '#foryou',
        '#lifestyle', '#motivation', '#inspiration',
        '#contentcreator', '#socialmedia', '#growth',
        '#authentic', '#creative', '#passion',
      ];
      setGeneratedTags(baseTags);
      setIsGenerating(false);
    }, 1500);
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else if (selectedTags.length < 30) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedTags.join(' '));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Hashtag Generator #️⃣</h1>
        <p className="text-gray-500">Find the perfect hashtags to boost your reach</p>
      </div>

      {/* Generator */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Generate Hashtags</h2>
        <div className="flex gap-3">
          <input
            type="text"
            className="input-field flex-1"
            placeholder="Enter keyword or topic (e.g., fitness, travel, food)"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          />
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="btn-primary whitespace-nowrap"
          >
            {isGenerating ? '⚡ Generating...' : '✨ Generate'}
          </button>
        </div>

        {/* Quick Categories */}
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">Quick Categories:</p>
          <div className="flex flex-wrap gap-2">
            {popularCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  setKeyword(cat.name);
                  setTimeout(handleGenerate, 100);
                }}
                className="px-3 py-1.5 rounded-full text-sm bg-gray-100 dark:bg-gray-800 hover:bg-pink-100 dark:hover:bg-pink-900/20 transition-colors"
              >
                {cat.emoji} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Generated Hashtags */}
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Generated Hashtags</h2>
            {generatedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([...new Set([...selectedTags, ...generatedTags.slice(0, 30 - selectedTags.length)])])}
                className="text-sm text-pink-600 font-medium"
              >
                Select All
              </button>
            )}
          </div>
          
          {generatedTags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {generatedTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    selectedTags.includes(tag)
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-pink-100 dark:hover:bg-pink-900/20'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400">
              <span className="text-4xl mb-3">#️⃣</span>
              <p className="text-sm">Enter a keyword to generate hashtags</p>
            </div>
          )}
        </div>

        {/* Selected Hashtags */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Selected ({selectedTags.length}/30)</h2>
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="text-sm text-red-500 font-medium"
              >
                Clear
              </button>
            )}
          </div>
          
          {selectedTags.length > 0 ? (
            <>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl mb-4 max-h-48 overflow-y-auto">
                <p className="text-sm break-words">{selectedTags.join(' ')}</p>
              </div>
              <button
                onClick={copyToClipboard}
                className="btn-primary w-full"
              >
                📋 Copy to Clipboard
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400">
              <span className="text-4xl mb-3">📝</span>
              <p className="text-sm text-center">Click on hashtags to select them</p>
            </div>
          )}
        </div>
      </div>

      {/* Trending & Niche Hashtags */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Trending */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">🔥 Trending Now</h2>
          <div className="space-y-3">
            {sampleHashtags.trending.map((hashtag, index) => (
              <div
                key={index}
                onClick={() => toggleTag(hashtag.tag)}
                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                  selectedTags.includes(hashtag.tag)
                    ? 'bg-pink-100 dark:bg-pink-900/20 border-2 border-pink-500'
                    : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div>
                  <p className="font-medium text-sm">{hashtag.tag}</p>
                  <p className="text-xs text-gray-500">{hashtag.posts} posts</p>
                </div>
                <span className="text-xs font-medium text-green-500 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full">
                  {hashtag.growth}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Niche */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">🎯 Niche Hashtags</h2>
          <div className="space-y-3">
            {sampleHashtags.niche.map((hashtag, index) => (
              <div
                key={index}
                onClick={() => toggleTag(hashtag.tag)}
                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                  selectedTags.includes(hashtag.tag)
                    ? 'bg-pink-100 dark:bg-pink-900/20 border-2 border-pink-500'
                    : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div>
                  <p className="font-medium text-sm">{hashtag.tag}</p>
                  <p className="text-xs text-gray-500">{hashtag.posts} posts</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  hashtag.competition === 'Low' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                    : hashtag.competition === 'Medium'
                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                    : 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                }`}>
                  {hashtag.competition}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="card bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 border-purple-200 dark:border-purple-800">
        <h3 className="font-semibold mb-3">💡 Hashtag Tips</h3>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li>• Mix popular (1M+), medium (100K-1M), and niche (&lt;100K) hashtags</li>
          <li>• Use 20-30 relevant hashtags per post for maximum reach</li>
          <li>• Avoid banned or spam hashtags that can limit your reach</li>
          <li>• Create branded hashtags for your community</li>
          <li>• Update your hashtag strategy regularly based on performance</li>
        </ul>
      </div>
    </div>
  );
}
