export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const data =  config.public.apiUrl + config.public.endpoints.apiPrefix;

    return {
        provide: {
            baseUrl: data
        }
    }
})