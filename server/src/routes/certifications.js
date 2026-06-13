import { crudRouter } from '../lib/crud.js';

export default crudRouter({
  table: 'certifications',
  idCol: 'id',
  columns: [
    'id',
    'title',
    'subtitle',
    'issuer',
    'description',
    'image',
    'icon',
    'sort_order',
  ],
});
