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
   * @description Update AVADA Email Marketing existed checkout
   *
   * @param {AvadaEmailMarketing.CheckoutInputData} data
   * @returns {Promise<AvadaEmailMarketing.ApiResponse>}
   */
  update(data) {
    return this.avadaio.makeRequest({
      method: 'PUT',
      endpoint: '/checkouts',
      body: {
        data
      }
    });
  }

  /**
   * @description Delete AVADA Email Marketing existed checkout
   *
   * @param {number|string} id
   * @returns {Promise<*>}
   */
  remove(id) {
    return this.avadaio.makeRequest({
      method: 'DELETE',
      endpoint: `/checkouts?id=${id}`,
      body: {
        data: {}
      }
    });
  }
}

module.exports = Checkout;
