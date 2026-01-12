import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'careersPage',
  title: 'Careers Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Background Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Section Title' }),
        defineField({ name: 'description', type: 'text', title: 'Section Description' }),
        defineField({
          name: 'items',
          title: 'Benefit Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'description', type: 'text', title: 'Description' }),
                defineField({
                  name: 'icon',
                  type: 'string',
                  title: 'Icon Name',
                  description: 'Name of the Lucide icon (e.g., Users, TrendingUp)',
                  options: {
                    list: ['Users', 'TrendingUp', 'Heart', 'Globe', 'Award', 'Target']
                  }
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Background Image',
          options: { hotspot: true },
        }),
      ],
    }),
  ],
})