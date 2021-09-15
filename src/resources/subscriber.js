class Subscriber {
  /**
   * @constructor
   *
   * @param {AvadaEmailMarketing} avadaio
   */
  constructor(avadaio) {
    this.avadaio = avadaio;
  }

  /**
   * @description Create new subscriber in AVADA Email Marketing, trigger the automation event
   * @param {AvadaEmailMarketing.ContactInputData} data
   *
   * @returns {Promise<AvadaEmailMarketing.ApiResponse>}
   */
  add(data) {
    return this.avadaio.makeRequest({
      endpoint: '/subscribers',
      method: 'POST',
      body: data
    });
  }
}

module.exports = Subscriber;
