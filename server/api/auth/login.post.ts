export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const data = await readBody(event)
    const user = await $fetch(config.public.apiUrl+config.public.endpoints.apiPrefix+"/login",{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:data
    })
 
    return user;
})



