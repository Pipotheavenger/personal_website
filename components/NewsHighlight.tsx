import Image from 'next/image';
import Link from 'next/link';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const imageSrc = `${BASE_PATH}/assets/sinfo.png`;
const sourceUrl =
  'https://ingenieria.uniandes.edu.co/es/noticias/sinfonia-logra-segundo-lugar-robocup-2023';

export function NewsHighlight() {
  return (
    <section className="section-padding bg-stone-100/40">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-stone-200 border border-stone-200 shadow-[0_24px_60px_rgba(12,10,9,0.10)]">
              <Image
                src={imageSrc}
                alt="SinfonIA Uniandes at RoboCup 2023"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500 font-medium mb-2">
              Featured news
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-stone-900 leading-tight">
              SinfonIA earned 2nd place at RoboCup 2023
            </h2>
            <p className="mt-4 text-stone-600 text-base md:text-lg leading-relaxed max-w-2xl">
              In Bordeaux, France, the SinfonIA Uniandes team represented Colombia
              at RoboCup—one of the largest international robotics competitions—and
              achieved second place in the <span className="font-semibold">STANDARD Social Platform</span>{' '}
              subcategory.
            </p>

            <ul className="mt-6 space-y-3 text-stone-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-900 shrink-0" />
                <span>
                  Competed in the domestic/service robotics league, focused on
                  real-world assistance tasks.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-900 shrink-0" />
                <span>
                  Work integrated <span className="font-medium">ROS</span>, navigation, HRI,
                  computer vision, and NLP.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-stone-900 shrink-0" />
                <span>
                  The robot executed end-to-end tasks like taking orders, delivering
                  items, and interacting with guests under pressure.
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-stone-50 uppercase tracking-wider hover:bg-stone-800 transition-colors"
              >
                Read the article
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-700 text-stone-100">
                  <ArrowIcon />
                </span>
              </Link>
              <p className="text-xs uppercase tracking-widest text-stone-500">
                Source: Uniandes Engineering (Sep 2023)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

