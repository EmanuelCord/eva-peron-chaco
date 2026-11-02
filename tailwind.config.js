module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        navy: '#12304f',
        gold: '#d9a441',
        blue: {
          DEFAULT: '#4aa3df',
        },
      },
      fontFamily: {
        body: ['Barlow', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
