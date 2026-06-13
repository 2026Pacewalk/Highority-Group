import { crudRouter } from '../lib/crud.js';

export default crudRouter({
  table: 'partners',
  idCol: 'id',
  columns: ['name', 'logo', 'alt', 'sort_order'],
});
