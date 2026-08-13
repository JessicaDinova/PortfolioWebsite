import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  extensions: [".svelte"],

  preprocess: [vitePreprocess()],

  compilerOptions: {
    runes: ({ filename }) =>
      filename?.split(/[/\\]/).includes("node_modules") ? undefined : true,
  },

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      precompress: false,
      strict: false,
    }),

    prerender: {
      handleHttpError: ({ status, path, referrer, message }) => {
        if (status === 404 && path === "/") return;
        throw new Error(message);
      },
    },

    paths: {
      base: "",
    },
  },
};

export default config;