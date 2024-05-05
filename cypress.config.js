import { defineConfig } from "cypress";
const customViteConfig = require('./vite.config')

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: customViteConfig,

    },
  },
});
