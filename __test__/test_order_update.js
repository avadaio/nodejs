const AvadaEmailMarketing = require('../src');

(async () => {
  try {
    /** @type AvadaEmailMarketing */
    const avadaio = new AvadaEmailMarketing({
      appId: 'tTg4lFZkpV6vH74n6UB6',
      apiKey: 'd3af7f191829062d877871d4b28c3445'
    });
    const resp = await avadaio.order.update({
      id: 123,
      email: 'john4545@doe.io',
      status: 'completed',
      state: 'completed'
    });
    // const resp = await avadaio.makeRequest({
    //   endpoint: '/forms',
    //   method: 'GET'
    // });
    console.log(resp);
  } catch (e) {
    console.error(e);
  }
})();
