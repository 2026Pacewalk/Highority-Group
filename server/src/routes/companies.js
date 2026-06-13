import { crudRouter } from '../lib/crud.js';

export default crudRouter({
  table: 'companies',
  idCol: 'id',
  columns: [
    'id',
    'slug',
    'name',
    'tagline',
    'location',
    'description',
    'banner',
    'services',
    'industries',
    'markets',
    'icon',
    'color',
    'email',
    'sort_order',
  ],
});
