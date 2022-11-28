// STAC relation types

// STAC hierarchical
export const stacHierarchy = [
  'child',
  'collection',
  'item',
  'parent',
  'root',
  'self',
];

// STAC API Pagination
export const stacPagination = [
  'first',
  'last',
  'next',
  'prev',
  'previous',
];

export const stacBrowserNavigatesTo = [
  'canonical', // Links to other catalogs or items v
  'related',
  'derived_from',
  'latest-version', // version extension v
  'predecessor-version',
  'successor-version',
  'source', // label extension
].concat(stacHierarchy).concat(stacPagination);

export const stacBrowserSpecialHandling = [
  'conformance', // API related v
  'data',
  'items',
  'queryables',
  'search',
  'icon', // Other v
  'license',
].concat(stacHierarchy).concat(stacPagination);

// OGC APIs
export const ogcRelPrefix = 'http://www.opengis.net/def/rel/ogc/1.0/';