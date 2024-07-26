export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    // @ts-ignore
    if(auth.isLogin && !auth.user.is_active) {
        return navigateTo({
            path:"/auth/active",
            query:{
                status:'profile-not-activated'
            }
        })
    }
    // @ts-ignore
    if(auth.isLogin && auth?.user?.is_active && to.name === 'auth-active'){
        return navigateTo({
            path:"/",
            query:{
                status:'already-active-profile'
            }
        })
    }


})