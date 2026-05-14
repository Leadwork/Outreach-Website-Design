'use client';

import { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, Lightbulb } from 'lucide-react';

const SPAM_WORDS = [
  'free',
  'guarantee',
  'cash',
  'click here',
  'urgent',
  'winner',
  'congratulations',
  'limited time',
  '100%',
  'amazing',
  'risk-free',
  'no obligation',
  'act now',
  'cheap',
  'offer',
  'sale',
  'discount',
];

function analyze(input: string) {
  const subject = input.trim();
  const length = subject.length;
  const wordCount = subject.split(/\s+/).filter(Boolean).length;
  const lower = subject.toLowerCase();
  const spamHits = SPAM_WORDS.filter((w) => lower.includes(w));
  const hasPersonalisation =
    /\{\{|\[firstName|\[FirstName|first[_ ]?name|company/i.test(subject);
  const hasQuestion = subject.includes('?');
  const hasNumbers = /\d/.test(subject);
  const allCaps = subject.length > 4 && subject === subject.toUpperCase();

  let score = 100;
  const notes: { type: 'good' | 'warn' | 'bad'; text: string }[] = [];

  if (length === 0) {
    return { score: 0, notes: [{ type: 'warn' as const, text: 'Type a subject line to see its score.' }], length, wordCount };
  }
  if (length < 20) {
    score += 5;
    notes.push({ type: 'good', text: 'Short and skimmable — great for mobile inboxes.' });
  } else if (length <= 50) {
    notes.push({ type: 'good', text: 'Length is in the inbox-friendly sweet spot (under 50 chars).' });
  } else if (length <= 80) {
    score -= 10;
    notes.push({ type: 'warn', text: 'A bit long — many inboxes truncate after ~50 characters.' });
  } else {
    score -= 20;
    notes.push({ type: 'bad', text: 'Too long — it will get truncated and reads as marketing.' });
  }

  if (spamHits.length > 0) {
    score -= spamHits.length * 8;
    notes.push({
      type: 'bad',
      text: `Spam-trigger words detected: ${spamHits.join(', ')}.`,
    });
  } else {
    notes.push({ type: 'good', text: 'No obvious spam-trigger words found.' });
  }

  if (hasPersonalisation) {
    score += 5;
    notes.push({ type: 'good', text: 'Contains personalisation placeholders or merge tags — good.' });
  } else {
    score -= 5;
    notes.push({ type: 'warn', text: 'No personalisation detected — add a name, company or signal.' });
  }

  if (hasQuestion) {
    score += 3;
    notes.push({ type: 'good', text: 'Question format — usually pulls higher open rates.' });
  }
  if (hasNumbers) {
    notes.push({ type: 'good', text: 'Contains numbers — adds specificity and credibility.' });
  }
  if (allCaps) {
    score -= 15;
    notes.push({ type: 'bad', text: 'All caps reads as shouting and triggers spam filters.' });
  }
  if (wordCount > 9) {
    score -= 8;
    notes.push({ type: 'warn', text: 'Too many words — aim for 3-7 max.' });
  }

  score = Math.max(0, Math.min(100, score));
  return { score, notes, length, wordCount };
}

export default function SubjectLineTester() {
  const [value, setValue] = useState('');
  const result = useMemo(() => analyze(value), [value]);

  const color =
    result.score >= 80
      ? 'text-emerald-600'
      : result.score >= 60
        ? 'text-amber-600'
        : 'text-red-600';
  const bar =
    result.score >= 80
      ? 'bg-emerald-500'
      : result.score >= 60
        ? 'bg-amber-500'
        : 'bg-red-500';

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
      <label htmlFor="subject" className="block text-sm font-semibold text-neutral-900">
        Your subject line
      </label>
      <input
        id="subject"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="e.g. Quick question about your Q3 outbound, {{firstName}}?"
        className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-base outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
        autoComplete="off"
      />

      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Score</p>
          <p className={`text-4xl font-extrabold ${color}`}>{result.score}/100</p>
        </div>
        <div className="text-right text-sm text-neutral-500">
          <p>{result.length} characters</p>
          <p>{result.wordCount} words</p>
        </div>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-100">
        <div
          className={`h-full ${bar} transition-all duration-300`}
          style={{ width: `${result.score}%` }}
          role="progressbar"
          aria-valuenow={result.score}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      <ul className="mt-6 space-y-2">
        {result.notes.map((n, i) => {
          const Icon = n.type === 'good' ? CheckCircle2 : n.type === 'warn' ? Lightbulb : AlertTriangle;
          const c =
            n.type === 'good' ? 'text-emerald-600' : n.type === 'warn' ? 'text-amber-600' : 'text-red-600';
          return (
            <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
              <Icon aria-hidden size={16} className={`mt-0.5 flex-shrink-0 ${c}`} />
              <span>{n.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
