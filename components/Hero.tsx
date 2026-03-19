import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/content';

const profileImage = 'assets/header.png';

export function Hero() {
  return (
    <section className="section-padding pt-28 md:pt-36">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-500 font-medium">
              Hi, I’m
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-stone-900 leading-[1.05]">
              <span className="block">{site.name}</span>
              <span className="block italic font-serif font-semibold text-stone-600 mt-2 md:mt-3">
                AI Engineer & Data Scientist
              </span>
            </h1>
            <p className="text-sm md:text-base tracking-widest text-stone-500 font-medium font-credentials">
              PhD Candidate, MSc
            </p>
            <p className="text-lg md:text-xl text-stone-600 max-w-lg leading-relaxed">
              {site.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-6 py-3 text-sm font-semibold text-white uppercase tracking-wider hover:bg-[#084E96] transition-colors"
              >
                LinkedIn
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#084E96] text-white">
                  <ArrowIcon />
                </span>
              </Link>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(
                  'Project inquiry',
                )}&body=${encodeURIComponent('Hi Sebastián,\n\n')}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-stone-900 px-6 py-3 text-sm font-semibold text-stone-900 uppercase tracking-wider hover:bg-stone-900 hover:text-stone-50 transition-colors"
              >
                Email me
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-stone-900 ring-1 ring-stone-200">
                  <GmailIcon />
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 hidden lg:block" />

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[34rem]">
              <div
                aria-hidden
                className="absolute -inset-10 bg-[radial-gradient(closest-side,rgba(120,113,108,0.22),rgba(231,229,228,0.16),transparent_72%)] blur-2xl"
              />

              <div className="relative px-6 py-8 md:px-10 md:py-10">
                {/* Subtle neutral halo (no visible circle) */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(214,211,209,0.40),rgba(245,245,244,0.28),transparent_70%)] blur-2xl md:h-[32rem] md:w-[32rem] lg:h-[36rem] lg:w-[36rem]"
                />

                {/* Portrait floating "outside" */}
                <div className="relative mx-auto h-[22rem] w-[22rem] md:h-[28rem] md:w-[28rem] lg:h-[31rem] lg:w-[31rem]">
                  <Image
                    src={profileImage}
                    alt={`${site.name} - Professional photo`}
                    fill
                    className="object-contain object-center drop-shadow-[0_20px_55px_rgba(12,10,9,0.22)]"
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 416px, 448px"
                    priority
                  />
                </div>
              </div>
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

function GmailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M4.5 7.5V18a1.5 1.5 0 0 0 1.5 1.5h1.5V11.2L12 14.8l4.5-3.6v8.3H18A1.5 1.5 0 0 0 19.5 18V7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4.8 7.2 12 12.8l7.2-5.6"
        stroke="#EA4335"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 11.2V19.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M16.5 11.2V19.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
