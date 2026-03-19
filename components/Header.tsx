import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-stone-200/80">
      <div className="container-wide flex items-center justify-between h-16 md:h-18 px-6 md:px-8">
        <Link
          href="/"
          className="font-display font-bold text-xl tracking-tight text-stone-900 flex items-center gap-1.5"
        >
          <span>Sebastián Valencia</span>
          <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
        </Link>
      </div>
    </header>
  );
}
