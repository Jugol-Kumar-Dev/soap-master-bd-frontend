<template>
  <div>
    <p class="uppercase">Soap Master BD</p>

    <UDropdown
      v-if="isLogin"
      :items="dropdownItems"
      :ui="{ item: { disabled: 'cursor-text select-text' } }"
      :popper="{ placement: 'bottom-start' }"
    >
      <UAvatar alt="user name" />

      <template #account="{ item }">
        <div class="text-left">
          <p>Signed in as</p>
          <p class="truncate font-medium text-gray-900 dark:text-white">
            {{ item.label }}
          </p>
        </div>
      </template>

      <template #item="{ item }">
        <span class="truncate">{{ item.label }}</span>

        <UIcon
          :name="item.icon"
          class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
        />
      </template>
    </UDropdown>

    <NuxtLink to="/auth/login" v-else> Login </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import error from "~/plugins/error";

const { isLogin, user, removeToken } = useAuthStore();
const toast = useToast();

const dropdownItems = [
  [
    {
      label: user?.email ?? "unknown",
      slot: "account",
      disabled: true,
    },
  ],

  [
    {
      label: "Sign out",
      icon: "i-heroicons-arrow-left-on-rectangle",
      click: async () => {
        await useApiFetch("/logout", {
          method: "POST",
        })
          .then(async (res) => {
            console.log("logout res", res);
            await removeToken();
            navigateTo({ path: "/", query: { status: "logout-successfull" } });
            location.reload();
            toast.add({
              title: "Logout Successfully Done..",
            });
          })
          .catch((error) => {
            toast.add({
              title: error.data?.message,
            });
          });
      },
    },
  ],
];
</script>