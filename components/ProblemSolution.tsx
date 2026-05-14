import { X, Check } from 'lucide-react';
import Reveal from './Reveal';

const problems = [
  'Emails landing in spam folders nobody checks',
  'Generic "Hope this finds you well" copy that gets ignored',
  'Buying a list, sending once, hearing nothing back',
  'No infrastructure — one bounce kills the whole sender domain',
  'Sales reps drowning in unqualified noise instead of selling',
  'Tools, copy and lists all bought separately and badly stitched together',
];

const solutions = [
  'Multi-domain, warmed infrastructure with 90%+ inbox placement',
  'Hyper-personalised first lines based on real buying signals',
  'Sequenced, multi-channel outreach designed to compound replies',
  'Dedicated sending stack that protects your primary domain forever',
  'Only qualified, intent-checked meetings hit your sales calendar',
  'One agency, one team, one accountable outbound engine',
];

export default function ProblemSolution() {
  return (
    <section className="section bg-neutral-50">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">The outbound problem</span>
          <h2 className="h-section mt-4">
            Why Most B2B Outreach Fails — <span className="text-gradient">And How We Fix It</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Cold outreach isn't dead. Lazy outreach is. The difference between a pipeline that
            compounds and an inbox of crickets comes down to six things — and we fix every one.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-red-100 bg-white p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <X aria-hidden size={20} />
                </span>
                <h3 className="text-xl font-bold text-neutral-900">Where teams get stuck</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex gap-3 text-neutral-700">
                    <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-brand-purple/20 bg-white p-8 shadow-lg shadow-brand-purple/5">
              <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-gradient opacity-10 blur-3xl" />
              <div className="relative flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white">
                  <Check aria-hidden size={20} />
                </span>
                <h3 className="text-xl font-bold text-neutral-900">How Pro Lead Maker fixes it</h3>
              </div>
              <ul className="relative mt-6 space-y-3">
                {solutions.map((s) => (
                  <li key={s} className="flex gap-3 text-neutral-700">
                    <Check aria-hidden size={18} className="mt-1 flex-shrink-0 text-brand-purple" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
