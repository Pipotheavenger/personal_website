import { about } from '@/lib/content';

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-stone-900 leading-tight">
              {about.heading}
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            {about.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-stone-600 text-lg leading-relaxed max-w-2xl"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
