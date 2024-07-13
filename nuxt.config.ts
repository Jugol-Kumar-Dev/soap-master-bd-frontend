// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: false 
  },
  css:['~/css/app.css'],
  app:{
    head:{
      title:"Saop Master Bangladesh"
    }
  },
  appDir: 'app',
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  runtimeConfig:{
    public:{
      apiUrl:process.env.API_URL,
      endpoints:{
        apiPrefix:process.env.API_PREFIX
      }
    }
  }
  

})