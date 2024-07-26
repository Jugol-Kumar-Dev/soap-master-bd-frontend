<script setup lang="ts">
import type { FormError } from "#ui/types";
const {$baseUrl} = useNuxtApp()

const auth = useAuthStore();
const toast = useToast();
definePageMeta({
  middleware: ["guest"],
});

const state = ref({
  email:'',
  password:null
});

const validate = (state: any) => {
  const errors: FormError[] = [];
  if (!state.email)
    errors.push({ path: "email", message: "Email is required" });
  if (!state.password)
    errors.push({ path: "password", message: "Password is required" });
  return errors;
};

const reqData = ref({
  email: "",
  password: "",
});
const { data: user, status, error, execute } = useFetch($baseUrl+'/login', {
  method: "POST",
  body: reqData,
  immediate: false,
  watch: false,
});

async function onSubmit(data: any) {
  error.value = null;

  await execute();
  if (user.value) {
    console.log(user.value)
    toast.add({
      title: "User Login Successfully Done..",
    });
    auth.setToken(user?.value?.data);
    auth.setAuthUser(user?.value?.data);
    navigateTo("/");
  }
  if (!user.value) {
    throw createError({
      statusCode: error?.value?.statusCode,
      statusMessage: error?.value?.statusMessage,
    });
  }
}
</script>

<template>
  <div class="grid place-items-center min-h-screen">
    <UCard
      class="w-full lg:w-[30%] p-5 min-h-52 dark:bg-gray-900 dark:border-gray-800 rounded-xl"
    >
      <div class="flex items-center flex-col mt-10 gap-3">
        <Icon
          name="i-ion-lock-closed-outline"
          class="dark:text-white"
          size="50"
        />
        <h1 class="text-4xl dark:text-white font-semibold">Welcome Back</h1>
        <p class="text-xl dark:text-slate-300 opacity-75 font-semibold">Don't have an account? 
          <NuxtLink to="/" class="text-primary-500">Sign up</NuxtLink></p>
      </div>
      <div class="mt-8">
        <UForm :state="state" ref="form" class="space-y-4" @submit="onSubmit">
          <div class="mb-8">
            <label class="dark:text-white font-medium opacity-75 text-xl mb-2"
              >Email</label
            >
            <UInput
              type="email"
              class="border-none"
              size="lg"
              v-model="reqData.email"
              inputClass="disabled:bg-primary-100"
              :disabled="status === 'pending'"
              placeholder="Enter Your Email"
            />
            <small class="text-red-500" v-if="error?.data?.error.email">{{
              error?.data?.error.email?.[0]
            }}</small>
          </div>

          <div>
            <label class="dark:text-white font-medium opacity-75 text-xl"
              >Password</label
            >
            <UInput
              type="password"
              class="border-none"
              :disabled="status === 'pending'"
              inputClass="disabled:bg-primary-100"
              size="lg"
              v-model="reqData.password"
              placeholder="Enter Your Password"
            />
            <small class="text-red-500" v-if="error?.data?.error.password">{{
              error?.data?.error.password?.[0]
            }}</small>

            <UButton
              type="submit"
              :loading="status === 'pending'"
              class="mt-5 font-semibold text-lg"
              size="md"
              block
              >Continue</UButton
            >
          </div>
        </UForm>
      </div>
    </UCard>
  </div>
</template>


