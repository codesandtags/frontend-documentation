interface TagColorMap {
  [key: string]: {
    bg: string;
    text: string;
  };
}

export const getTagColors = (tag: string): { bg: string; text: string } => {
  const colorMap: TagColorMap = {
    react: { bg: 'bg-blue-600/20', text: 'text-blue-300' },
    vue: { bg: 'bg-emerald-600/20', text: 'text-emerald-300' },
    angular: { bg: 'bg-red-600/20', text: 'text-red-300' },
    typescript: { bg: 'bg-blue-600/20', text: 'text-blue-300' },
    javascript: { bg: 'bg-yellow-600/20', text: 'text-yellow-300' },
    css: { bg: 'bg-pink-600/20', text: 'text-pink-300' },
    html: { bg: 'bg-orange-600/20', text: 'text-orange-300' },
    framework: { bg: 'bg-purple-600/20', text: 'text-purple-300' },
    library: { bg: 'bg-indigo-600/20', text: 'text-indigo-300' },
    tool: { bg: 'bg-cyan-600/20', text: 'text-cyan-300' },
    testing: { bg: 'bg-green-600/20', text: 'text-green-300' },
    state: { bg: 'bg-violet-600/20', text: 'text-violet-300' },
    async: { bg: 'bg-fuchsia-600/20', text: 'text-fuchsia-300' },
    bundler: { bg: 'bg-amber-600/20', text: 'text-amber-300' },
    development: { bg: 'bg-teal-600/20', text: 'text-teal-300' },
  };

  // Default color for tags without specific mapping
  const defaultColor = { bg: 'bg-gray-600/20', text: 'text-gray-300' };

  return colorMap[tag.toLowerCase()] || defaultColor;
};