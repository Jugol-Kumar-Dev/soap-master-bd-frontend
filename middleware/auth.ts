export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useAuthStore()
    const toast = useToast()
    const router = useRouter()

    if(!auth.isLogin) {
        toast.add({title:"Unautorized Access"})
        await router.push('/auth/login')
    }
})