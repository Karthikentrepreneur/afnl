// This file can be used to hold environment variables.
// Remember to add your Sanity project ID.

export const apiVersion = process.env.SANITY_STUDIO_API_VERSION || '2024-01-01'
export const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
export const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your_project_id_here' // <-- ADD YOUR PROJECT ID HERE
export const useCdn = false