const AVADA = require('../dist');
const config = require('./config');

test('Testing AVADA contact update resource...', async () => {
  /** @type AvadaEmailMarketing */
  const avadaio = new AVADA(config);
  const {success} = await avadaio.contact.update({
    description: 'ABC',
    email: 'johndoe@example.com',
    firstName: 'John',
    isSubscriber: true,
    lastName: 'Doe',
    phoneNumber: '+16194892038',
    phoneNumberCountry: 'US',
    source: 'magento',
    orderCount: 0,
    totalSpent: 0,
    country: 'United States',
    countryCode: 'US',
    city: '',
    address: '',
    tags: 'Email Marketing'
  });
  expect(success).toBe(true);
});
