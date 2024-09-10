'use strict';

/**
 * completion controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::completion.completion');
