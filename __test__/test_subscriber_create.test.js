const AVADA = require('../dist');
const config = require('./config');

test('Testing AVADA subscriber create resource...', async () => {
  /** @type AvadaEmailMarketing */
  const avadaio = new AVADA(config);
  const {success} = await avadaio.subscriber.add({
    email: 'johndoe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    tags: 'test1, test2'
  });
  expect(success).toBe(true);
});
