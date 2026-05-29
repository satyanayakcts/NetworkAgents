/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        severity: {
          safe: '#10B981',
          info: '#3B82F6',
          warning: '#F59E0B',
          high: '#FB923C',
          critical: '#EF4444',
          expired: '#6B7280'
        }
      }
    }
  },
  plugins: []
}
