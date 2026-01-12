import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId, useCdn } from './env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  // A token with write access is required for authenticated requests
  // token: process.env.SANITY_SECRET_TOKEN
})