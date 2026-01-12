import { type SchemaTypeDefinition } from 'sanity'
import blockContent from './blockContent'
import legalPage from './legalPage'
import career from './career'
import location from './location'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, legalPage, career, location],
}