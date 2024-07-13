<template>
  <div>
    <Header/>

    <Loader :isLoading="status === 'pending'"/>

    <div v-if="status === 'success'">
      <UContainer class="my-32">
        
        <UButton
          icon="i-heroicons-arrow-left"
          size="lg"
          color="primary"
          variant="solid"
          label="ফিরে যান"
          :trailing="false"
          to="/"
        />

        <div class="my-24">
          <p class="font-bold text-4xl capitalize">{{  data?.name  }}</p>
        </div>  

        <div>
          <div class="whitespace-break-spaces tracking-wide leading-10 font-semibold" v-html="data?.description"></div>
        </div>

      </UContainer>
    </div>


  </div>
</template>

<script setup>
definePageMeta({
  middleware:["auth", "active"]
})



const route = useRoute();
const {data, status, error} = useLazyAsyncData('single-course', ()=> useApiFetch(`/read-lesson/${route.params?.id}`))


if (status === 'success' && !error.value) {
  throw createError({
    statusCode: error?.value?.statusCode,
    statusMessage:  error?.value?.statusMessage,
  });
}

if(status === 'success'){
  useHead({
    title: data?.name ?? 'Single Course',
    description: data?.description
  })
}

</script>

<style>
/*  */
</style>






