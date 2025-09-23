import { twMerge } from 'tailwind-merge';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  featured?: boolean;
  technologies: string[];
  image?: string;
  className?: string;
}

export const ProjectCard = ({
  title,
  description,
  url,
  technologies,
  image,
  className
}: ProjectCardProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={twMerge(
      'group purr:block purr:transition-all purr:duration-300 hover:scale-[1.02]',
      className
    )}
  >
    <div className="purr:relative purr:h-64 sm:h-80 purr:overflow-hidden purr:rounded-lg purr:border purr:border-gray-700 purr:bg-gray-800">
      {image ? (
        <div
          className="purr:absolute purr:inset-0 purr:bg-cover purr:bg-center purr:transition-transform purr:duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="purr:absolute purr:inset-0 purr:bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/30" />
        </div>
      ) : (
        <div className="purr:absolute purr:inset-0 purr:bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="purr:absolute purr:inset-0 purr:bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10" />
        </div>
      )}

      <div className="purr:relative purr:h-full purr:flex purr:flex-col purr:justify-between purr:p-6">
        <div className="purr:flex purr:items-start purr:justify-between">
          <div className="purr:space-y-1">
            <h3 className="purr:text-xl sm:text-2xl purr:font-light purr:text-white group-hover:text-accent-secondary purr:transition-colors">
              {title}
            </h3>
          </div>
          <ExternalLink className="purr:w-5 purr:h-5 purr:text-gray-400 group-hover:text-accent-primary purr:transition-colors purr:opacity-0 group-hover:opacity-100" />
        </div>

        <div className="purr:space-y-3">
          <p className="body-small purr:text-gray-300 line-clamp-3">
            {description}
          </p>

          <div className="purr:flex purr:flex-wrap purr:gap-1">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="tech-tag purr:px-2 purr:py-1 purr:bg-gray-800/80 purr:text-gray-400 purr:rounded purr:border purr:border-gray-700"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="tech-tag purr:px-2 purr:py-1 purr:text-gray-500">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="purr:absolute purr:inset-0 purr:bg-gradient-to-t from-accent-primary/20 to-accent-secondary/20 purr:opacity-0 group-hover:opacity-100 purr:transition-opacity purr:duration-300" />
    </div>
  </a>
);