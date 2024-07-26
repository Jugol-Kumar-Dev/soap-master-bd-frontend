export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  const toast = useToast()
  const store = useAuthStore();
  
  nuxtApp.vueApp.config.errorHandler = async (err) => {
    // @ts-ignore
    switch(err?.statusCode){
      case 200:
        // @ts-ignore
        toast.add({title: err?.message.replace(/"/g, "")})
        break;
      case 404:
        // @ts-ignore
        toast.add({title: err?.message.replace(/"/g, "")})
        await router.push('/')
        break;
      case 401:
        // @ts-ignore
        toast.add({title: err?.message.replace(/"/g, "")})
        store.removeToken()
        await router.push('/auth/login')
        break;
      default:
        // @ts-ignore
        toast.add({title: err?.message.replace(/"/g, "")})
        break;
    }
  }
})
