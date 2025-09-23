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
    className="h-fit"
    rel="noreferrer"
    href={item.url}
    target="_blank"
    aria-label={`Learn more about ${item.name}${item.description ? ': ' + item.description : ''}`}
  >
    <li
      className={twMerge(
        'hover:bg-accent-secondary mx-2 mt-2 flex h-full cursor-pointer',
        'rounded-lg border-2 border-black px-2 py-2 text-center',
        'transition-colors duration-200 flex flex-col focus-within:ring-2 focus-within:ring-accent-primary',
        className
      )}
      role="button"
      tabIndex={0}
    >
      <span className="font-medium">{item.name}</span>
      {item.description && (
        <span className="text-sm text-gray-500 ml-2 mt-1">{item.description}</span>
      )}
    </li>
  </a>
);