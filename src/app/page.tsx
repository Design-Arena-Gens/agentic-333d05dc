'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import ContentCreator from '@/components/ContentCreator';
import Scheduler from '@/components/Scheduler';
import Analytics from '@/components/Analytics';
import HashtagGenerator from '@/components/HashtagGenerator';
import CaptionWriter from '@/components/CaptionWriter';
import EngagementBot from '@/components/EngagementBot';
import AudienceInsights from '@/components/AudienceInsights';
import CompetitorAnalysis from '@/components/CompetitorAnalysis';
import Settings from '@/components/Settings';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'content':
        return <ContentCreator />;
      case 'scheduler':
        return <Scheduler />;
      case 'analytics':
        return <Analytics />;
      case 'hashtags':
        return <HashtagGenerator />;
      case 'captions':
        return <CaptionWriter />;
      case 'engagement':
        return <EngagementBot />;
      case 'audience':
        return <AudienceInsights />;
      case 'competitors':
        return <CompetitorAnalysis />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-white dark:bg-gray-900 shadow-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          transform lg:transform-none transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <Sidebar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsMobileMenuOpen(false);
          }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Top Bar - Mobile */}
          <div className="lg:hidden h-12 mb-4" />
          
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
