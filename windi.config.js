export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0f',
        cyan: '#00ffff',
        purple: '#8a2be2',
        text: '#e0e0e0',
      },
    },
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded-xl font-semibold transition-all hover:scale-105',
    'btn-cyan': 'btn bg-cyan/10 border border-cyan text-cyan hover:bg-cyan/20',
    'btn-purple': 'btn bg-purple/10 border border-purple text-purple rounded-full hover:bg-purple/20',
    'title': 'text-3xl font-bold mb-2 text-purple',
    'subtitle': 'text-text/80 text-lg leading-relaxed',
    'container': 'max-w-5xl mx-auto px-6',
  },
  plugins: [],
}
