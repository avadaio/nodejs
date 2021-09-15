const AvadaEmailMarketing = require('../src');

(async () => {
  try {
    /** @type AvadaEmailMarketing */
    const avadaio = new AvadaEmailMarketing({
      appId: 'tTg4lFZkpV6vH74n6UB6',
      apiKey: 'd3af7f191829062d877871d4b28c3445'
    });
    const resp = await avadaio.contact.update({
      description: 'ABC',
      email: 'rainy@avada.io',
      firstName: 'Changed',
      isSubscriber: true,
      lastName: 'Rainy',
      phoneNumber: '+16194892038',
      source: "magento",
      phoneNumberCountry: "US",
      orderCount: 0,
      totalSpent: 0,
      country: 'United States',
      countryCode: 'US',
      city: '',
      address: '',
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
