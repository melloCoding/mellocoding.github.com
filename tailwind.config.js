/** @type {import('tailwindcss').Config} */
export default {
  content: ["./"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
"primary": "#6b7280",
          
"secondary": "#4b5563",
          
"accent": "#f97316",
          
"neutral": "#565c67",
          
"base-100": "#374151",
          
"info": "#67e8f9",
          
"success": "#00ff00",
          
"warning": "#fbbf24",
          
"error": "#ff0000",
          },
        },
      ],
    },
  plugins: [require('daisyui'),],
}

