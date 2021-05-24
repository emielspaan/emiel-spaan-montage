export default {
  name: 'page',
  title: 'Home page',
  type: 'document',
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'heroTitle',
      title: 'Titel',
      type: 'string',
    },
    {
      name: 'heroDesciption',
      title: 'Grote Tekst',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Plaatje',
      type: 'image',
    },
    {
      name: 'montageTitle',
      title: 'Montage titel',
      type: 'string',
    },
    {
      name: 'montageDescription',
      title: 'Montage tekst',
      type: 'text',
    },
    {
      name: 'montageImage',
      title: 'Plaatje montage',
      type: 'image',
    },
    {
      name: 'verfSpuitenTitle',
      title: 'Verfspuiten titel',
      type: 'string',
    },
    {
      name: 'verfSpuitenDescription',
      title: 'Verfspuiten tekst',
      type: 'text',
    },
    {
      name: 'verfSpuitenImage',
      title: 'Plaatje verfspuiten',
      type: 'image',
    },
  ],
};
