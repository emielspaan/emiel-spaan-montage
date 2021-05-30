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
      type: 'image',
    },
    {
      name: 'description',
      title: 'Project omschrijving',
      type: 'image',
    },
    {
      name: 'image',
      title: 'Project plaatje 1',
      type: 'image',
    },
    {
      name: 'image',
      title: 'Project plaatje 2',
      type: 'image',
    },
    {
      name: 'image',
      title: 'Project plaatje 3',
      type: 'image',
    },
    {
      name: 'image',
      title: 'Project plaatje 4',
      type: 'image',
    },
  ],
};
