'use client';

import React, { useState } from 'react';

const toneOptions = [
  { id: 'professional', label: 'Professional', emoji: '💼' },
  { id: 'casual', label: 'Casual & Fun', emoji: '😎' },
  { id: 'inspirational', label: 'Inspirational', emoji: '✨' },
  { id: 'witty', label: 'Witty & Humorous', emoji: '😄' },
  { id: 'educational', label: 'Educational', emoji: '📚' },
  { id: 'emotional', label: 'Emotional', emoji: '❤️' },
];

const captionTemplates = [
  { name: 'Product Launch', template: '🚀 Introducing [Product Name]!\n\n[Benefit 1]\n[Benefit 2]\n[Benefit 3]\n\nAvailable now! Link in bio 🔗\n\n#newlaunch #[niche]' },
  { name: 'Behind the Scenes', template: '📸 Behind the scenes of [Project/Day]!\n\n[Story or insight]\n\nWhat would you like to see more of? 👇\n\n#behindthescenes #dayinmylife' },
  { name: 'Motivational', template: '💪 [Motivational quote or statement]\n\n[Personal story or reflection]\n\nRemember: [Key takeaway]\n\nDouble tap if you agree! ❤️\n\n#motivation #mindset' },
  { name: 'Question Post', template: '🤔 [Thought-provoking question]?\n\n[Context or your opinion]\n\nI&apos;d love to hear your thoughts! Drop a comment below 👇\n\n#community #discussion' },
];

const savedCaptions = [
  { id: 1, title: 'Holiday Sale Announcement', preview: '🎄 Our biggest sale of the year...', date: '2024-12-20' },
  { id: 2, title: 'Customer Testimonial', preview: '💬 "This product changed my...', date: '2024-12-18' },
  { id: 3, title: 'Team Introduction', preview: '👋 Meet the amazing people behind...', date: '2024-12-15' },
];

export default function CaptionWriter() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('casual');
  const [includeEmojis, setIncludeEmojis] = useState(true);
  const [includeCTA, setIncludeCTA] = useState(true);
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setIsGenerating(true);
    
    setTimeout(() => {
      const captions = {
        professional: `Introducing our latest innovation in ${topic}. 

We've spent months perfecting every detail to deliver exceptional quality that exceeds expectations.

Key highlights:
✓ Premium quality materials
✓ Innovative design
✓ Sustainable practices

Ready to elevate your experience? Visit the link in our bio to learn more.

#${topic.toLowerCase().replace(/\s+/g, '')} #innovation #quality #business`,
        
        casual: `Okay but can we talk about ${topic}?! 😍

Honestly, this has been such a game-changer for me lately. Like, why didn't I discover this sooner?? 

Who else is obsessed? Drop a 🙋 in the comments!

#${topic.toLowerCase().replace(/\s+/g, '')} #obsessed #lifestyle #vibes`,
        
        inspirational: `✨ "${topic.charAt(0).toUpperCase() + topic.slice(1)} isn't just a goal, it's a journey."

Every step forward is progress, no matter how small. Remember that your path is unique, and comparison is the thief of joy.

Today's reminder: You are capable of amazing things. Keep going. 💫

What's one small step you're taking today toward your goals? Share below! 👇

#${topic.toLowerCase().replace(/\s+/g, '')} #motivation #inspiration #growth`,
        
        witty: `POV: You finally figured out ${topic} 🙃

*chef's kiss* 👨‍🍳💋

Plot twist: It only took me [insert embarrassingly long time] to get here 😂

Tell me I'm not the only one... please... 🥺

#${topic.toLowerCase().replace(/\s+/g, '')} #relatable #funny #mood`,
        
        educational: `📚 ${topic.charAt(0).toUpperCase() + topic.slice(1)} 101: Everything you need to know

Let's break it down:

1️⃣ Start with the basics
2️⃣ Practice consistently 
3️⃣ Don't be afraid to make mistakes
4️⃣ Keep learning and adapting
5️⃣ Share your knowledge with others

Save this post for later! 🔖

Questions? Drop them below and I'll answer! 👇

#${topic.toLowerCase().replace(/\s+/g, '')} #education #tips #learnontiktok`,
        
        emotional: `💭 Can we have a real moment about ${topic}?

Sometimes the most beautiful things come from the hardest seasons. And that's okay.

If you're going through something right now, I want you to know: You're not alone. This too shall pass. ❤️

Sending love to everyone who needs it today. 🤗

#${topic.toLowerCase().replace(/\s+/g, '')} #reallife #vulnerable #mentalhealth`,
      };

      let caption = captions[tone as keyof typeof captions] || captions.casual;
      
      if (!includeEmojis) {
        caption = caption.replace(/[\u{1F600}-\u{1F6FF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}|\u{1F900}-\u{1F9FF}|\u{1F1E0}-\u{1F1FF}|\u{1F191}-\u{1F251}|\u{1F004}|\u{1F0CF}|\u{1F170}-\u{1F171}|\u{1F17E}-\u{1F17F}|\u{1F18E}|\u{3030}|\u{2B50}|\u{2B55}|\u{2934}-\u{2935}|\u{25AA}-\u{25AB}|\u{25B6}|\u{25C0}|\u{25FB}-\u{25FE}|\u{00A9}|\u{00AE}|\u{2122}|\u{2139}|\u{231A}-\u{231B}|\u{2328}|\u{23CF}|\u{23E9}-\u{23F3}|\u{23F8}-\u{23FA}|\u{24C2}|\u{25AA}-\u{25AB}|\u{25B6}|\u{25C0}|\u{25FB}-\u{25FE}|\u{2600}-\u{2604}|\u{260E}|\u{2611}|\u{2614}-\u{2615}|\u{2618}|\u{261D}|\u{2620}|\u{2622}-\u{2623}|\u{2626}|\u{262A}|\u{262E}-\u{262F}|\u{2638}-\u{263A}|\u{2640}|\u{2642}|\u{2648}-\u{2653}|\u{2660}|\u{2663}|\u{2665}-\u{2666}|\u{2668}|\u{267B}|\u{267F}|\u{2692}-\u{2697}|\u{2699}|\u{269B}-\u{269C}|\u{26A0}-\u{26A1}|\u{26AA}-\u{26AB}|\u{26B0}-\u{26B1}|\u{26BD}-\u{26BE}|\u{26C4}-\u{26C5}|\u{26C8}|\u{26CE}-\u{26CF}|\u{26D1}|\u{26D3}-\u{26D4}|\u{26E9}-\u{26EA}|\u{26F0}-\u{26F5}|\u{26F7}-\u{26FA}|\u{26FD}|\u{2702}|\u{2705}|\u{2708}-\u{270D}|\u{270F}|\u{2712}|\u{2714}|\u{2716}|\u{271D}|\u{2721}|\u{2728}|\u{2733}-\u{2734}|\u{2744}|\u{2747}|\u{274C}|\u{274E}|\u{2753}-\u{2755}|\u{2757}|\u{2763}-\u{2764}|\u{2795}-\u{2797}|\u{27A1}|\u{27B0}|\u{27BF}|\u{2934}-\u{2935}|\u{2B05}-\u{2B07}|\u{2B1B}-\u{2B1C}|\u{2B50}|\u{2B55}|\u{3030}|\u{303D}|\u{3297}|\u{3299}]/gu, '');
      }

      if (!includeCTA) {
        caption = caption.replace(/Drop.*below.*|Share.*below.*|Questions\?.*|Save this post.*|Visit the link.*|Link in bio.*/gi, '');
      }

      setGeneratedCaption(caption.trim());
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCaption);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Caption Writer ✍️</h1>
        <p className="text-gray-500">Create engaging captions with AI assistance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Caption Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">What&apos;s your post about?</label>
                <textarea
                  className="input-field min-h-[100px] resize-none"
                  placeholder="E.g., launching our new summer collection, sharing a morning routine, announcing a giveaway..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Select Tone</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {toneOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setTone(option.id)}
                      className={`p-3 rounded-xl text-sm font-medium transition-all ${
                        tone === option.id
                          ? 'bg-pink-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 hover:bg-pink-100 dark:hover:bg-pink-900/20'
                      }`}
                    >
                      {option.emoji} {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeEmojis}
                    onChange={(e) => setIncludeEmojis(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                  />
                  <span className="text-sm">Include emojis 😊</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeCTA}
                    onChange={(e) => setIncludeCTA(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                  />
                  <span className="text-sm">Include call-to-action</span>
                </label>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating || !topic.trim()}
                className="btn-primary w-full"
              >
                {isGenerating ? '⚡ Writing...' : '✨ Generate Caption'}
              </button>
            </div>
          </div>

          {/* Templates */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">📋 Quick Templates</h2>
            <div className="space-y-3">
              {captionTemplates.map((template, index) => (
                <button
                  key={index}
                  onClick={() => setGeneratedCaption(template.template)}
                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-pink-50 dark:hover:bg-pink-900/10 text-left transition-colors"
                >
                  <p className="font-medium text-sm">{template.name}</p>
                  <p className="text-xs text-gray-500 mt-1 truncate">{template.template.substring(0, 60)}...</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Generated Caption</h2>
              {generatedCaption && (
                <span className="text-xs text-gray-500">
                  {generatedCaption.length} characters
                </span>
              )}
            </div>
            
            {generatedCaption ? (
              <div className="space-y-4">
                <textarea
                  className="input-field min-h-[300px] resize-none whitespace-pre-wrap"
                  value={generatedCaption}
                  onChange={(e) => setGeneratedCaption(e.target.value)}
                />
                <div className="flex gap-3">
                  <button onClick={copyToClipboard} className="btn-primary flex-1">
                    📋 Copy Caption
                  </button>
                  <button onClick={handleGenerate} className="btn-secondary">
                    🔄 Regenerate
                  </button>
                </div>
                <button className="w-full text-sm text-pink-600 font-medium hover:text-pink-700">
                  💾 Save to Library
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <span className="text-4xl mb-3">✏️</span>
                <p className="text-sm text-center">Your generated caption will appear here</p>
              </div>
            )}
          </div>

          {/* Saved Captions */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">📚 Saved Captions</h2>
            <div className="space-y-3">
              {savedCaptions.map((caption) => (
                <div
                  key={caption.id}
                  className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm">{caption.title}</p>
                    <span className="text-xs text-gray-500">{caption.date}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{caption.preview}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="card bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold mb-3">💡 Caption Writing Tips</h3>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li>• Hook readers with a strong first line - it&apos;s what shows before &quot;more&quot;</li>
          <li>• Use line breaks to make your caption easier to read</li>
          <li>• Include a clear call-to-action to boost engagement</li>
          <li>• Keep captions under 2,200 characters (Instagram limit)</li>
          <li>• Add relevant hashtags at the end or in comments</li>
        </ul>
      </div>
    </div>
  );
}
