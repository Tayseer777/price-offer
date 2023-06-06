module.exports = {
    // ...
    // 'link-button': {
    //   enabled: true,
    //   resolve: './src/plugins/link-button'
    // },
    'preview-button': {
      config: {
        contentTypes: [
          {
            uid: 'api::offer.offer',
            draft: {
              url: 'http://localhost:1337/api/offers',
              query: {
                type: 'offer',
                id: '{id}',
              },
            },
            published: {
              url: 'http://offers.vuedale.com/offers/{id}',
            },
          },
          // {
          //   uid: 'api::client.client',
          //   draft: {
          //     url: 'http://localhost:1337/api/clients',
          //     query: {
          //       type: 'client',
          //       id: '{id}',
          //     },
          //   },
          //   published: {
          //     url: 'http://offers.vuedale.com/client/{slug}',
          //   },
          // },
        ],
      },
    },
    // ...
  }