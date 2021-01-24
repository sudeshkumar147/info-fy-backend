/**
 * Blog.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
      unique: true
    },
    body: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    }

  },

};

