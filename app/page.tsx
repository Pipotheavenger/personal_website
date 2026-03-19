import { Hero } from '@/components/Hero';
import { Metrics } from '@/components/Metrics';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Certifications } from '@/components/Certifications';
import { NewsHighlight } from '@/components/NewsHighlight';
import { Contact } from '@/components/Contact';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <NewsHighlight />
      <section className="section-padding border-t border-stone-200/80">
        <div className="container-wide text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500 font-medium mb-2">
            Beyond work
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-stone-900 mb-4">
            Hobbies
          </h2>
          <p className="text-stone-600 max-w-md mx-auto mb-6">
            A photo journal from labs, conferences, and travel.
          </p>
          <Link
            href="/hobbies"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-stone-50 uppercase tracking-wider hover:bg-stone-800 transition-colors"
          >
            View gallery
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-700 text-stone-100">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </span>
          </Link>
        </div>
      </section>
      <Contact />
    </>
  );
}
