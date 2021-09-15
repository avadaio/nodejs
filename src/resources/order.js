class Order {
  /**
   * @constructor
   *
   * @param {AvadaEmailMarketing} avadaio
   */
  constructor(avadaio) {
    this.avadaio = avadaio;
  }

  /**
   * @description Create AVADA Email Marketing new order
   *
   * @param {AvadaEmailMarketing.OrderInputData} data
   * @returns {Promise<AvadaEmailMarketing.ApiResponse>}
   */
  create(data) {
    return this.avadaio.makeRequest({
      method: 'POST',
      endpoint: '/orders',
      body: {
        data
      }
    });
  }

  /**
   * @description Update AVADA Email Marketing existed order
   *
   * @param {AvadaEmailMarketing.OrderInputData} data
   * @returns {Promise<AvadaEmailMarketing.ApiResponse>}
   */
  update(data) {
    return this.avadaio.makeRequest({
      method: 'PUT',
      endpoint: '/orders',
      body: {
        data
      }
    });
  }

  /**
   * @description Complete AVADA Email Marketing new order
   *
   * @param {AvadaEmailMarketing.OrderCreateInputData} data
   * @returns {Promise<AvadaEmailMarketing.ApiResponse>}
   */
  complete(data) {
    return this.avadaio.makeRequest({
      method: 'POST',
      endpoint: `/orders/complete`,
      body: {
        data
      }
    });
  }

  /**
   * @description Create AVADA Email Marketing new orders in bulk
   *
   * @param {AvadaEmailMarketing.OrderCreateInputData[]} data
   * @returns {Promise<AvadaEmailMarketing.ApiResponse>}
   */
  bulk(data) {
    return this.avadaio.makeRequest({
      method: 'POST',
      endpoint: `/orders/bulk`,
      body: {
        data
      }
    });
  }
}

module.exports = Order;
