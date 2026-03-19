import { certifications } from '@/lib/content';

const basePath = 'assets/diplomas';

export function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-stone-100/40">
      <div className="container-wide">
        <div className="mb-14 md:mb-18 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500 font-medium mb-2">
              Education
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-stone-900">
              Certifications & Diplomas
            </h2>
          </div>
          <p className="text-stone-600 max-w-md text-sm md:text-base">
            University diplomas and certifications across data, AI, and technical tools.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((item) => (
            <a
              key={item.title}
              href={`${basePath}/${item.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-stone-200 bg-white p-6 hover:border-stone-300 hover:shadow-md transition-all duration-200 group"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                {item.category}
              </span>
              <h3 className="font-display font-bold text-lg text-stone-900 mt-2 group-hover:underline">
                {item.title}
              </h3>
              <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
