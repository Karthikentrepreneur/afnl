export const apiVersion =
  import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01'

export const dataset = assertValue(
  import.meta.env.VITE_SANITY_DATASET || 'production',
  'Missing environment variable: VITE_SANITY_DATASET'
)

export const projectId = assertValue(
  import.meta.env.VITE_SANITY_PROJECT_ID || '2mmbn49i',
  'Missing environment variable: VITE_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    console.warn(errorMessage)
    return undefined as unknown as T
  }
  return v
}