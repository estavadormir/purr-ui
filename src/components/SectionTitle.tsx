import { twMerge } from 'tailwind-merge';

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

// For Initial section (white text with aqua subtitle)
export const InitialTitle = ({ title, subtitle, className }: TitleProps) => (
  <div className={twMerge('flex flex-col', className)}>
    <h2 className="title-main ml-5 mt-5 flex justify-center pl-2 lg:mb-2 lg:justify-start">
      {title}
      {subtitle && (
        <span className="text-accent-secondary ml-4 lg:ml-6">{subtitle}</span>
      )}
    </h2>
    <div className="w-48 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary ml-7 mt-2" />
    <div className="w-32 h-0.5 bg-gradient-to-r from-accent-secondary to-accent-primary ml-7 mt-1" />
  </div>
);

// For the About sections (white text with pink dots)
export const StandardTitle = ({ title, subtitle, className }: TitleProps) => (
  <div className={twMerge('flex flex-col', className)}>
    <h2 className="ml-5 mt-5 flex justify-center pl-2 text-4xl text-gray-100 lg:mb-2 lg:justify-start lg:text-6xl">
      {title}
      {subtitle && <span className="text-accent-primary ">{subtitle}</span>}
    </h2>
    <div className="w-48 h-1 bg-accent-primary ml-7 mt-2" />
    <div className="w-32 h-1 bg-accent-primary ml-7 mt-1" />
  </div>
);

// For TechStack section (black text with pink dots)
export const TechStackTitle = ({ title, subtitle, className }: TitleProps) => (
  <div className={twMerge('flex flex-col', className)}>
    <h2 className="ml-5 mt-5 flex justify-center pl-2 text-4xl text-slate-900 lg:mb-2 lg:justify-start lg:text-6xl">
      {title}
      {subtitle && <span className="text-accent-primary">{subtitle}</span>}
    </h2>
    <div className="w-48 h-1 bg-accent-primary ml-7 mt-2" />
    <div className="w-32 h-1 bg-accent-primary ml-7 mt-1" />
  </div>
);

// For Contact section (pink border bottom style)
export const ContactTitle = ({ title, subtitle, className }: TitleProps) => (
  <div className={twMerge('flex flex-col', className)}>
    <h2 className="flex-start font-display text-brand text-accent-primary border-accent-primary mb-4 flex border-b-2 font-bold uppercase lg:text-xl">
      {title}
    </h2>
    {subtitle && (
      <h1 className="mb-2 mt-5 flex justify-start text-4xl text-gray-100 lg:text-6xl">
        {subtitle}
      </h1>
    )}
  </div>
);

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  variant?: 'initial' | 'standard' | 'tech' | 'contact';
}

export const SectionTitle = ({
  title,
  subtitle,
  className,
  variant = 'standard',
}: SectionTitleProps) => {
  switch (variant) {
    case 'initial':
      return (
        <InitialTitle title={title} subtitle={subtitle} className={className} />
      );
    case 'tech':
      return (
        <TechStackTitle
          title={title}
          subtitle={subtitle}
          className={className}
        />
      );
    case 'contact':
      return (
        <ContactTitle title={title} subtitle={subtitle} className={className} />
      );
    default:
      return (
        <StandardTitle
          title={title}
          subtitle={subtitle}
          className={className}
        />
      );
  }
};