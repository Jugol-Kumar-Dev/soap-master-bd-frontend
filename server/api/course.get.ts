
export default defineEventHandler(async ()=>{
    const config = useRuntimeConfig();
    
    const data = $fetch(config.public.apiUrl+config.public.endpoints.apiPrefix+"/course")
    return data;
})



