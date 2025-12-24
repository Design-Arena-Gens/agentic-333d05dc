'use client';

import React from 'react';

const stats = [
  { label: 'Followers', value: '12.5K', change: '+2.3%', icon: '👥' },
  { label: 'Engagement Rate', value: '4.8%', change: '+0.5%', icon: '💬' },
  { label: 'Posts This Week', value: '7', change: '+40%', icon: '📷' },
  { label: 'Reach', value: '45.2K', change: '+12%', icon: '📡' },
];

const recentActivity = [
  { type: 'post', message: 'Your post received 234 likes', time: '2 hours ago', icon: '❤️' },
  { type: 'comment', message: '15 new comments on your latest reel', time: '4 hours ago', icon: '💬' },
  { type: 'follower', message: 'You gained 48 new followers today', time: '6 hours ago', icon: '👤' },
  { type: 'mention', message: 'You were mentioned in 3 stories', time: '8 hours ago', icon: '📢' },
];

const scheduledPosts = [
  { title: 'Product Launch Teaser', time: 'Today, 6:00 PM', status: 'ready', image: '🎬' },
  { title: 'Behind the Scenes', time: 'Tomorrow, 10:00 AM', status: 'pending', image: '📸' },
  { title: 'Customer Testimonial', time: 'Dec 26, 2:00 PM', status: 'draft', image: '💬' },
];

const aiSuggestions = [
  { title: 'Best time to post', description: 'Your audience is most active between 6-8 PM', action: 'Schedule Now' },
  { title: 'Trending hashtags', description: '#christmas2024 is trending in your niche', action: 'Use Tags' },
  { title: 'Content idea', description: 'Holiday gift guides perform well this week', action: 'Create Post' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome back! 👋</h1>
          <p className="text-gray-500">Here&apos;s what&apos;s happening with your Instagram</p>
        </div>
        <button className="btn-primary">
          Create New Post
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
            <span className="text-green-500 text-xs font-medium">{stat.change}</span>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="card lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center text-xl">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">🤖 AI Suggestions</h2>
          <div className="space-y-4">
            {aiSuggestions.map((suggestion, index) => (
              <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/10 border border-pink-100 dark:border-pink-800">
                <h3 className="font-medium text-sm">{suggestion.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{suggestion.description}</p>
                <button className="mt-3 text-xs font-semibold text-pink-600 hover:text-pink-700">
                  {suggestion.action} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scheduled Posts */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Scheduled Posts</h2>
          <button className="text-sm text-pink-600 font-medium hover:text-pink-700">
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scheduledPosts.map((post, index) => (
            <div key={index} className="post-preview p-4">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-4xl mb-3">
                {post.image}
              </div>
              <h3 className="font-medium text-sm">{post.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{post.time}</p>
              <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                post.status === 'ready' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                post.status === 'pending' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
                'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
              }`}>
                {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: '✨', label: 'Generate Caption', color: 'from-pink-500 to-rose-500' },
          { icon: '#️⃣', label: 'Find Hashtags', color: 'from-purple-500 to-indigo-500' },
          { icon: '📅', label: 'Schedule Post', color: 'from-blue-500 to-cyan-500' },
          { icon: '📊', label: 'View Analytics', color: 'from-green-500 to-emerald-500' },
        ].map((action, index) => (
          <button key={index} className={`p-4 rounded-xl bg-gradient-to-r ${action.color} text-white font-medium text-sm hover:scale-105 transition-transform`}>
            <span className="text-2xl block mb-2">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
