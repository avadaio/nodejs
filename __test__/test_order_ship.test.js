const AVADA = require('../dist');
const config = require('./config');

test('Testing AVADA order ship resource...', async () => {
  /** @type AvadaEmailMarketing */
  const avadaio = new AVADA(config);
  const {success} = await avadaio.order.ship({
    id: 2937227935908,
    order_id: 123,
    email: 'john@doe.io',
    status: 'subcribe',
    customer: {
      id: '01',
      email: 'john@doe.io',
      first_name: 'John',
      last_name: 'Doe',
      phone: '+123456789'
    },
    currency: 'USD',
    created_at: '2020-11-24T03:13:34-05:00',
    updated_at: '2020-11-29T21:51:56-05:00',
    line_items: [
      {
        type: 'downloadable',
        name: 'Affiliate Ultimate',
        title: 'Affiliate Ultimate',
        price: 299,
        quantity: 3,
        sku: 'm2-affiliate-ultimate',
        product_id: '29',
        image: 'https://acme.io/pub/media/catalog/product/a/f/affiliate_2.png',
        frontend_link: 'https://acme.io/m2-affiliate-ultimate.html',
        line_price: 299,
        bundle_items: []
      }
    ],
    order_status_url:
      'https://acme.myshopify.com/44268093604/orders/7af1f488f1a488e49d78cbcb6f9b054f/authenticate?key=46909721ea600fdddaa9c837ee6135f5',
    track: {},
    tracking_company: 'YunExpress',
    trackingNumber: 'YT2023201271001806',
    trackingUrl: ' https://www.yuntrack.com/Track/Detail/YT2023201271001806',
    destination: {
      first_name: 'John',
      last_name: 'Holy',
      address1: '',
      city: 'Chicago',
      zip: '12345',
      country: 'USA',
      phone: ''
    }
  });
  expect(success).toBe(true);
});
