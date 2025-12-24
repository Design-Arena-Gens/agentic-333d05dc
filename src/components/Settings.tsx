'use client';

import React, { useState } from 'react';

export default function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    weeklyReport: true,
    engagementAlerts: true,
    followerMilestones: true,
  });

  const [autoposting, setAutoposting] = useState({
    enabled: true,
    timezone: 'America/Los_Angeles',
    defaultTime: '18:00',
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Settings ⚙️</h1>
        <p className="text-gray-500">Manage your InstaAgent preferences</p>
      </div>

      {/* Account Settings */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">👤 Account</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
              U
            </div>
            <div className="flex-1">
              <p className="font-semibold">@username</p>
              <p className="text-sm text-gray-500">Connected Instagram Account</p>
            </div>
            <button className="btn-secondary text-sm">
              Switch Account
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Display Name</label>
              <input type="text" className="input-field" defaultValue="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="input-field" defaultValue="you@example.com" />
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Connection */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">📸 Instagram Connection</h2>
        <div className="p-4 rounded-xl border-2 border-green-500 bg-green-50 dark:bg-green-900/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-medium">Connected</p>
                <p className="text-sm text-gray-500">Last synced: Just now</p>
              </div>
            </div>
            <button className="text-sm text-red-500 font-medium hover:text-red-600">
              Disconnect
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          InstaAgent uses the official Instagram API. Your credentials are never stored on our servers.
        </p>
      </div>

      {/* Notifications */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">🔔 Notifications</h2>
        <div className="space-y-4">
          {[
            { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
            { key: 'push', label: 'Push Notifications', desc: 'Browser push notifications' },
            { key: 'weeklyReport', label: 'Weekly Reports', desc: 'Get weekly performance summaries' },
            { key: 'engagementAlerts', label: 'Engagement Alerts', desc: 'Alert when posts perform well' },
            { key: 'followerMilestones', label: 'Follower Milestones', desc: 'Celebrate follower goals' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
              <div>
                <p className="font-medium text-sm">{item.label}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
              <button
                onClick={() => setNotifications({
                  ...notifications,
                  [item.key]: !notifications[item.key as keyof typeof notifications]
                })}
                className={`w-12 h-6 rounded-full transition-all relative ${
                  notifications[item.key as keyof typeof notifications]
                    ? 'bg-pink-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              >
                <span 
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                    notifications[item.key as keyof typeof notifications] ? 'right-1' : 'left-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Auto-posting Settings */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">📅 Auto-posting</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
            <div>
              <p className="font-medium text-sm">Enable Auto-posting</p>
              <p className="text-xs text-gray-500">Automatically post scheduled content</p>
            </div>
            <button
              onClick={() => setAutoposting({ ...autoposting, enabled: !autoposting.enabled })}
              className={`w-12 h-6 rounded-full transition-all relative ${
                autoposting.enabled ? 'bg-pink-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span 
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                  autoposting.enabled ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Timezone</label>
              <select 
                className="input-field"
                value={autoposting.timezone}
                onChange={(e) => setAutoposting({ ...autoposting, timezone: e.target.value })}
              >
                <option value="America/Los_Angeles">Pacific Time (PT)</option>
                <option value="America/Denver">Mountain Time (MT)</option>
                <option value="America/Chicago">Central Time (CT)</option>
                <option value="America/New_York">Eastern Time (ET)</option>
                <option value="Europe/London">London (GMT)</option>
                <option value="Europe/Paris">Paris (CET)</option>
                <option value="Asia/Tokyo">Tokyo (JST)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Default Post Time</label>
              <input 
                type="time" 
                className="input-field"
                value={autoposting.defaultTime}
                onChange={(e) => setAutoposting({ ...autoposting, defaultTime: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* AI Settings */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">🤖 AI Preferences</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Default Writing Style</label>
            <select className="input-field">
              <option>Professional</option>
              <option>Casual & Fun</option>
              <option>Inspirational</option>
              <option>Witty & Humorous</option>
              <option>Educational</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Content Language</label>
            <select className="input-field">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Portuguese</option>
              <option>Italian</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Brand Keywords (for AI context)</label>
            <input 
              type="text" 
              className="input-field" 
              placeholder="e.g., sustainable, luxury, minimalist"
            />
            <p className="text-xs text-gray-500 mt-1">These words help AI understand your brand voice</p>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="card border-red-200 dark:border-red-800">
        <h2 className="text-lg font-semibold mb-4 text-red-600">⚠️ Danger Zone</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-red-50 dark:bg-red-900/10">
            <div>
              <p className="font-medium text-sm">Delete All Data</p>
              <p className="text-xs text-gray-500">Permanently delete all your scheduled posts and settings</p>
            </div>
            <button className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600">
              Delete Data
            </button>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl bg-red-50 dark:bg-red-900/10">
            <div>
              <p className="font-medium text-sm">Delete Account</p>
              <p className="text-xs text-gray-500">Permanently delete your InstaAgent account</p>
            </div>
            <button className="px-4 py-2 rounded-lg border border-red-500 text-red-500 text-sm font-medium hover:bg-red-50">
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <button className="btn-secondary">Cancel</button>
        <button className="btn-primary">Save Changes</button>
      </div>
    </div>
  );
}
