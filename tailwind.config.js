module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: [
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './components/**/*.vue',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/static/check.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
}
