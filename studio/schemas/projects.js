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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200),
      },
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
      name: 'images',
      title: 'Plaatjes',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
  ],
};
