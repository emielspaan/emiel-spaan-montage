export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'title',
      title: 'Project naam',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Project omschrijving',
      type: 'array',
      of: [
        { type: 'block' },
      ],
    },
    {
      name: 'plaatje1',
      title: 'Plaatje 1',
      type: 'image',
    },
    {
      name: 'plaatje2',
      title: 'Plaatje 2',
      type: 'image',
    },
    {
      name: 'plaatje3',
      title: 'Plaatje 3',
      type: 'image',
    },
    {
      name: 'plaatje4',
      title: 'Plaatje 4',
      type: 'image',
    },
  ],
};
