
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const data = await readBody(event)

    const user = await $fetch(config.public.apiUrl+config.public.endpoints.apiPrefix+"/create",{
        method:"POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:data
    })

    // const course = await $fetch(config.public.apiUrl + config.public.endpoints.apiPrefix + "/user", {
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     }
    // }).


    return {
        bodyData: data,
        user: user,
    }
})



