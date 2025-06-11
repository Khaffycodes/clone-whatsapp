/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#25D366',
        primaryColorLight: '#075E54',
        chatbckColor: '#ECE5DD',
        sentColor: '#DCF8C6',
        receivedColor: '#fff',
        inputColor: '#F0F0F0',
        timeColor: '#999999',
        messageColor: '#303030',
        blackColor: '#000',
      },
    },
  },
  plugins: [],
};
