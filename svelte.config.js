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
      // only ignore the particular 404 that breaks your build; otherwise throw
      handleHttpError: ({ status, path, referrer, message }) => {
        // ignore 404 for root when using a non-empty `paths.base`
        if (status === 404 && path === "/") return;
        // otherwise fail the build (default)
        throw new Error(message);
      },
    },

    paths: {
      base: process.argv.includes("dev") ? "" : (process.env.BASE_PATH ?? ""),
    },
  },
};

export default config;