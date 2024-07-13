export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig();
    const data = await $fetch(config.public.apiUrl + config.public.endpoints.apiPrefix + "/course");
  
    // Inject the data into the Nuxt application context
    nuxtApp.provide('courseData', data);
  });