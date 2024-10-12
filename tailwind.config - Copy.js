import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant("group-target", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.target:target .${e(`group-target${separator}${className}`)}`;
        });
      });
    }),
  ],
};
