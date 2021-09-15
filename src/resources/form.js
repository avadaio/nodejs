class Form {
  /**
   * @constructor
   *
   * @param {AvadaEmailMarketing} avadaio
   */
  constructor(avadaio) {
    this.avadaio = avadaio;
  }

  /**
   * @description List all inline form for page builder integration with AVADA forms
   *
   * @returns {Promise<AvadaEmailMarketing.ApiResponse>}
   */
  list() {
    return this.avadaio.makeRequest({method: 'GET', endpoint: '/forms'});
  }
}

module.exports = Form;
