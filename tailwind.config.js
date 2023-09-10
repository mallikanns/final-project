/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '347': '347px',
        '60': '60px',
      },
      height: {
        '324': '324px',
        '60': '60px',
      },
      colors: {
        'pink' : '#FD00FE',
        'softpink' : 'rgba(253, 0, 254, 0.10)',
        'dark1' : '#1C1C1E',
        'primary' : '#545F71',
        'secondary': '#9BA5B7',
        'addbutton' : 'rgba(255, 255, 255, 0.20)',
      },
      fontSize: {
        '32': '32px',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        // 'dashedborder': "url('data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e')",
        'run': "url('/src/img/run-347X324.png')",
        'weight': "url('/src/img/weight-347X324.png')",
        'walk': "url('/src/img/walk-347X324.png')",
        // 'run': "url('/src/img/dummy-347X324.png')",
        // 'run': "url('/src/img/dummy-347X324.png')",
      }
    },
  },
  plugins: [],
}

