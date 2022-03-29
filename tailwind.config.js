module.exports = {
  mode: "jit",
  purge: ["./kit/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extends: {},
  },
  plugins: [require("dculus-daisy-ui")],
  
};
