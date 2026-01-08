interface SectionHeaderProps {
  step: number;
  title: string;
}

export function SectionHeader({ step, title }: SectionHeaderProps) {
  return (
    <h2 className="text-sm font-semibold text-heading-color uppercase tracking-wide mb-4">
      {step}. {title}
    </h2>
  );
}