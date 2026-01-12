import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
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
        defineField({ name: 'ctaText', type: 'string', title: 'CTA Button Text' }),
        defineField({ name: 'ctaLink', type: 'string', title: 'CTA Button Link' }),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Features Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Section Title' }),
        defineField({
          name: 'items',
          title: 'Feature Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'description', type: 'text', title: 'Description' }),
                defineField({ name: 'icon', type: 'string', title: 'Icon Name (Lucide)' }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})