type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  center?: boolean;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  center = true,
}: SectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container-px">
        {(eyebrow || title || subtitle) && (
          <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className="h-section mt-4">{title}</h2>}
            {subtitle && (
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">{subtitle}</p>
            )}
          </div>
        )}
        <div className={eyebrow || title || subtitle ? 'mt-14' : ''}>{children}</div>
      </div>
    </section>
  );
}
