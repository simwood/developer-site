module.exports = {
  someSidebar: {
    "Hosted PBX": [
      {
        type: 'doc',
        id: 'direct/introduction',
      },
      {
        type: 'category',
        label: 'APIs',
        items: ['direct/api/v1'],
      },
      {
        type: 'category',
        label: 'Clients',
        items: ['direct/clients/node', 'direct/clients/python', 'direct/clients/go'],
      },
    ],

    "Carrier Services": [
      {
        type: 'doc',
        id: 'wholesale/introduction',
      },
      {
        type: 'category',
        label: 'APIs',
        items: ['wholesale/api/v3.20'],
      },
    ]

  },
};
