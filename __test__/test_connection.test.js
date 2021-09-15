const AVADA = require('../dist');
const config = require('./config');

test('Testing AVADA connection...', async () => {
  /** @type AvadaEmailMarketing */
  const avadaio = new AVADA(config);
  const {success} = await avadaio.connection.test();
  expect(success).toBe(true);
});
