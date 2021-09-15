const AVADA = require('../dist');

(async () => {
  try {
    /** @type AvadaEmailMarketing */
    const avadaio = new AVADA({
      appId: 'tTg4lFZkpV6vH74n6UB6',
      apiKey: 'd3af7f191829062d877871d4b28c3445'
    });
    const resp = await avadaio.checkout.remove(349857984735);
    // const resp = await avadaio.makeRequest({
    //   endpoint: '/forms',
    //   method: 'GET'
    // });
    console.log(resp);
  } catch (e) {
    console.error(e);
  }
})();
