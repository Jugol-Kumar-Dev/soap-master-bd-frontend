
export default defineEventHandler(async (event)=>{
    const config = useRuntimeConfig();

    const data = readBody(event)

    console.log('body data', data)

    return {
        bodyData: data,
        userApi: 'loded user api'
    }
})



