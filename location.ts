import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'location',
  title: 'Office Location',
  type: 'document',
  fields: [
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'coordinates',
      title: 'Coordinates',
      type: 'object',
      fields: [
        { name: 'lat', type: 'number', title: 'Latitude' },
        { name: 'lng', type: 'number', title: 'Longitude' },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact Info',
      type: 'object',
      fields: [
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'phone', type: 'string', title: 'Phone' },
      ],
    }),
  ],
})