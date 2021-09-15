const AvadaEmailMarketing = require('../src');

(async () => {
  try {
    /** @type AvadaEmailMarketing */
    const avadaio = new AvadaEmailMarketing({
      appId: 'tTg4lFZkpV6vH74n6UB6',
      apiKey: 'd3af7f191829062d877871d4b28c3445'
    });
    const resp = await avadaio.contact.bulk([
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
        tags: 'Email Marketting'
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
        tags: 'Email Marketting'
      }
    ]);
    console.log(resp);
  } catch (e) {
    console.error(e);
  }
})();
