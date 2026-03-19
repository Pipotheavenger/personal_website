import { experience, portfolioItems } from '@/lib/content';

export function Experience() {
  const combined = [...experience, ...portfolioItems];

  return (
    <section id="experience" className="section-padding">
      <div className="container-wide">
        <div className="mb-14 md:mb-18">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500 font-medium mb-2">
            Track record
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-stone-900">
            Experience & Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {combined.map((item) => {
            const isExperience = 'impact' in item;

            const title = item.title;
            const body = isExperience ? item.impact : item.description;
            const meta = isExperience ? item.period : item.year;
            const chips = isExperience ? item.tags : item.stack;
            const tag = isExperience ? 'Experience' : item.tag;

            return (
              <article
                key={`${tag}-${title}`}
                className="group rounded-2xl border border-stone-200 bg-white p-6 md:p-8 hover:border-stone-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-xl text-stone-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">{body}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-sm text-stone-500">{meta}</span>
                    <span className="rounded-full bg-stone-900 px-3 py-1 text-xs font-semibold text-stone-50 uppercase tracking-wider">
                      {tag}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
