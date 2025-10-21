import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-neutral-900" aria-hidden="true" />
          <span className="font-semibold tracking-tight text-neutral-900">Webards</span>
        </div>
        <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
          <a href="#overview" className="hover:text-neutral-900">Vue d'ensemble</a>
          <a href="#deliverables" className="hover:text-neutral-900">Vos livrables</a>
          <a href="#contact" className="hover:text-neutral-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}
