'use client';

import React, { useState } from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const scheduledPosts = [
  { id: 1, title: 'Holiday Giveaway Announcement', date: '2024-12-24', time: '18:00', type: 'post', status: 'scheduled' },
  { id: 2, title: 'Customer Review Highlight', date: '2024-12-25', time: '10:00', type: 'reel', status: 'scheduled' },
  { id: 3, title: 'New Year Countdown', date: '2024-12-31', time: '20:00', type: 'story', status: 'draft' },
  { id: 4, title: 'Product Feature', date: '2024-12-26', time: '14:00', type: 'carousel', status: 'scheduled' },
];

const bestTimes = [
  { day: 'Monday', time: '6:00 PM', engagement: 'High' },
  { day: 'Tuesday', time: '7:00 PM', engagement: 'Very High' },
  { day: 'Wednesday', time: '12:00 PM', engagement: 'Medium' },
  { day: 'Thursday', time: '6:00 PM', engagement: 'High' },
  { day: 'Friday', time: '5:00 PM', engagement: 'High' },
  { day: 'Saturday', time: '11:00 AM', engagement: 'Very High' },
  { day: 'Sunday', time: '10:00 AM', engagement: 'Medium' },
];

export default function Scheduler() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const getPostsForDay = (day: number | null) => {
    if (!day) return [];
    const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return scheduledPosts.filter(post => post.date === dateStr);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Post Scheduler 📅</h1>
          <p className="text-gray-500">Plan and schedule your content in advance</p>
        </div>
        <button onClick={() => setShowModal(true)} className="btn-primary">
          + Schedule Post
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">
              {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1))}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                ←
              </button>
              <button
                onClick={() => setSelectedDate(new Date())}
                className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Today
              </button>
              <button
                onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1))}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                →
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {daysOfWeek.map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {generateCalendarDays().map((day, index) => {
              const posts = getPostsForDay(day);
              const isToday = day === new Date().getDate() && 
                selectedDate.getMonth() === new Date().getMonth() &&
                selectedDate.getFullYear() === new Date().getFullYear();
              
              return (
                <div
                  key={index}
                  className={`min-h-[80px] p-2 rounded-xl border ${
                    day
                      ? isToday
                        ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-pink-300 cursor-pointer'
                      : 'border-transparent'
                  }`}
                >
                  {day && (
                    <>
                      <span className={`text-sm font-medium ${isToday ? 'text-pink-600' : ''}`}>
                        {day}
                      </span>
                      {posts.length > 0 && (
                        <div className="mt-1 space-y-1">
                          {posts.map(post => (
                            <div
                              key={post.id}
                              className={`text-xs px-2 py-1 rounded-md truncate ${
                                post.type === 'post' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                post.type === 'reel' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                                post.type === 'story' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                                'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                              }`}
                            >
                              {post.time}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Best Times to Post */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">⏰ Best Times to Post</h2>
          <p className="text-sm text-gray-500 mb-4">Based on your audience activity</p>
          <div className="space-y-3">
            {bestTimes.map((time, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800"
              >
                <div>
                  <p className="font-medium text-sm">{time.day}</p>
                  <p className="text-xs text-gray-500">{time.time}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  time.engagement === 'Very High' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  time.engagement === 'High' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                  'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                }`}>
                  {time.engagement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Posts */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">📋 Upcoming Posts</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                <th className="pb-3 font-medium text-sm text-gray-500">Post</th>
                <th className="pb-3 font-medium text-sm text-gray-500">Date & Time</th>
                <th className="pb-3 font-medium text-sm text-gray-500">Type</th>
                <th className="pb-3 font-medium text-sm text-gray-500">Status</th>
                <th className="pb-3 font-medium text-sm text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {scheduledPosts.map(post => (
                <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="py-4">
                    <p className="font-medium text-sm">{post.title}</p>
                  </td>
                  <td className="py-4">
                    <p className="text-sm">{post.date}</p>
                    <p className="text-xs text-gray-500">{post.time}</p>
                  </td>
                  <td className="py-4">
                    <span className="text-sm capitalize">{post.type}</span>
                  </td>
                  <td className="py-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      post.status === 'scheduled' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                    }`}>
                      {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button className="text-sm text-blue-600 hover:text-blue-700">Edit</button>
                      <button className="text-sm text-red-600 hover:text-red-700">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Schedule Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-lg mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Schedule New Post</h2>
              <button onClick={() => setShowModal(false)} className="text-2xl hover:text-gray-600">×</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Post Title</label>
                <input type="text" className="input-field" placeholder="Enter post title..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input type="date" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <input type="time" className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Content Type</label>
                <select className="input-field">
                  <option>Feed Post</option>
                  <option>Reel</option>
                  <option>Story</option>
                  <option>Carousel</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Caption</label>
                <textarea className="input-field min-h-[100px] resize-none" placeholder="Write your caption..." />
              </div>
              <div className="flex gap-3 pt-4">
                <button className="btn-primary flex-1">Schedule Post</button>
                <button onClick={() => setShowModal(false)} className="btn-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
