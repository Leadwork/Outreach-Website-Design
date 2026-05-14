const labels = [
  'Marketing Agencies',
  'B2B SaaS',
  'Consulting Firms',
  'Recruiting Firms',
  'Fintech Startups',
  'IT Services',
  'Cybersecurity',
  'AI Companies',
];

export default function TrustedBy() {
  return (
    <section aria-labelledby="trusted-heading" className="border-y border-neutral-200 bg-neutral-50 py-10">
      <div className="container-px">
        <h2
          id="trusted-heading"
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500"
        >
          Trusted by growth teams in
        </h2>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {labels.map((l) => (
            <li
              key={l}
              className="text-sm font-semibold tracking-wide text-neutral-700 sm:text-base"
            >
              {l}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
