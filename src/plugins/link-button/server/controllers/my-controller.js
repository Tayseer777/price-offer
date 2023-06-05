'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('link-button')
      .service('myService')
      .getWelcomeMessage();
  },
});
