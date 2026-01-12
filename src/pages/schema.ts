import { defineType, defineField, defineArrayMember } from 'sanity'
import blockContent from '../blockContent'

// --- Shared Objects ---

const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'subtitle', type: 'text', title: 'Subtitle/Description' }),
    defineField({ name: 'image', type: 'image', title: 'Background Image', options: { hotspot: true } }),
  ],
})

const seo = defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({ name: 'metaTitle', type: 'string', title: 'Meta Title' }),
    defineField({ name: 'metaDescription', type: 'text', title: 'Meta Description' }),
  ],
})

// --- Page Schemas ---

const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Page: About',
  type: 'document',
  fields: [
    defineField({ name: 'hero', type: 'hero' }),
    defineField({
      name: 'mainSection',
      title: 'Main Section (Who We Are)',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'content', type: 'blockContent' }),
        defineField({ name: 'image', type: 'image' }),
      ],
    }),
    defineField({
      name: 'vision',
      title: 'Vision',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'content', type: 'text' }),
      ],
    }),
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'content', type: 'text' }),
      ],
    }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
})

const careersPage = defineType({
  name: 'careersPage',
  title: 'Page: Careers',
  type: 'document',
  fields: [
    defineField({ name: 'hero', type: 'hero' }),
    defineField({
      name: 'benefits',
      title: 'Benefits Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({
          name: 'items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'description', type: 'text' }),
                defineField({ name: 'icon', type: 'string', title: 'Icon Name (e.g. Globe, Heart)' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'image', type: 'image' }),
      ],
    }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
})

const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Page: Services (Landing)',
  type: 'document',
  fields: [
    defineField({ name: 'hero', type: 'hero' }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
})

const legalPage = defineType({
  name: 'legalPage',
  title: 'Page: Legal (Terms/Privacy)',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'lastUpdated', type: 'datetime' }),
    defineField({ name: 'content', type: 'blockContent' }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
})

// --- Data Types ---

const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'description', type: 'text', title: 'Short Description' }),
    defineField({ name: 'content', title: 'Main Content', type: 'blockContent' }),
    defineField({ name: 'mainImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'icon', type: 'string', title: 'Icon Name (Lucide)' }),
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At', initialValue: () => new Date().toISOString() }),
  ],
})

export const schemaTypes = [
  // Objects
  hero,
  seo,
  blockContent,
  // Pages
  aboutPage,
  careersPage,
  servicesPage,
  legalPage,
  // Documents
  service,
]