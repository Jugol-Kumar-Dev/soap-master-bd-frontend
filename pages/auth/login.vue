<script setup lang="ts">
import type { FormError } from "#ui/types";

const auth = useAuthStore();
const toast = useToast();
definePageMeta({
  middleware: ["guest"],
});

const fields = [
  {
    name: "email",
    type: "text",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    name: "remember",
    label: "Remember me",
    type: "checkbox",
  },
];

const validate = (state: any) => {
  const errors: FormError[] = [];
  if (!state.email)
    errors.push({ path: "email", message: "Email is required" });
  if (!state.password)
    errors.push({ path: "password", message: "Password is required" });
  return errors;
}

const reqData = ref(null)
const { data:user, status, error, execute } = useFetch("/api/auth/login", {
  method: "POST",
  body: reqData,
  immediate: false,
  watch: false,
});


async function onSubmit(data: any) {
  error.value = null;
  reqData.value = data;
  await execute();

  if(user.value){
    toast.add({
      title: "User Login Successfully Done.."
    })
    auth.setToken(user?.value?.data?.token)
    auth.setAuthUser(user?.value?.data)
    navigateTo("/")
  }

  if (!user.value) {
    throw createError({
      statusCode: error?.value?.statusCode,
      statusMessage:  error?.value?.statusMessage,
    });
  }
}
</script>

<template>
  <div class="w-full h-full min-h-screen grid place-items-center">

    login page
  </div>
</template>

