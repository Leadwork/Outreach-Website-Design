// USD prices. Outreach retainers are monthly; list building is per contact.
export const pricing = {
  doneForYou: 1700,
  linkedin: 900,
  management: 1200,
  contact: 0.20,
} as const;

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}
