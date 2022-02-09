export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'approved',
        title: 'Approved',
        type: 'boolean',
        description: 'Comments wont show without approval',
      },
      {
        name: 'email',
        type: 'string',
        },
      {
        name: 'comment',
        type: 'text',
        },
      {
        name: 'post',
        type: 'reference',
        to: [{type: "post"}],
        },

    ],
};