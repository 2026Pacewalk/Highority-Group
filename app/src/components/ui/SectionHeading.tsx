import EyebrowLabel from './EyebrowLabel';

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({ eyebrow, heading, subheading, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${align === 'center' ? 'mx-auto' : ''}`}>
      <div className={`${align === 'center' ? 'flex flex-col items-center' : ''}`}>
        <EyebrowLabel text={eyebrow} />
      </div>
      <h2 className="font-display text-[clamp(32px,4vw,56px)] font-normal leading-[1.1] tracking-[-0.02em] text-[#0A1628]">{heading}</h2>
      {subheading && <p className={`mt-4 text-base font-body leading-relaxed max-w-[600px] ${align === 'center' ? 'mx-auto' : ''} text-[#7A8CA5]`}>{subheading}</p>}
    </div>
  );
}
