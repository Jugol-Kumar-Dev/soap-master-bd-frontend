export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    if(auth.isLogin) {
        return navigateTo({
            path:"/",
            query:{
                status:'your-already-logined'
            }
        })
    }
})