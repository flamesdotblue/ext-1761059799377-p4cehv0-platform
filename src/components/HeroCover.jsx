import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section id="overview" className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil for readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/10" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 md:px-8">
        <div className="max-w-2xl rounded-2xl border border-white/30 bg-white/60 p-6 shadow-lg backdrop-blur-xl">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Portail Client — Webards
          </h1>
          <p className="mt-3 text-neutral-700">
            Espace projet moderne et minimaliste. Couleurs sobres gris et blanc nacré, interactions douces.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#deliverables"
              className="pointer-events-auto rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
            >
              Accéder aux livrables
            </a>
            <a
              href="#contact"
              className="pointer-events-auto rounded-lg border border-neutral-300/80 bg-white/70 px-4 py-2 text-sm font-medium text-neutral-900 backdrop-blur-md transition hover:bg-white"
            >
              Contacter l'équipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
