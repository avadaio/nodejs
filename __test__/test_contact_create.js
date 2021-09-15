const AVADA = require('../dist');

(async () => {
  try {
    /** @type AvadaEmailMarketing */
    const avadaio = new AVADA({
      appId: 'tTg4lFZkpV6vH74n6UB6',
      apiKey: 'd3af7f191829062d877871d4b28c3445'
    });
    const resp = await avadaio.contact.create({
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      email: 'johndoe@example.com',
      firstName: 'John',
      isSubscriber: true,
      lastName: 'Doe',
      phoneNumber: '+16194892038',
      phoneNumberCountry: 'US',
      source: 'shopify',
      orderCount: 0,
      totalSpent: 0,
      country: 'United States',
      countryCode: 'US',
      city: '',
      address: '',
      tags: 'Email Marketing'
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
