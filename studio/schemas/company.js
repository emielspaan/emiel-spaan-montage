export default {
  name: 'company',
  title: 'Persoonlijke gegevens',
  type: 'document',
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: 'telephone',
      title: 'Telefoonnummer',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Adres',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Naam',
      type: 'string',
    },
  ],
};
