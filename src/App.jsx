import React from 'react';
import Header from './components/Header';
import HeroCover from './components/HeroCover';
import Deliverables from './components/Deliverables';
import GlassSummary from './components/GlassSummary';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />
      <main>
        <HeroCover />
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <Deliverables />
          <GlassSummary />
        </div>
      </main>
      <footer className="mt-16 border-t border-neutral-200/60 bg-white/70 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-neutral-500">© {new Date().getFullYear()} Webards — Portail Client</div>
      </footer>
    </div>
  );
}
