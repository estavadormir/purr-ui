import { twMerge } from 'tailwind-merge';

interface TechItem {
  name: string;
  url: string;
  description?: string;
}

interface TechCardProps {
  item: TechItem;
  className?: string;
}

export const TechCard = ({ item, className }: TechCardProps) => (
  <a
    className="purr:h-fit"
    rel="noreferrer"
    href={item.url}
    target="_blank"
    aria-label={`Learn more about ${item.name}${item.description ? ': ' + item.description : ''}`}
  >
    <li
      className={twMerge(
        'hover:bg-accent-secondary purr:mx-2 purr:mt-2 purr:flex purr:h-full purr:cursor-pointer',
        'purr:rounded-lg purr:border-2 purr:border-black purr:px-2 purr:py-2 purr:text-center',
        'purr:transition-colors purr:duration-200 purr:flex purr:flex-col focus-within:ring-2 focus-within:ring-accent-primary',
        className
      )}
      role="button"
      tabIndex={0}
    >
      <span className="purr:font-medium">{item.name}</span>
      {item.description && (
        <span className="purr:text-sm purr:text-gray-500 purr:ml-2 purr:mt-1">{item.description}</span>
      )}
    </li>
  </a>
);