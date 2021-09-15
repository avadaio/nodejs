const AVADA = require('../dist');
const config = require('./config');

test('Testing AVADA contact bulk create resource...', async () => {
  /** @type AvadaEmailMarketing */
  const avadaio = new AVADA(config);
  const {success} = await avadaio.contact.bulk([
    {
      description: '',
      email: 'john@doe.io',
      firstName: 'John',
      isSubscriber: true,
      lastName: 'Doe',
      phoneNumber: '+123465789',
      phoneNumberCountry: 'US',
      source: 'magento',
      orderCount: 0,
      totalSpent: 0,
      country: 'US',
      city: '',
      address: '',
      tags: 'Email Marketing'
    },
    {
      description: '',
      email: 'rainy@acme.io',
      firstName: 'Rainy',
      isSubscriber: true,
      lastName: 'Doe',
      phoneNumber: '+123465788',
      phoneNumberCountry: 'US',
      source: 'shopify',
      orderCount: 0,
      totalSpent: 0,
      country: 'US',
      city: '',
      address: '',
      tags: 'Email Marketing'
    }
  ]);
  expect(success).toBe(true);
});
