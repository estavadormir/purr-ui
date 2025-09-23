import { twMerge } from 'tailwind-merge';
import type { IconType } from 'react-icons';

interface SocialLinkProps {
  href: string;
  icon?: IconType;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export const SocialLink = ({
  href,
  icon: Icon,
  children,
  className,
  ariaLabel,
}: SocialLinkProps) => (
  <a
    className={twMerge(
      'hover:text-accent-primary mr-2 mt-2 flex cursor-pointer',
      'justify-start rounded-lg px-2 text-center sm:text-xl',
      'focus:outline-none focus:ring-2 focus:ring-accent-primary',
      'transition-colors duration-200',
      className
    )}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel || (typeof children === 'string' ? children : 'Social link')}
  >
    {Icon && <Icon size={32} className="mr-2" aria-hidden="true" />}
    {children}
  </a>
);