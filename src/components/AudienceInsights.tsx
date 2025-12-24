'use client';

import React from 'react';

const followerGrowth = [
  { date: 'Dec 18', followers: 11200 },
  { date: 'Dec 19', followers: 11350 },
  { date: 'Dec 20', followers: 11580 },
  { date: 'Dec 21', followers: 11850 },
  { date: 'Dec 22', followers: 12100 },
  { date: 'Dec 23', followers: 12320 },
  { date: 'Dec 24', followers: 12547 },
];

const audienceInterests = [
  { interest: 'Fashion & Style', percentage: 78 },
  { interest: 'Travel', percentage: 65 },
  { interest: 'Food & Dining', percentage: 54 },
  { interest: 'Fitness & Health', percentage: 48 },
  { interest: 'Beauty', percentage: 45 },
  { interest: 'Photography', percentage: 42 },
  { interest: 'Music', percentage: 38 },
  { interest: 'Technology', percentage: 32 },
];

const activeHours = [
  { hour: '6 AM', activity: 15 },
  { hour: '9 AM', activity: 45 },
  { hour: '12 PM', activity: 60 },
  { hour: '3 PM', activity: 55 },
  { hour: '6 PM', activity: 85 },
  { hour: '9 PM', activity: 75 },
  { hour: '12 AM', activity: 25 },
];

const topFollowers = [
  { username: '@influencer_queen', followers: '125K', engagement: 'High' },
  { username: '@brand_ambassador', followers: '89K', engagement: 'Very High' },
  { username: '@content_creator_pro', followers: '67K', engagement: 'High' },
  { username: '@lifestyle_guru', followers: '45K', engagement: 'Medium' },
  { username: '@fashion_forward', followers: '34K', engagement: 'High' },
];

const unfollowers = [
  { username: '@user_12345', date: '2024-12-24', reason: 'Inactive' },
  { username: '@old_follower', date: '2024-12-23', reason: 'Unknown' },
  { username: '@random_account', date: '2024-12-22', reason: 'Bot cleanup' },
];

export default function AudienceInsights() {
  const maxFollowers = Math.max(...followerGrowth.map(d => d.followers));
  const minFollowers = Math.min(...followerGrowth.map(d => d.followers));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Audience Insights 👥</h1>
        <p className="text-gray-500">Understand who follows you and how they engage</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Followers', value: '12,547', icon: '👥', change: '+347 this week' },
          { label: 'Avg. Engagement', value: '4.8%', icon: '💬', change: '+0.3% vs last week' },
          { label: 'Real Followers', value: '94%', icon: '✓', change: 'Above average' },
          { label: 'Active Followers', value: '78%', icon: '⚡', change: 'Very healthy' },
        ].map((metric, index) => (
          <div key={index} className="stat-card">
            <span className="text-2xl">{metric.icon}</span>
            <p className="text-2xl font-bold mt-2">{metric.value}</p>
            <p className="text-sm text-gray-500">{metric.label}</p>
            <p className="text-xs text-green-500 mt-1">{metric.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Follower Growth Chart */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">📈 Follower Growth</h2>
          <div className="h-48 flex items-end justify-between gap-2">
            {followerGrowth.map((data, index) => {
              const height = ((data.followers - minFollowers) / (maxFollowers - minFollowers)) * 80 + 20;
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="text-xs text-gray-500 mb-1">{(data.followers / 1000).toFixed(1)}K</div>
                  <div
                    className="w-full bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${height}%` }}
                  />
                  <p className="text-xs text-gray-500 mt-2">{data.date.split(' ')[1]}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-4 p-3 rounded-xl bg-green-50 dark:bg-green-900/10">
            <p className="text-sm text-green-700 dark:text-green-400">
              🎉 +1,347 followers this week! That&apos;s 12% above your average growth rate.
            </p>
          </div>
        </div>

        {/* Active Hours */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">⏰ When Your Audience is Active</h2>
          <div className="h-48 flex items-end justify-between gap-2">
            {activeHours.map((data, index) => {
              const height = data.activity;
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-full rounded-t-lg transition-all hover:opacity-80 ${
                      data.activity >= 70 
                        ? 'bg-gradient-to-t from-pink-500 to-rose-400'
                        : data.activity >= 50
                        ? 'bg-gradient-to-t from-blue-500 to-cyan-400'
                        : 'bg-gradient-to-t from-gray-400 to-gray-300'
                    }`}
                    style={{ height: `${height}%` }}
                  />
                  <p className="text-xs text-gray-500 mt-2">{data.hour.split(' ')[0]}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-pink-500" /> Peak Hours
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-blue-500" /> Good
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-gray-400" /> Low
            </span>
          </div>
        </div>
      </div>

      {/* Audience Interests */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">💡 Audience Interests</h2>
        <p className="text-sm text-gray-500 mb-4">What your followers are interested in</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {audienceInterests.map((interest, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-sm w-32 truncate">{interest.interest}</span>
              <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all"
                  style={{ width: `${interest.percentage}%` }}
                />
              </div>
              <span className="text-sm text-gray-500 w-12">{interest.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Followers */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">⭐ Top Followers</h2>
          <p className="text-sm text-gray-500 mb-4">Your most influential followers</p>
          <div className="space-y-3">
            {topFollowers.map((follower, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{follower.username}</p>
                  <p className="text-xs text-gray-500">{follower.followers} followers</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  follower.engagement === 'Very High' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                    : follower.engagement === 'High'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                }`}>
                  {follower.engagement}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Unfollowers */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">👋 Recent Unfollowers</h2>
          <p className="text-sm text-gray-500 mb-4">Track who unfollowed you</p>
          <div className="space-y-3">
            {unfollowers.map((user, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-red-50 dark:bg-red-900/10"
              >
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  👤
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{user.username}</p>
                  <p className="text-xs text-gray-500">{user.date}</p>
                </div>
                <span className="text-xs text-gray-500">{user.reason}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-sm text-pink-600 font-medium hover:text-pink-700">
            View All Unfollowers →
          </button>
        </div>
      </div>

      {/* Audience Quality Score */}
      <div className="card instagram-gradient text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-3xl font-bold">94</span>
            </div>
            <div>
              <h3 className="text-lg font-bold">Audience Quality Score</h3>
              <p className="text-sm opacity-90">Your followers are highly authentic and engaged</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-75">Compared to similar accounts</p>
            <p className="text-lg font-bold">+18% above average</p>
          </div>
        </div>
      </div>
    </div>
  );
}
