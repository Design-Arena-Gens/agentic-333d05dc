'use client';

import React, { useState } from 'react';

const automationFeatures = [
  { 
    id: 'auto-like', 
    name: 'Auto Like', 
    description: 'Automatically like posts from your target audience',
    icon: '❤️',
    status: 'active'
  },
  { 
    id: 'auto-comment', 
    name: 'Smart Comments', 
    description: 'AI-generated relevant comments on posts',
    icon: '💬',
    status: 'paused'
  },
  { 
    id: 'auto-follow', 
    name: 'Smart Follow', 
    description: 'Follow accounts that match your target audience',
    icon: '👤',
    status: 'inactive'
  },
  { 
    id: 'auto-dm', 
    name: 'Welcome DMs', 
    description: 'Send welcome messages to new followers',
    icon: '✉️',
    status: 'active'
  },
  { 
    id: 'story-views', 
    name: 'Story Viewer', 
    description: 'View stories from potential followers',
    icon: '👁️',
    status: 'active'
  },
  { 
    id: 'unfollow', 
    name: 'Smart Unfollow', 
    description: 'Unfollow accounts that don\'t follow back',
    icon: '👋',
    status: 'paused'
  },
];

const activityLog = [
  { action: 'Liked post', target: '@fashionista_daily', time: '2 min ago', icon: '❤️' },
  { action: 'Viewed story', target: '@travel_moments', time: '5 min ago', icon: '👁️' },
  { action: 'Sent welcome DM', target: '@newuser123', time: '8 min ago', icon: '✉️' },
  { action: 'Liked post', target: '@foodie_heaven', time: '12 min ago', icon: '❤️' },
  { action: 'Viewed story', target: '@fitness_pro', time: '15 min ago', icon: '👁️' },
  { action: 'Liked post', target: '@lifestyle_blog', time: '18 min ago', icon: '❤️' },
];

const stats = [
  { label: 'Actions Today', value: '247', limit: '500' },
  { label: 'Likes Given', value: '156', limit: '200' },
  { label: 'Comments Made', value: '23', limit: '50' },
  { label: 'DMs Sent', value: '12', limit: '30' },
];

const commentTemplates = [
  'Love this! 😍',
  'This is amazing! 🔥',
  'Great content as always! ✨',
  'So inspiring! 💪',
  'This made my day! 🙌',
  'Absolutely stunning! 📸',
];

export default function EngagementBot() {
  const [features, setFeatures] = useState(automationFeatures);
  const [globalEnabled, setGlobalEnabled] = useState(true);
  const [speedMode, setSpeedMode] = useState('normal');

  const toggleFeature = (id: string) => {
    setFeatures(features.map(f => {
      if (f.id === id) {
        const newStatus = f.status === 'active' ? 'paused' : 'active';
        return { ...f, status: newStatus };
      }
      return f;
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Engagement Bot 🤖</h1>
          <p className="text-gray-500">Automate your Instagram engagement safely</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Bot Status:</span>
          <button
            onClick={() => setGlobalEnabled(!globalEnabled)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              globalEnabled 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : 'bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            {globalEnabled ? '✓ Active' : 'Paused'}
          </button>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="card bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">Use Responsibly</h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
              Automation should complement your organic strategy, not replace it. We recommend keeping actions within safe limits to avoid Instagram restrictions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
            <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                style={{ width: `${(parseInt(stat.value) / parseInt(stat.limit)) * 100}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">Limit: {stat.limit}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Automation Features */}
        <div className="card lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Automation Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`p-4 rounded-xl border-2 transition-all ${
                  feature.status === 'active'
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/10'
                    : feature.status === 'paused'
                    ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 className="font-medium text-sm">{feature.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{feature.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFeature(feature.id)}
                    disabled={!globalEnabled}
                    className={`w-12 h-6 rounded-full transition-all relative ${
                      feature.status === 'active'
                        ? 'bg-green-500'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <span 
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                        feature.status === 'active' ? 'right-1' : 'left-1'
                      }`}
                    />
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    feature.status === 'active' ? 'bg-green-500 animate-pulse' :
                    feature.status === 'paused' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`} />
                  <span className="text-xs capitalize text-gray-500">{feature.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Log */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">📋 Activity Log</h2>
          <div className="space-y-3 max-h-[400px] overflow-y-auto scrollbar-hide">
            {activityLog.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800"
              >
                <span className="text-xl">{activity.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-pink-600">{activity.target}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Speed Settings */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">⚡ Speed Settings</h2>
          <p className="text-sm text-gray-500 mb-4">Choose how fast the bot performs actions</p>
          <div className="space-y-3">
            {[
              { id: 'slow', label: 'Slow', desc: 'Safest option, 1-2 actions/min', icon: '🐢' },
              { id: 'normal', label: 'Normal', desc: 'Balanced, 3-5 actions/min', icon: '🚶' },
              { id: 'fast', label: 'Fast', desc: 'Higher risk, 6-8 actions/min', icon: '🏃' },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSpeedMode(mode.id)}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  speedMode === mode.id
                    ? 'border-2 border-pink-500 bg-pink-50 dark:bg-pink-900/10'
                    : 'border border-gray-200 dark:border-gray-700 hover:border-pink-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{mode.icon}</span>
                  <div>
                    <p className="font-medium text-sm">{mode.label}</p>
                    <p className="text-xs text-gray-500">{mode.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Comment Templates */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">💬 Comment Templates</h2>
          <p className="text-sm text-gray-500 mb-4">Comments the bot will randomly use</p>
          <div className="space-y-2 mb-4">
            {commentTemplates.map((comment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800"
              >
                <span className="text-sm">{comment}</span>
                <button className="text-xs text-red-500 hover:text-red-600">Remove</button>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              className="input-field flex-1"
              placeholder="Add new comment template..."
            />
            <button className="btn-primary px-4">Add</button>
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">🎯 Target Audience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Target Hashtags</label>
            <textarea
              className="input-field min-h-[100px] resize-none"
              placeholder="#fitness, #wellness, #healthy..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Target Accounts</label>
            <textarea
              className="input-field min-h-[100px] resize-none"
              placeholder="@competitor1, @influencer2..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Target Locations</label>
            <textarea
              className="input-field min-h-[100px] resize-none"
              placeholder="New York, Los Angeles, London..."
            />
          </div>
        </div>
        <button className="btn-primary mt-4">Save Target Settings</button>
      </div>
    </div>
  );
}
