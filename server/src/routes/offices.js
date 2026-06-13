import { crudRouter } from '../lib/crud.js';

export default crudRouter({
  table: 'offices',
  idCol: 'id',
  columns: [
    'id',
    'type',
    'name',
    'address',
    'city',
    'phones',
    'emails',
    'map_query',
    'city_image',
    'icon',
    'sort_order',
  ],
});
