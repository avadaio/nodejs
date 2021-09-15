class Review {
  /**
   * @constructor
   *
   * @param {AvadaEmailMarketing} avadaio
   */
  constructor(avadaio) {
    this.avadaio = avadaio;
  }

  /**
   * @description Trigger review submit input data
   * @param {AvadaEmailMarketing.ReviewSubmitInputData} data
   *
   * @returns {Promise<AvadaEmailMarketing.ApiResponse>}
   */
  submit(data) {
    return this.avadaio.makeRequest({
      method: 'POST',
      endpoint: '/triggers/review_submit',
      body: {data},
      isTrigger: true
    });
  }
}

module.exports = Review;
