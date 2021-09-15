const AvadaEmailMarketing = require('../src');

(async () => {
  try {
    /** @type AvadaEmailMarketing */
    const avadaio = new AvadaEmailMarketing({
      appId: 'tTg4lFZkpV6vH74n6UB6',
      apiKey: 'd3af7f191829062d877871d4b28c3445'
    });
    const resp = await avadaio.review.submit({
      email: 'anhnt@mageplaza.com',
      customer: {
        firstName: 'Test',
        lastName: 'Test',
        reviewCount: 7
      },
      review: {
        rating: 5,
        author: 'John Doe',
        title: 'Maecenas nec tincidunt libero',
        content:
          'Vestibulum pellentesque gravida nisl. Aliquam commodo ligula urna, ut consectetur augue tincidunt ac. Nam maximus mi a ligula luctus egestas.',
        productTitle: 'Clay Plant Pot',
        productUrl: 'https://thomas-photo-review-production.myshopify.com/products/clay-plant-pot',
        productImage: [
          'https://cdn.shopify.com/s/files/1/0514/6722/3220/products/single-sprout-in-a-pot_925x_de08e14a-5fb2-4174-b210-e9608417e5c9_1024x1024@2x.jpg?v=1606815016'
        ],
        productId: 6101006319796,
        photoIncluded: 'no',
        photoUrl:
          'https://cdn.shopify.com/s/files/1/0457/4098/2438/products/black-bag-over-the-shoulder_925x_112781d2-f0b3-43de-97ea-121b020bf0a0_1024x1024@2x.jpg?v=1599548060',
        updateReviewPhotoUrl:
          'https://thomas-photo-review-production.myshopify.com/products/clay-plant-pot'
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
