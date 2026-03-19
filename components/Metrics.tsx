import { metrics } from '@/lib/content';

export function Metrics() {
  return (
    <section className="py-12 md:py-16 border-y border-stone-200 bg-stone-100/50">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <p className="font-display font-bold text-3xl md:text-4xl text-stone-900 tracking-tight">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-stone-500 uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
