class Connection {
  /**
   * @constructor
   *
   * @param {AvadaEmailMarketing} avadaio
   */
  constructor(avadaio) {
    this.avadaio = avadaio;
  }

  /**
   * Test the connection to AVADA Email Marketing app
   * @returns {Promise<AvadaEmailMarketing.ApiResponse>}
   */
  test() {
    return this.avadaio.makeRequest({endpoint: '/connects', isTest: true});
  }
}

module.exports = Connection;
