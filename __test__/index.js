const AVADAIO = require('../src');

(async () => {
  try {
    const avadaio = new AVADAIO({
      appId: 'tTg4lFZkpV6vH74n6UB6',
      apiKey: 'd3af7f191829062d877871d4b28c3445'
    });
    const resp = await avadaio.makeRequest({body: {}, endpoint: '/connects', isTest: true});
    console.log(resp);
  } catch (e) {
    console.error(e);
  }
})();
