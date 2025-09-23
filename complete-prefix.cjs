const fs = require('fs');
const path = require('path');

// Common TailwindCSS classes that need prefixing
const tailwindClasses = [
  // Layout
  'block', 'inline', 'flex', 'grid', 'hidden', 'absolute', 'relative', 'sticky', 'fixed',
  // Sizing
  'w-', 'h-', 'max-w-', 'max-h-', 'min-w-', 'min-h-',
  // Spacing
  'p-', 'px-', 'py-', 'pt-', 'pr-', 'pb-', 'pl-', 'm-', 'mx-', 'my-', 'mt-', 'mr-', 'mb-', 'ml-',
  'space-x-', 'space-y-', 'gap-', 'inset-',
  // Typography
  'text-', 'font-', 'leading-', 'tracking-', 'uppercase', 'lowercase', 'capitalize',
  // Colors
  'bg-', 'border-', 'ring-',
  // Borders
  'border', 'border-', 'rounded', 'rounded-',
  // Effects
  'shadow', 'shadow-', 'opacity-', 'hover:', 'focus:', 'group-hover:', 'transition', 'transition-', 'duration-',
  // Flexbox & Grid
  'flex-', 'items-', 'justify-', 'grid-', 'col-', 'row-',
  // Positioning
  'top-', 'right-', 'bottom-', 'left-', 'z-',
  // Overflow
  'overflow-', 'truncate',
  // Transform
  'scale-', 'rotate-', 'translate-', 'transform',
  // Other
  'cursor-', 'select-', 'list-', 'appearance-'
];

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // First, remove any existing purr- or purr: prefixes
  content = content.replace(/purr[-:]/g, '');

  // Update all className attributes (both {string} and ="string" formats)
  content = content.replace(/className\s*=\s*(["{][^}"]*["}])/g, (match) => {
    let newMatch = match;
    tailwindClasses.forEach(cls => {
      if (cls.endsWith('-')) {
        // For classes with variants like w-5, text-lg, etc.
        const regex = new RegExp(`(\\s|'|"|\\[|^)${cls}([a-zA-Z0-9\\[\\]\\/.\\-\\%]+)`, 'g');
        newMatch = newMatch.replace(regex, `$1purr:${cls}$2`);
      } else {
        // For standalone classes
        const regex = new RegExp(`(\\s|'|"|\\[|^)${cls}(\\s|'|"|\\]|$)`, 'g');
        newMatch = newMatch.replace(regex, `$1purr:${cls}$2`);
      }
    });
    if (newMatch !== match) updated = true;
    return newMatch;
  });

  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && file !== 'node_modules' && file !== '.git') {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      updateFile(fullPath);
    }
  });
}

// Process src directory
processDirectory('./src');
console.log('Complete prefix update complete!');