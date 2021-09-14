class Form {
  /**
   * @constructor
   *
   * @param {AvadaEmailMarketing} avadaio
   */
  constructor(avadaio) {
    this.avadaio = avadaio;
  }
  list() {
    return this.avadaio.makeRequest({method: 'GET', endpoint: '/forms'});
  }
}

module.exports = Form;
