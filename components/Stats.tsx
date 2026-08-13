const stats = [
  { value: '1,000+', label: 'Client orders delivered' },
  { value: '100K+', label: 'Verified B2B contacts built' },
  { value: '2020', label: 'Delivering outbound since' },
];

export default function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="section">
      <div className="container-px">
        <h2 id="stats-heading" className="sr-only">Results in numbers</h2>
        <div className="grid gap-px overflow-hidden rounded-2xl bg-neutral-200 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center bg-white px-6 py-10 text-center"
            >
              <span className="text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">
                {s.value}
              </span>
              <span className="mt-2 text-sm font-medium text-neutral-600">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
