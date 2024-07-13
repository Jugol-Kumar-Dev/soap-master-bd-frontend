export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    if(auth.isLogin && !auth.user.is_active) {
        return navigateTo({
            path:"/auth/active",
            query:{
                status:'profile-not-activated'
            }
        })
    }
})