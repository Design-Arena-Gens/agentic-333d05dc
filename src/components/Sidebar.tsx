'use client';

import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'content', label: 'Content Creator', icon: '✨' },
  { id: 'scheduler', label: 'Post Scheduler', icon: '📅' },
  { id: 'analytics', label: 'Analytics', icon: '📈' },
  { id: 'hashtags', label: 'Hashtag Generator', icon: '#️⃣' },
  { id: 'captions', label: 'Caption Writer', icon: '✍️' },
  { id: 'engagement', label: 'Engagement Bot', icon: '🤖' },
  { id: 'audience', label: 'Audience Insights', icon: '👥' },
  { id: 'competitors', label: 'Competitor Analysis', icon: '🔍' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
];

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="sidebar w-64 min-h-screen p-4 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 px-4">
        <div className="w-10 h-10 rounded-xl instagram-gradient flex items-center justify-center">
          <span className="text-white text-xl">📸</span>
        </div>
        <div>
          <h1 className="font-bold text-lg instagram-gradient-text">InstaAgent</h1>
          <p className="text-xs text-gray-500">AI Assistant</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`sidebar-item w-full text-left ${
              activeTab === item.id ? 'active' : ''
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Profile Section */}
      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            U
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Your Account</p>
            <p className="text-xs text-gray-500">@username</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
