import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center pt-28">
      <div className="gradient-mesh" aria-hidden />
      <div className="container-px relative z-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-purple">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-neutral-600">
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/blog" className="btn-secondary">
            Read the blog
          </Link>
        </div>
      </div>
    </section>
  );
}
