import { useRuntimeConfig } from '#app'
import { useAuthStore } from '~/stores/useAuth'

export const useApiFetch = async (url: string, options = {}) => {
  const config = useRuntimeConfig()
  const authStore = useAuthStore()
  const defaultOptions = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authStore?.user?.token}`
    },
  }
  
  const mergedOptions = { ...defaultOptions, ...options }
  const response = await $fetch(config.public.apiUrl + config.public.endpoints.apiPrefix + url, mergedOptions)
  return response
}
