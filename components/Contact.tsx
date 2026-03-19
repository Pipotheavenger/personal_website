import { site } from '@/lib/content';

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-stone-900 text-stone-100">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-400 font-medium mb-2">
            Collaboration
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-white leading-tight mb-6">
            Let’s work together
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed mb-10">
            If you’re looking for data-driven solutions, ML models, or data engineering
            for your business, message me.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 uppercase tracking-wider hover:bg-stone-100 transition-colors"
            >
              Email
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-stone-500 px-6 py-3 text-sm font-semibold text-stone-100 uppercase tracking-wider hover:border-stone-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-8 text-stone-500 text-sm">
            {site.email}
          </p>
        </div>
      </div>
    </section>
  );
}
