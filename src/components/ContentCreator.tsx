'use client';

import React, { useState } from 'react';

const contentTypes = [
  { id: 'post', label: 'Feed Post', icon: '📷', description: 'Single image or carousel' },
  { id: 'reel', label: 'Reel', icon: '🎬', description: 'Short video content' },
  { id: 'story', label: 'Story', icon: '⭕', description: '24-hour content' },
  { id: 'carousel', label: 'Carousel', icon: '📚', description: 'Multiple images' },
];

const templates = [
  { id: 1, name: 'Product Showcase', category: 'Business', preview: '🛍️' },
  { id: 2, name: 'Behind the Scenes', category: 'Lifestyle', preview: '🎥' },
  { id: 3, name: 'Quote of the Day', category: 'Inspiration', preview: '💭' },
  { id: 4, name: 'Tutorial/How-to', category: 'Educational', preview: '📝' },
  { id: 5, name: 'Before & After', category: 'Transformation', preview: '✨' },
  { id: 6, name: 'User Testimonial', category: 'Social Proof', preview: '⭐' },
];

export default function ContentCreator() {
  const [selectedType, setSelectedType] = useState('post');
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent(`✨ Here's your AI-generated content idea:

📸 Visual Concept:
Create a ${selectedType} featuring warm, cozy vibes perfect for the holiday season. Use natural lighting and include seasonal elements like fairy lights or festive decorations.

📝 Caption:
"${prompt || 'Making memories that last a lifetime'} ✨

Sometimes the best moments are the ones we didn't plan for. Here's to embracing the unexpected and finding joy in the little things. 🌟

What's your favorite unexpected moment this year? Share below! 👇

#MomentsWorthSharing #AuthenticContent #${new Date().getFullYear()}Vibes #ContentCreator #InstagramGrowth"

🎯 Best Posting Time: 6:00 PM - 8:00 PM (Based on your audience activity)

💡 Pro Tips:
• Use a mix of popular and niche hashtags
• Reply to comments within the first hour
• Share to your story for extra reach`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Content Creator ✨</h1>
        <p className="text-gray-500">Let AI help you create engaging Instagram content</p>
      </div>

      {/* Content Type Selection */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Select Content Type</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contentTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedType === type.id
                  ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-pink-300'
              }`}
            >
              <span className="text-3xl block mb-2">{type.icon}</span>
              <h3 className="font-medium text-sm">{type.label}</h3>
              <p className="text-xs text-gray-500 mt-1">{type.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* AI Content Generator */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">🤖 AI Content Generator</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Describe your content idea</label>
              <textarea
                className="input-field min-h-[120px] resize-none"
                placeholder="E.g., Holiday gift guide for skincare lovers, featuring our best-selling products..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tone</label>
              <select className="input-field">
                <option>Professional</option>
                <option>Casual & Fun</option>
                <option>Inspirational</option>
                <option>Educational</option>
                <option>Witty & Humorous</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Target Audience</label>
              <select className="input-field">
                <option>General</option>
                <option>Young Adults (18-24)</option>
                <option>Millennials (25-34)</option>
                <option>Professionals</option>
                <option>Parents</option>
              </select>
            </div>
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <span className="animate-spin">⚡</span>
                  Generating...
                </>
              ) : (
                <>
                  <span>✨</span>
                  Generate Content
                </>
              )}
            </button>
          </div>
        </div>

        {/* Generated Content Preview */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">📝 Generated Content</h2>
          {generatedContent ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 whitespace-pre-wrap text-sm">
                {generatedContent}
              </div>
              <div className="flex gap-3">
                <button className="btn-primary flex-1">
                  Use This Content
                </button>
                <button className="btn-secondary">
                  Regenerate
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <span className="text-4xl mb-3">🎨</span>
              <p className="text-sm">Your generated content will appear here</p>
            </div>
          )}
        </div>
      </div>

      {/* Templates */}
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">📋 Content Templates</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {templates.map((template) => (
            <button
              key={template.id}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-pink-300 hover:bg-pink-50 dark:hover:bg-pink-900/10 transition-all"
            >
              <span className="text-3xl block mb-2">{template.preview}</span>
              <h3 className="font-medium text-sm">{template.name}</h3>
              <p className="text-xs text-gray-500">{template.category}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
