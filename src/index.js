const crypto = require('crypto');
const fetch = require('node-fetch');
const resources = require('./resources');

/**
 * @description
 * Default API URL setting for the package. It may change in the future.
 *
 * @type {string}
 */
const DEFAULT_API_URL = 'app.avada.io';

/**
 * @type AvadaEmailMarketing
 */
class AvadaEmailMarketing {
  /**
   * Constructor
   * @constructor AvadaEmailMarketing
   * @param {string} appId
   * @param {string} apiKey
   * @param {string} apiUrl
   */
  constructor({appId, apiKey, apiUrl = DEFAULT_API_URL} = {}) {
    if (!apiKey || !appId) {
      throw new Error('Missing or invalid options');
    }
    this.appId = appId;
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
  }

  /**
   * @private
   *
   * Private functions for getting API url
   * @param endpoint
   * @returns {string}
   */
  getApiUrl(endpoint) {
    return `https://${this.apiUrl}/app/api/v1${endpoint}`;
  }

  getHmac(body, noHash = false) {
    if (!noHash) {
      return crypto
        .createHmac('sha256', this.apiKey)
        .update(JSON.stringify(body))
        .digest('base64');
    }

    return this.apiKey;
  }

  /**
   * Helper to make request to AVADA API
   *
   * @param {object} body
   * @param {string} endpoint
   * @param {string} method
   * @param {boolean} isTest
   * @returns {Promise<*>}
   */
  async makeRequest({endpoint, method = 'POST', isTest = false, body = {}}) {
    const url = this.getApiUrl(endpoint);
    const headers = {
      'X-EmailMarketing-App-Id': this.appId,
      'X-EmailMarketing-Hmac-Sha256': this.getHmac(body, method === 'GET')
    };
    if (method !== 'GET') {
      headers['Content-Type'] = 'application/json';
    }
    if (isTest) {
      headers['X-EmailMarketing-Connection-Test'] = true;
    }
    const options = {
      method: method,
      headers
    };
    if (!isEmpty(body)) {
      options['body'] = JSON.stringify(body);
    }
    const resp = await fetch(url, options);

    return resp.json();
  }
}

function isEmpty(obj) {
  return [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
}

resources.registerAll(AvadaEmailMarketing);

module.exports = AvadaEmailMarketing;
