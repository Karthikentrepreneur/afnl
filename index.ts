import { type SchemaTypeDefinition } from 'sanity'
import blockContent from './blockContent'
import legalPage from './legalPage'
import career from './career'
import location from './location'
import careersPage from './careersPage'
import page from './page'
import service from './service'
import teamMember from './teamMember'
import homePage from './homePage'
import aboutPage from './aboutPage'
import contactPage from './contactPage'
import siteSettings from './siteSettings'
import seo from './seo'
import servicesPage from './servicesPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    legalPage,
    career,
    location,
    careersPage,
    page,
    service,
    teamMember,
    homePage,
    aboutPage,
    contactPage,
    siteSettings,
    seo,
    servicesPage,
  ],
}