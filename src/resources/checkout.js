class Checkout {
  /**
   * @constructor
   *
   * @param {AvadaEmailMarketing} avadaio
   */
  constructor(avadaio) {
    this.avadaio = avadaio;
  }

  /**
   * @description Create AVADA Email Marketing new checkout
   *
   * @param {AvadaEmailMarketing.CheckoutInputData} data
   * @returns {Promise<AvadaEmailMarketing.ApiResponse>}
   */
  create(data) {
    return this.avadaio.makeRequest({
      method: 'POST',
      endpoint: '/checkouts',
      body: {
        data
      }
    });
  }

  /**
   * @description Update AVADA Email Marketing contact data
   *
   * @param {AvadaEmailMarketing.ContactInputData} data
   * @returns {Promise<AvadaEmailMarketing.ApiResponse>}
   */
  update(data) {
    return this.avadaio.makeRequest({
      method: 'PUT',
      endpoint: '/customers',
      body: {
        data
      }
    });
  }

  /**
   * @description Create AVADA Email Marketing new contacts in bulk
   *
   * @param {AvadaEmailMarketing.ContactInputData[]} data
   * @returns {Promise<*>}
   */
  bulk(data) {
    return this.avadaio.makeRequest({
      method: 'POST',
      endpoint: '/customers/bulk',
      body: {
        data
      }
    });
  }
}

module.exports = Checkout;
