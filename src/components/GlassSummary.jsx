import React from 'react';

export default function GlassSummary() {
  return (
    <section className="mt-14" aria-labelledby="resume-projet">
      <div className="rounded-2xl border border-white/30 bg-white/60 p-6 shadow-sm backdrop-blur-xl">
        <h3 id="resume-projet" className="text-xl font-semibold text-neutral-900">Résumé minimaliste</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 text-sm text-neutral-700 md:grid-cols-3">
          <div className="rounded-xl border border-white/40 bg-white/60 p-4 backdrop-blur-xl">
            <div className="text-neutral-500">Référence projet</div>
            <div className="mt-1 font-medium text-neutral-900">WEB-CLT-2025-08</div>
          </div>
          <div className="rounded-xl border border-white/40 bg-white/60 p-4 backdrop-blur-xl">
            <div className="text-neutral-500">Chef de projet</div>
            <div className="mt-1 font-medium text-neutral-900">Équipe Webards</div>
          </div>
          <div className="rounded-xl border border-white/40 bg-white/60 p-4 backdrop-blur-xl">
            <div className="text-neutral-500">Prochaine étape</div>
            <div className="mt-1 font-medium text-neutral-900">Validation contenu Landing Page</div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-600">
            Note: Cette version supprime les icônes "Design & Copywriting" et remplace "Page des ventes premium" par
            "Landing Page". L'échéance globale est fixée au 28 Oct 2025. Aucun message de bienvenue nominatif n'est affiché.
          </p>
          <div className="flex gap-3">
            <a
              id="contact"
              href="mailto:contact@webards.example"
              className="rounded-lg border border-neutral-300/80 bg-white/70 px-4 py-2 text-sm font-medium text-neutral-900 backdrop-blur-md transition hover:bg-white"
            >
              Écrire au support
            </a>
            <a
              href="#overview"
              className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Haut de page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
