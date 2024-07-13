export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useAuthStore()
    const toast = useToast()
    const router = useRouter()

    if(!auth.isLogin) {
        toast.add({
            color:"red",
            title:"Unautorized Access",
            description:"Your Not Logined"
        })
        await router.push('/auth/login')
    }
})