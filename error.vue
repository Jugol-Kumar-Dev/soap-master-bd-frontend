<script setup lang="ts">


import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <section class="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
    <div class="container flex flex-col items-center">
      <div class="flex flex-col gap-6 max-w-md text-center">
        <h2 class="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
          <span class="sr-only">Error</span>{{ error?.statusCode }}
        </h2>
        <p class="text-2xl md:text-3xl dark:text-gray-300">
          {{ error?.statusMessage }}
        </p>
        <button @click="handleError" class="px-8 py-4 text-xl font-semibold rounded bg-william-500 text-gray-50 hover:text-gray-200">Back to home</button
        >
      </div>
    </div>
  </section>
</template>
<style>
/*  */
</style>