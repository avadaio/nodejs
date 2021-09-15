const AVADA = require('../dist');
const config = require('./config');

test('Testing AVADA order update resource...', async () => {
  /** @type AvadaEmailMarketing */
  const avadaio = new AVADA(config);
  const {success} = await avadaio.order.update({
    id: 123,
    email: 'john4545@doe.io',
    status: 'completed',
    state: 'completed'
  });
  expect(success).toBe(true);
});
