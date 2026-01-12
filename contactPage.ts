import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'subtitle', type: 'text', title: 'Subtitle' }),
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({ name: 'email', type: 'string', title: 'Email' }),
        defineField({ name: 'phone', type: 'string', title: 'Phone' }),
        defineField({ name: 'address', type: 'text', title: 'Address' }),
      ],
    }),
    defineField({
      name: 'offices',
      title: 'Offices',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'city', type: 'string', title: 'City' }),
            defineField({ name: 'cr', type: 'string', title: 'CR Number' }),
            defineField({ name: 'address', type: 'text', title: 'Address' }),
            defineField({ name: 'phone', type: 'string', title: 'Phone' }),
            defineField({ name: 'email', type: 'string', title: 'Email' }),
            defineField({ name: 'mapUrl', type: 'url', title: 'Google Maps Embed URL' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})