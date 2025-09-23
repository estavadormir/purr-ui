import { twMerge } from 'tailwind-merge';

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

// For Initial section (white text with aqua subtitle)
export const InitialTitle = ({ title, subtitle, className }: TitleProps) => (
  <div className={twMerge('purr:flex purr:flex-col', className)}>
    <h2 className="title-main purr:ml-5 purr:mt-5 purr:flex purr:justify-center purr:pl-2 lg:mb-2 lg:justify-start">
      {title}
      {subtitle && (
        <span className="purr:text-accent-secondary purr:ml-4 lg:ml-6">{subtitle}</span>
      )}
    </h2>
    <div className="purr:w-48 purr:h-0.5 purr:bg-gradient-to-r from-accent-primary to-accent-secondary purr:ml-7 purr:mt-2" />
    <div className="purr:w-32 purr:h-0.5 purr:bg-gradient-to-r from-accent-secondary to-accent-primary purr:ml-7 purr:mt-1" />
  </div>
);

// For the About sections (white text with pink dots)
export const StandardTitle = ({ title, subtitle, className }: TitleProps) => (
  <div className={twMerge('purr:flex purr:flex-col', className)}>
    <h2 className="purr:ml-5 purr:mt-5 purr:flex purr:justify-center purr:pl-2 purr:text-4xl purr:text-gray-100 lg:mb-2 lg:justify-start lg:text-6xl">
      {title}
      {subtitle && <span className="purr:text-accent-primary ">{subtitle}</span>}
    </h2>
    <div className="purr:w-48 purr:h-1 purr:bg-accent-primary purr:ml-7 purr:mt-2" />
    <div className="purr:w-32 purr:h-1 purr:bg-accent-primary purr:ml-7 purr:mt-1" />
  </div>
);

// For TechStack section (black text with pink dots)
export const TechStackTitle = ({ title, subtitle, className }: TitleProps) => (
  <div className={twMerge('purr:flex purr:flex-col', className)}>
    <h2 className="purr:ml-5 purr:mt-5 purr:flex purr:justify-center purr:pl-2 purr:text-4xl purr:text-slate-900 lg:mb-2 lg:justify-start lg:text-6xl">
      {title}
      {subtitle && <span className="purr:text-accent-primary">{subtitle}</span>}
    </h2>
    <div className="purr:w-48 purr:h-1 purr:bg-accent-primary purr:ml-7 purr:mt-2" />
    <div className="purr:w-32 purr:h-1 purr:bg-accent-primary purr:ml-7 purr:mt-1" />
  </div>
);

// For Contact section (pink border bottom style)
export const ContactTitle = ({ title, subtitle, className }: TitleProps) => (
  <div className={twMerge('purr:flex purr:flex-col', className)}>
    <h2 className="purr:flex-start purr:font-display purr:text-brand purr:text-accent-primary purr:border-accent-primary purr:mb-4 purr:flex purr:border-b-2 purr:font-bold purr:uppercase lg:text-xl">
      {title}
    </h2>
    {subtitle && (
      <h1 className="purr:mb-2 purr:mt-5 purr:flex purr:justify-start purr:text-4xl purr:text-gray-100 lg:text-6xl">
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