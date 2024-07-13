<template>
    <div>
        
        <LazyTitle>
            this is nuxt titikel 
        </LazyTitle>


        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi consectetur ex ea illo molestias! Nulla distinctio beatae, voluptatum tempora accusamus modi quas, debitis voluptatem id asperiores sint optio aliquam?
    
    
        <br>
        <UButton @click="fetchStatus">
            my button
        </UButton>
        <UButton to="/student">Button</UButton>



    </div>
</template>

<script setup lang="ts">


const {data, status, error, execute} = useFetch("/api/myapi",{
    immediate:false,
    watch:false,
  })

  const fetchStatus = async (btnStatus:any) => {
    await execute()
    if (!data.value) {
      throw createError({
        statusCode: error?.value?.statusCode,
        statusMessage: error?.value?.message
      })
    }
  }
</script>

<style>

</style>