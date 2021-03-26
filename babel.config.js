module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./src/assets",
            components: "./src/components",
            constants: "./src/constants",
            hooks: "./src/hooks",
            pages: "./src/pages",
            services: "./src/services",
            state: "./src/state",
            style: "./src/style",
            utilities: "./src/utilities",
          },
        },
      ],
    ],
  };
};
