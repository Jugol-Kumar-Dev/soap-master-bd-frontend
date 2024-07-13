import { defineEventHandler, getRouterParams } from 'h3'
import { useApiFetch } from '~/composables/useApi'

export default defineEventHandler(async (event) => {
  const params = getRouterParams(event)
  const course = await useApiFetch(`/read-lesson/${params?.id}`)
  return course
})