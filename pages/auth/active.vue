<template>
  <div>
    <Header />
    <div>
      <UContainer class="my-32">
        <UCard class="w-9/12 h-full min-h-[200px] mx-auto">
          <div class="p-5 flex items-center justify-center flex-col">
            <p class="text-3xl font-bold mb-3">Account Activation Required</p>
            <p class="text-md font-semibold mb-3 text-center">
              Thank you for registering! Your account has been created, but
              active not yeat. it needs to be activated by
              <a href="mailto:support@soapmasterbd.com" class="text-blue-500"
                >"support team"</a
              >
              before you can use it.
            </p>
            <p class="text-ld font-semibold text-center">
              Please contact our support team for activation:
            </p>
            <div class="contact-info my-7">
              <p class="text-ld font-semibold">
                Email:
                <a href="mailto:support@soapmasterbd.com">support@soapmasterbd.com</a>
              </p>
              <p class="text-ld font-semibold">
                Phone:
                <a href="tel:+8801577777711">+8801577777711</a>
              </p>
            </div>
            <p class="text-ld font-semibold">
              We appreciate your patience and look forward to serving you.
            </p>
          </div> 
          <div class="w-full flex items-center justify-center">
            <UButton to="/">হোম</UButton>
          </div>
        </UCard>
      </UContainer>
    </div>
  </div>
</template>
  
  <script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
  
  <style>
/*  */
</style>