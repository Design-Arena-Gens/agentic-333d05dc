'use client';

import React, { useState } from 'react';

const timeRanges = ['7 days', '30 days', '90 days', '1 year'];

const overviewStats = [
  { label: 'Total Followers', value: '12,547', change: '+2.3%', trend: 'up' },
  { label: 'Posts', value: '156', change: '+12', trend: 'up' },
  { label: 'Engagement Rate', value: '4.8%', change: '+0.5%', trend: 'up' },
  { label: 'Profile Visits', value: '8,234', change: '+18%', trend: 'up' },
  { label: 'Website Clicks', value: '1,456', change: '+25%', trend: 'up' },
  { label: 'Reach', value: '45.2K', change: '+12%', trend: 'up' },
];

const topPosts = [
  { id: 1, type: 'Reel', likes: 2345, comments: 89, saves: 156, shares: 45, reach: '12.5K' },
  { id: 2, type: 'Carousel', likes: 1876, comments: 67, saves: 98, shares: 32, reach: '9.8K' },
  { id: 3, type: 'Post', likes: 1234, comments: 45, saves: 76, shares: 23, reach: '7.2K' },
  { id: 4, type: 'Reel', likes: 998, comments: 34, saves: 54, shares: 18, reach: '6.1K' },
];

const audienceData = {
  gender: [
    { label: 'Women', percentage: 62 },
    { label: 'Men', percentage: 36 },
    { label: 'Other', percentage: 2 },
  ],
  ageGroups: [
    { label: '13-17', percentage: 5 },
    { label: '18-24', percentage: 28 },
    { label: '25-34', percentage: 42 },
    { label: '35-44', percentage: 18 },
    { label: '45+', percentage: 7 },
  ],
  topLocations: [
    { city: 'Los Angeles', percentage: 15 },
    { city: 'New York', percentage: 12 },
    { city: 'London', percentage: 8 },
    { city: 'Toronto', percentage: 6 },
    { city: 'Sydney', percentage: 5 },
  ],
};

const engagementData = [
  { day: 'Mon', likes: 450, comments: 45, saves: 30 },
  { day: 'Tue', likes: 520, comments: 52, saves: 38 },
  { day: 'Wed', likes: 480, comments: 48, saves: 35 },
  { day: 'Thu', likes: 610, comments: 61, saves: 45 },
  { day: 'Fri', likes: 580, comments: 58, saves: 42 },
  { day: 'Sat', likes: 720, comments: 72, saves: 55 },
  { day: 'Sun', likes: 650, comments: 65, saves: 48 },
];

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('30 days');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Analytics 📈</h1>
          <p className="text-gray-500">Track your Instagram performance</p>
        </div>
        <div className="flex gap-2">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                timeRange === range
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {overviewStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
            <span className="text-xs font-medium text-green-500">{stat.change}</span>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Engagement Chart */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Weekly Engagement</h2>
          <div className="h-64 flex items-end justify-between gap-2">
            {engagementData.map((data, index) => {
              const maxLikes = Math.max(...engagementData.map(d => d.likes));
              const height = (data.likes / maxLikes) * 100;
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-pink-500 to-purple-500 rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${height}%` }}
                  />
                  <p className="text-xs text-gray-500 mt-2">{data.day}</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <span className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
              Likes
            </span>
          </div>
        </div>

        {/* Audience Demographics */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Audience Demographics</h2>
          
          {/* Gender */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">Gender</p>
            <div className="flex gap-2 h-4 rounded-full overflow-hidden">
              {audienceData.gender.map((g, i) => (
                <div
                  key={i}
                  className={`${
                    i === 0 ? 'bg-pink-500' : i === 1 ? 'bg-blue-500' : 'bg-purple-500'
                  }`}
                  style={{ width: `${g.percentage}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {audienceData.gender.map((g, i) => (
                <span key={i} className="text-xs text-gray-500">
                  {g.label}: {g.percentage}%
                </span>
              ))}
            </div>
          </div>

          {/* Age Groups */}
          <div>
            <p className="text-sm font-medium mb-2">Age Groups</p>
            <div className="space-y-2">
              {audienceData.ageGroups.map((age, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs w-12">{age.label}</span>
                  <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                      style={{ width: `${age.percentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-10">{age.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Posts & Locations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Posts */}
        <div className="card lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">🏆 Top Performing Posts</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                  <th className="pb-3 font-medium text-sm text-gray-500">Post</th>
                  <th className="pb-3 font-medium text-sm text-gray-500">❤️ Likes</th>
                  <th className="pb-3 font-medium text-sm text-gray-500">💬 Comments</th>
                  <th className="pb-3 font-medium text-sm text-gray-500">🔖 Saves</th>
                  <th className="pb-3 font-medium text-sm text-gray-500">📤 Shares</th>
                  <th className="pb-3 font-medium text-sm text-gray-500">📡 Reach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {topPosts.map((post, index) => (
                  <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white text-xs font-bold">
                          #{index + 1}
                        </div>
                        <span className="text-sm font-medium">{post.type}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm">{post.likes.toLocaleString()}</td>
                    <td className="py-4 text-sm">{post.comments}</td>
                    <td className="py-4 text-sm">{post.saves}</td>
                    <td className="py-4 text-sm">{post.shares}</td>
                    <td className="py-4 text-sm font-medium">{post.reach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Locations */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">📍 Top Locations</h2>
          <div className="space-y-4">
            {audienceData.topLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-lg">{index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '📍'}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{location.city}</p>
                  <div className="mt-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      style={{ width: `${location.percentage * 5}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm text-gray-500">{location.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Growth Insights */}
      <div className="card instagram-gradient text-white">
        <div className="flex items-center gap-4">
          <span className="text-4xl">🚀</span>
          <div>
            <h3 className="text-lg font-bold">Growth Insight</h3>
            <p className="text-sm opacity-90">Your engagement rate is 42% higher than similar accounts. Keep posting Reels - they&apos;re your best performing content type!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
