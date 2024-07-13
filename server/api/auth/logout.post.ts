import { useAuthStore } from "~/stores/useAuth";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    
    const user = await $fetch(config.public.apiUrl+config.public.endpoints.apiPrefix+"/logout",{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${useAuthStore().user?.token}`
        },
    })
 

    console.log("logout user server", user)

    return user;
})



