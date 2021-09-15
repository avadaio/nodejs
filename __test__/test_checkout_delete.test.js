const AVADA = require('../dist');
const config = require('./config');

test('Testing AVADA checkout delete resource...', async () => {
  /** @type AvadaEmailMarketing */
  const avadaio = new AVADA(config);
  const {success} = await avadaio.checkout.remove(349857984735);
  expect(success).toBe(true);
});
