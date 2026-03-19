import Image from 'next/image';
import Link from 'next/link';
import {
  hobbiesHero,
  hobbiesGallery,
} from '@/lib/content';

const basePath = '/assets';

export const metadata = {
  title: 'Hobbies | Sebastián Valencia',
  description:
    'Beyond the Code, Living with Purpose. A photo journal from labs, conferences, competitions, and travel.',
};

export default function HobbiesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero: título centrado + CTA */}
      <div className="pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-stone-900 leading-tight">
            <span className="italic font-serif text-stone-700">{hobbiesHero.titleSerif}</span>
            <br />
            <span>{hobbiesHero.titleSans}</span>
          </h1>
          <p className="mt-6 text-stone-600 text-lg md:text-xl font-light max-w-2xl mx-auto">
            {hobbiesHero.subtitle}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white uppercase tracking-wider hover:bg-stone-800 transition-colors mt-8"
          >
            Get in touch
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-700 text-white">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Photo journal */}
      <div className="container-wide pb-24 md:pb-32">
        <div className="mb-10 md:mb-12 text-center">
          <div className="h-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbiesGallery.map((item) => (
            <article
              key={item.image}
              className="rounded-3xl overflow-hidden border border-stone-200 bg-white hover:border-stone-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="relative aspect-[4/3] bg-stone-200">
                <Image
                  src={`${basePath}/${item.image}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-stone-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Volver al inicio */}
      <div className="container-wide pb-16 text-center">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900 transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
