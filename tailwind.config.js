/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  compilerOptions: {
    types: ["@tailwindcss/typography"],
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },

  theme: {
    extend: {
      animation: {
        hinge: 'hinge 1s ease-in',
        typing: "typing 2s steps(20), blink 1s infinite",
        loop: "loop 1s ease-in-out infinite",
        slideIn: "slideIn 1s ease-in-out",
        slideDown: "slideDown 1s ease-in-out",
      },
      keyframes: {
        hinge: {
          '0%': { transform: 'rotate(0)', opacity: '1' },
          '20%': { transform: 'rotate(80deg)', opacity: '1' },
          '40%, 60%': { transform: 'rotate(60deg)', opacity: '1' },
          '80%': { transform: 'rotate(80deg)', opacity: '0' },
          '100%': { transform: 'translateY(700px)', opacity: '0' },
        },
        typing: {
          '0%': { 
            width: '0%', 
            visibility: 'hidden' 
          },
          '100%': { 
            width: '100%' 
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        loop: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideDown: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [
  ],
}

