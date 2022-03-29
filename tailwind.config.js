module.exports = {
  mode: "jit",
  purge: ["./kit/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extends: {},
  },
  plugins: [require("dculus-daisy-ui")],
  "dculus-daisy-ui": {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
