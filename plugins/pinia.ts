import { createPinia } from "pinia";

export default defineNuxtPlugin((app) => {
  const pinia = createPinia();
  app.vueApp.provide("pinia", pinia);
});
