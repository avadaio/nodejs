const DEFAULT_API_URL = 'app.avada.io';

class AvadaEmailMarketing {
  /**
   * Constructor
   *
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
}

module.exports = AvadaEmailMarketing;