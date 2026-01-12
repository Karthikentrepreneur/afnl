import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'subtitle', type: 'text', title: 'Subtitle' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Hero Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'mission',
      title: 'Mission Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'content', type: 'text', title: 'Content' }),
        defineField({ name: 'image', type: 'image', title: 'Image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'vision',
      title: 'Vision Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'content', type: 'text', title: 'Content' }),
      ],
    }),
  ],
})