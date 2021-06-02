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
      of: [{ type: 'block' }],
    },
    {
      name: 'image1',
      title: 'Project plaatje 1',
      type: 'image',
    },
    {
      name: 'image2',
      title: 'Project plaatje 2',
      type: 'image',
    },
    {
      name: 'image3',
      title: 'Project plaatje 3',
      type: 'image',
    },
    {
      name: 'image4',
      title: 'Project plaatje 4',
      type: 'image',
    },
  ],
};
