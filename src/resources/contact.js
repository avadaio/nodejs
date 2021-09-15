class Contact {
  /**
   * @constructor
   *
   * @param {AvadaEmailMarketing} avadaio
   */
  constructor(avadaio) {
    this.avadaio = avadaio;
  }

  /**
   *
   * @param {AvadaEmailMarketing.ContactCreateInputData} data
   * @returns {Promise<*>}
   */
  create(data) {
    return this.avadaio.makeRequest({
      method: 'POST',
      endpoint: '/customers',
      body: {
        data
      }
    });
  }
}

module.exports = Contact;
