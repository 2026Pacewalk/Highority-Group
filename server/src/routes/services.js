import { crudRouter } from '../lib/crud.js';

export default crudRouter({
  table: 'services',
  idCol: 'slug',
  columns: [
    'slug',
    'title',
    'subtitle',
    'image',
    'intro',
    'benefits',
    'process',
    'industries',
    'faqs',
    'related_slugs',
    'sort_order',
  ],
});
