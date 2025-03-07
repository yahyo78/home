/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { screens: {
    'sm': '575px',
    // => @media (min-width: 640px) { ... }

    'md': '767px',
    // => @media (min-width: 768px) { ... }

    'lg': '992px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
    extend: {},
  },
  plugins: [],
}

