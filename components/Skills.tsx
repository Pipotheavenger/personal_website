import { skills } from '@/lib/content';

export function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="section-padding bg-stone-100/40">
      <div className="container-wide">
        <div className="mb-14 md:mb-18">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500 font-medium mb-2">
            Expertise
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-stone-900">
            Skills & Tools
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {categories.map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-stone-800 font-medium text-base"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
