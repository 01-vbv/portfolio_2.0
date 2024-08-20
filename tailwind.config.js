import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./*.{html,js}"],
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
