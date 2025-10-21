import React from 'react';

const deliverables = [
  {
    title: 'Landing Page',
    description:
      "Conception et intégration d'une landing page performante (SEO + responsive).",
    status: 'En cours',
    due: '28 Oct 2025',
  },
  {
    title: 'Micro-copies UX',
    description:
      "Rédaction de micro-textes (CTA, formulaires, onboarding) pour optimiser la conversion.",
    status: 'À valider',
    due: '28 Oct 2025',
  },
  {
    title: 'Kit composant UI',
    description:
      'Petite librairie de composants réutilisables (boutons, badges, cartes) en Tailwind.',
    status: 'Planifié',
    due: '28 Oct 2025',
  },
];

export default function Deliverables() {
  return (
    <section id="deliverables" className="-mt-10 scroll-mt-24 pt-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Vos livrables</h2>
          <p className="mt-1 text-sm text-neutral-600">
            Aperçu des éléments prévus pour votre projet. Date cible mise à jour au 28 Oct 2025.
          </p>
        </div>
        <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white">V2</span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {deliverables.map((item) => (
          <article
            key={item.title}
            className="group rounded-2xl border border-white/30 bg-white/60 p-5 shadow-sm backdrop-blur-xl transition hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-medium text-neutral-900">{item.title}</h3>
              <span className="whitespace-nowrap rounded-full border border-neutral-300/70 bg-white/70 px-2.5 py-1 text-xs text-neutral-700">
                {item.status}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.description}</p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="text-neutral-600">
                Échéance
                <span className="ml-2 rounded-md bg-neutral-100 px-2 py-0.5 text-neutral-800">{item.due}</span>
              </div>
              <a
                href="#"
                className="rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-neutral-800"
              >
                Ouvrir
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
