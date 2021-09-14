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

  /**
   * Helper to make request to AVADA API
   *
   * @param {object} body
   * @param {string} endpoint
   * @param {boolean} isTest
   * @returns {Promise<*>}
   */
  async makeRequest({body, endpoint, isTest = false}) {
    const hmac = crypto
      .createHmac('sha256', this.apiKey)
      .update(JSON.stringify(body))
      .digest('base64');

    const url = this.getApiUrl(endpoint);
    const headers = {
      'Content-Type': 'application/json',
      'X-EmailMarketing-App-Id': this.appId,
      'X-EmailMarketing-Hmac-Sha256': hmac,
      'X-EmailMarketing-Connection-Test': true
    };
    if (isTest) {
      headers['X-EmailMarketing-Connection-Test'] = true;
    }
    const resp = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers
    });

    return resp.json();
  }
}

resources.registerAll(AvadaEmailMarketing);

module.exports = AvadaEmailMarketing;
