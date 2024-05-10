// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from "path";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/content",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  alias: {
    // "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
    // Events page generated on demand, revalidates in background, cached until API response changes
    "/events": { swr: true },
    // Nested pages inside Events are generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
    "/events/**": { swr: 3600 },
    // Profile page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
    "/profile": { isr: 3600 },
    // Nested pages inside Profile are generated on demand once until next deployment, cached on CDN
    "/profile/**": { isr: true },
    // Admin dashboard renders only on client-side
    "/admin/**": { ssr: false },
    // State renders only on client-side
    "/state": { ssr: false },
    // Add cors headers on API routes
    "/api/**": { cors: true },
    // Redirects legacy urls
    "/old-page": { redirect: "/new-page" },
  },
});

// Documentation on how to add vuetify to a nuxt project on the following link
// https://vuetifyjs.com/en/getting-started/installation/#using-nuxt-3
