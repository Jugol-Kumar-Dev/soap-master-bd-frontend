<template>
  <div class="w-[40%] bg-william-500 px-10 py-16 rounded-lg">
    <p class="text-4xl font-semibold text-white leading-tight text-center mb-8">
      এখনি জয়েন করুন আমাদের চলমান কোর্সে ভর্তি হতে
    </p>

    <template v-if="error?.data.data?.message">
      <UAlert
        color="red"
        icon="i-heroicons-information-circle-20-solid"
        :title="error?.data.data?.message"
      />
    </template>

    <form class="flex flex-col gap-5 mt-5" @submit.prevent="handelRegistration">
      <div class="flex flex-col">
        <input
          type="phone"
          class="px-5 py-4 rounded-lg"
          v-model="phone"
          placeholder="মোবাইল নাম্বার দিন"
          autocomplete="phone"
        />
        <small class="text-red-500" v-if="error?.data.data?.errors?.phone">{{
          error?.data.data?.errors?.phone[0]
        }}</small>
      </div>
      <div class="flex flex-col">
        <input
          type="email"
          class="px-5 py-4 rounded-lg"
          v-model="email"
          placeholder="ইমেইল দিন"
          autocomplete="email"
        />
        <small class="text-red-500" v-if="error?.data.data?.errors?.email">{{
          error?.data.data?.errors?.email[0]
        }}</small>
      </div>
      <div class="flex flex-col">
        <input
          type="password"
          class="px-5 py-4 rounded-lg"
          v-model="password"
          placeholder="পাসওয়ার্ড দিন (******)"
          autocomplete="current-password"
        />
        <small class="text-red-500" v-if="error?.data.data?.errors?.password">{{
          error?.data.data?.errors?.password[0]
        }}</small>
      </div>
      <div class="w-full h-full">
        <button
          type="submit"
          :disabled="status === 'pending'"
          class="bg-black w-full text-center py-5 text-white text-xl rounded-lg disabled:bg-black/70"
        >
          সাইন আপ করুন
        </button>
      </div>
      <UDivider label="OR"> </UDivider>
      <div>
        <p class="text-white">Already have an account ?</p>
        <NuxtLink to="/auth/login" class="underline text-blue-800">login now</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup>

const phone = ref("0152222275");
const email = ref("mail@mail.com");
const password = ref("12345678");

const { data, status, error, execute } = useFetch("/api/auth/register", {
  method: "POST",
  body: {
    email: email.value,
    phone: phone.value,
    password: password.value,
  },
  immediate: false,
  watch: false,
});

const handelRegistration = async () => {
  error.value = null;
  await execute();

  console.log("erros login ", error);

  if (!data.value) {
    throw createError({
      statusCode: error?.value?.statusCode,
      statusMessage:  error?.value?.statusMessage,
    });
  }
};
</script>

<style>
/*  */
</style>