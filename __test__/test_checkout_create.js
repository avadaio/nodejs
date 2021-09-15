const AVADA = require('../dist');

(async () => {
  try {
    /** @type AvadaEmailMarketing */
    const avadaio = new AVADA({
      appId: 'tTg4lFZkpV6vH74n6UB6',
      apiKey: 'd3af7f191829062d877871d4b28c3445'
    });
    const resp = await avadaio.checkout.update({
      id: 349857984735,
      abandoned_checkout_url: 'https://amce.io/mpsmtp/abandonedcart/recover/token/xxxxxxxxxx/',
      email: 'john@doe.io',
      created_at: '2020-12-01 04:30:55',
      updated_at: '2020-12-01 04:30:55',
      completed_at: '2020-12-01 04:30:55',
      phone: '0123456789',
      customer_locale: '',
      line_items: [
        {
          type: 'simple',
          title: 'T-shirt',
          price: 299,
          quantity: 1,
          sku: 't-shirt',
          product_id: '29',
          image: 'https://acme.io/pub/media/catalog/product/a/f/tshirt.png',
          line_price: 299,
          frontend_link: 'https://acme.io/pub/media/catalog/product/a/f/tshirt.png'
        }
      ],
      subtotal_price: '299',
      total_tax: '0',
      total_price: '299',
      currency: '$',
      presentment_currency: 'USD',
      customer: {
        id: 0,
        email: null,
        name: '',
        first_name: 'null',
        last_name: 'null'
      },
      shipping_address: {
        name: 'Jade ',
        last_name: 'Jack',
        phone: '0123456789',
        company: 'AVADA',
        country_code: '100000',
        zip: ' ',
        address1: '',
        address2: ' ',
        city: 'NY',
        province_code: '',
        province: ''
      }
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
