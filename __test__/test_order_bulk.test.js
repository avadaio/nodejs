const AVADA = require('../dist');
const config = require('./config');

test('Testing AVADA checkout order bulk create resource...', async () => {
  /** @type AvadaEmailMarketing */
  const avadaio = new AVADA(config);
  const {success} = await avadaio.order.bulk([
    {
      id: 123,
      email: 'john@doe.io',
      status: 'subscribe',
      customer: {
        id: '01',
        email: 'john@doe.io',
        first_name: 'John',
        last_name: 'Doe',
        phone: ''
      },
      currency: 'USD',
      created_at: '2020-11-25T21:05:24-05:00',
      updated_at: '2020-11-25T21:05:25-05:00',
      line_items: [
        {
          type: 'downloadable',
          title: 'Affiliate Ultimate',
          name: 'Sofa',
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
        'https://linhnguyen11.myshopify.com/44268093604/orders/7af1f488f1a488e49d78cbcb6f9b054f/authenticate?key=46909721ea600fdddaa9c837ee6135f5',
      subtotal_price: '299',
      total_price: '299',
      total_tax: '0',
      total_weight: '0',
      total_discounts: '0'
    }
  ]);
  expect(success).toBe(true);
});
