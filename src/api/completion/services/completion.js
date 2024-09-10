'use strict';

/**
 * completion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::completion.completion');
