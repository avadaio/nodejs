class Connection {
  /**
   * @constructor
   *
   * @param {AvadaEmailMarketing} avadaio
   */
  constructor(avadaio) {
    this.avadaio = avadaio;
  }
  test() {
    return this.avadaio.makeRequest({endpoint: '/connects', isTest: true});
  }
}

module.exports = Connection;
