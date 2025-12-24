'use client';

import React, { useState } from 'react';

const competitors = [
  { 
    username: '@fashionista_brand',
    followers: '125K',
    engagement: '5.2%',
    posts: 890,
    avgLikes: '6.5K',
    growth: '+8.5%',
  },
  { 
    username: '@style_collective',
    followers: '98K',
    engagement: '4.8%',
    posts: 654,
    avgLikes: '4.7K',
    growth: '+5.2%',
  },
  { 
    username: '@trendy_boutique',
    followers: '87K',
    engagement: '6.1%',
    posts: 432,
    avgLikes: '5.3K',
    growth: '+12.3%',
  },
  { 
    username: '@chic_lifestyle',
    followers: '156K',
    engagement: '3.9%',
    posts: 1245,
    avgLikes: '6.1K',
    growth: '+3.8%',
  },
];

const yourStats = {
  username: '@your_brand',
  followers: '12.5K',
  engagement: '4.8%',
  posts: 156,
  avgLikes: '600',
  growth: '+2.3%',
};

const contentComparison = [
  { type: 'Reels', you: 45, avg: 35, benchmark: 'Above Average' },
  { type: 'Carousels', you: 30, avg: 40, benchmark: 'Below Average' },
  { type: 'Single Posts', you: 20, avg: 20, benchmark: 'Average' },
  { type: 'Stories/Day', you: 3, avg: 5, benchmark: 'Below Average' },
];

const topHashtags = [
  { tag: '#fashion', usage: '95%' },
  { tag: '#style', usage: '88%' },
  { tag: '#ootd', usage: '82%' },
  { tag: '#fashionblogger', usage: '76%' },
  { tag: '#instafashion', usage: '72%' },
];

const postingSchedule = [
  { day: 'Mon', competitors: 2.5, you: 1 },
  { day: 'Tue', competitors: 2.2, you: 2 },
  { day: 'Wed', competitors: 2.8, you: 1 },
  { day: 'Thu', competitors: 2.4, you: 1 },
  { day: 'Fri', competitors: 2.1, you: 1 },
  { day: 'Sat', competitors: 1.8, you: 0 },
  { day: 'Sun', competitors: 1.5, you: 1 },
];

export default function CompetitorAnalysis() {
  const [newCompetitor, setNewCompetitor] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Competitor Analysis 🔍</h1>
          <p className="text-gray-500">Analyze and learn from your competition</p>
        </div>
      </div>

      {/* Add Competitor */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Add Competitor</h2>
        <div className="flex gap-3">
          <input
            type="text"
            className="input-field flex-1"
            placeholder="Enter Instagram username (e.g., @competitor)"
            value={newCompetitor}
            onChange={(e) => setNewCompetitor(e.target.value)}
          />
          <button className="btn-primary">
            + Add to Watch List
          </button>
        </div>
      </div>

      {/* Competitor Comparison Table */}
      <div className="card overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">📊 Competitor Comparison</h2>
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="text-left border-b border-gray-200 dark:border-gray-700">
              <th className="pb-3 font-medium text-sm text-gray-500">Account</th>
              <th className="pb-3 font-medium text-sm text-gray-500">Followers</th>
              <th className="pb-3 font-medium text-sm text-gray-500">Engagement</th>
              <th className="pb-3 font-medium text-sm text-gray-500">Posts</th>
              <th className="pb-3 font-medium text-sm text-gray-500">Avg. Likes</th>
              <th className="pb-3 font-medium text-sm text-gray-500">Growth</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {/* Your stats highlighted */}
            <tr className="bg-pink-50 dark:bg-pink-900/10">
              <td className="py-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full instagram-gradient flex items-center justify-center text-white text-xs font-bold">
                    You
                  </div>
                  <span className="font-medium text-sm">{yourStats.username}</span>
                </div>
              </td>
              <td className="py-4 text-sm font-semibold">{yourStats.followers}</td>
              <td className="py-4 text-sm">{yourStats.engagement}</td>
              <td className="py-4 text-sm">{yourStats.posts}</td>
              <td className="py-4 text-sm">{yourStats.avgLikes}</td>
              <td className="py-4">
                <span className="text-xs font-medium text-green-500">{yourStats.growth}</span>
              </td>
            </tr>
            {/* Competitors */}
            {competitors.map((comp, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs">
                      {index + 1}
                    </div>
                    <span className="font-medium text-sm">{comp.username}</span>
                  </div>
                </td>
                <td className="py-4 text-sm">{comp.followers}</td>
                <td className="py-4 text-sm">{comp.engagement}</td>
                <td className="py-4 text-sm">{comp.posts}</td>
                <td className="py-4 text-sm">{comp.avgLikes}</td>
                <td className="py-4">
                  <span className="text-xs font-medium text-green-500">{comp.growth}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Mix Comparison */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">📸 Content Mix</h2>
          <p className="text-sm text-gray-500 mb-4">How your content strategy compares</p>
          <div className="space-y-4">
            {contentComparison.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.type}</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    item.benchmark === 'Above Average' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : item.benchmark === 'Below Average'
                      ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                    {item.benchmark}
                  </span>
                </div>
                <div className="flex gap-2 h-6">
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-xs text-gray-500 w-8">You</span>
                    <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
                        style={{ width: `${item.you}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-8">{item.you}%</span>
                  </div>
                </div>
                <div className="flex gap-2 h-6">
                  <div className="flex-1 flex items-center gap-2">
                    <span className="text-xs text-gray-500 w-8">Avg</span>
                    <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                        style={{ width: `${item.avg}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-8">{item.avg}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Hashtags Used */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">#️⃣ Top Competitor Hashtags</h2>
          <p className="text-sm text-gray-500 mb-4">Most used by your competitors</p>
          <div className="space-y-3">
            {topHashtags.map((hashtag, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800"
              >
                <span className="font-medium text-sm">{hashtag.tag}</span>
                <div className="flex items-center gap-3">
                  <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: hashtag.usage }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-10">{hashtag.usage}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-sm text-pink-600 font-medium hover:text-pink-700">
            Use These Hashtags →
          </button>
        </div>
      </div>

      {/* Posting Frequency */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">📅 Posting Frequency Comparison</h2>
        <div className="h-48 flex items-end justify-between gap-4">
          {postingSchedule.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full flex gap-1 justify-center mb-2">
                <div
                  className="w-6 bg-gradient-to-t from-pink-500 to-rose-400 rounded-t"
                  style={{ height: `${data.you * 30}px` }}
                  title={`You: ${data.you}`}
                />
                <div
                  className="w-6 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t"
                  style={{ height: `${data.competitors * 30}px` }}
                  title={`Competitors: ${data.competitors}`}
                />
              </div>
              <p className="text-xs text-gray-500">{data.day}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-6 text-xs">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-pink-500" /> You
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-blue-500" /> Competitors Avg
          </span>
        </div>
      </div>

      {/* Insights */}
      <div className="card bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 border-purple-200 dark:border-purple-800">
        <h3 className="font-semibold mb-3">💡 Key Insights</h3>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li>• Your engagement rate (4.8%) is competitive but @trendy_boutique leads at 6.1%</li>
          <li>• Consider posting more Reels - competitors average 35% Reel content</li>
          <li>• You&apos;re posting 5.5 posts/week vs competitor average of 15/week</li>
          <li>• Focus on weekend posting - competitors see high engagement Sat-Sun</li>
          <li>• Adopt trending hashtags like #ootd and #fashionblogger</li>
        </ul>
      </div>
    </div>
  );
}
