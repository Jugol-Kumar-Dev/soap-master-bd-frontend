export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  const toast = useToast()

  nuxtApp.vueApp.config.errorHandler = async (err) => {
    switch(err?.statusCode){
      case 200:
        toast.add({
          title:err?.message.replace(/"/g, ""),
        })
        await router.push('/')
        break;
      case 404:
        toast.add({
          title:"Somthing Want Wrong "+err.statusCode,
          description:err?.message.replace(/"/g, ""),
        })
        await router.push('/')
        break;
      case 401:
        toast.add({
          title:"Somthing Want Wrong "+err.statusCode,
          description:err?.message.replace(/"/g, ""),
        })
        await router.push('/auth/login')
        break;
      default:
        toast.add({
          title:"Somthing Want Wrong "+err.statusCode,
          description:err?.message.replace(/"/g, ""),
        })
        // await router.push('/')
        break;
    }
  }
})

// import { FetchError } from "ofetch";
// export default defineNuxtPlugin(async (nuxtApp) => {
//   const toast = useToast()


//   nuxtApp.hook("vue:error", (error, instance, info) => {
//     if (!(error instanceof FetchError)) throw error;

//     const status = error.response?.status ?? -1;

//     if ([401, 419].includes(status)) {
//       navigateTo("/login");
//     }
//     if ([500].includes(status)) {
//       toast.add({
//         title:"Somthing Want Wrong "+error.statusCode,
//         description:error?.message
//       })
//     }

//     if ([409].includes(status)) {
//       navigateTo("/");
//     }

//     toast.add({
//       title:"Somthing Want Wrong "+error.statusCode,
//       description:error?.message
//     })
//   });
// });
