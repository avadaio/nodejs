# AVADA Email Marketing API - NodeJS

AVADA Email Marketing API bindings for NodeJS to make it easier for developer to connect with AVADA Marketing Automation platform.

## Table of Contents

- [Installation](#installation)
- [API](#api)
- [Examples](#examples)
- [Support](#support)

## Installation

```bash
npm install --save avadaio-node
```

## API

Our API documentation is located at: [AVADA API Documentation](https://documenter.getpostman.com/view/10585474/TVmPAHH9#654363ae-7cd2-4236-a5e1-818ab87ecde0). You can see our API for more reference.

### Init instance

```js
const AVADA = require('avadaio-node');
const avadaio = new AVADA({
  appId: '[YOUR_APP_ID]',
  apiKey: '[YOUR_API_KEY]'
});
```

This module exports a constructor function which takes an options object.

### `AVADA(options)`

Creates a new `AVADA` instance.

#### Arguments

- `options` - Required - A plain JavaScript object that contains the
  configuration options.

#### Options

- `appId` - Required
- `apiKey` - Required

You can obtain your `appId` and `apiKey` after creating an account with AVADA and go to the [Manage Keys page]('https://app.avada.io/manage/keys)

#### Return value

A `AVADA` instance.

#### Exceptions

Throws an `Error` exception if the required options are missing.

## Resources

Every resource is accessed via your `avadaio` instance:

```js
const avadaio = new AVADA({
  appId: '[YOUR_APP_ID]',
  apiKey: '[YOUR_API_KEY]'
});

// avadaio.<resource_name>.<method_name>
```

Each method returns a `Promise` that resolves with the result of:

- `success` - boolean
- `data` - any - optional
- `message` - string

```js
(async () => {
  try {
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
    console.log(resp);
  } catch (err) {
    console.error(err);
  }
})();
```

The JSON return from the API is like this:

```json
{"success": true, "message": "Hook create/update customers complete"}
```

This behavior is the same for all resources.

## Examples

### Test connection

```js
const resp = await avadaio.connection.test();
if (resp.success) {
  console.log('Connection established');
}
```

More examples can be found in the `__test__` folder in the project source code.

## Available resources and methods

- connection
  - `test()` Test the connection using your `apiKey` and `appId` 
- form
  - `list()` Get a list of inline forms to integrate AVADA Forms into your page builder
- contact
  - `create(data)` Create a new contact in your AVADA admin
  - `update(data)` Update an existing contact in your AVADA admin
  - `bulk(data)` Create new contacts in your AVADA admin in bulk
- subscriber
  - `add(data)` Add a new contact to your contact list as a subscriber. Trigger the New Subscriber automation event.
- review
  - `submit(data)` Trigger the submit of a new review on your store. Trigger On new review automation event.
- checkout
  - `create(data)` Trigger a new checkout event to AVADA, which will be used for the Abandoned Cart Automation.
  - `update(data)` Trigger a update to a checkout event to AVADA. For example, update checkout email so that the cart will be qualified for Abandoned Cart Email.
  - `remove(id)` Remove a checkout.
- order
  - `create(data)` Trigger a new order event to AVADA. Trigger New Order automation event.
  - `update(data)` Update an existing order.
  - `complete(data)` Complete an order. Trigger Cross-sell, Up-sell automation events.
  - `bulk(data)` Sync your orders to AVADA using bulk order inserts.
  - `refund(data)` Trigger a refund event to AVADA
  - `invoice(data)` Trigger a fulfillment event to AVADA
  - `ship(data)` Trigger a shipping event to AVADA

The detailed data param for each resource already defined in the `index.d.ts` file which allow suggestion during development process in IDE

## Custom events

### avada.trigger(eventKey, data)
Trigger an custom event to send automation emails
```js
  avada.trigger(eventKey, {
    email:'johnsmith@email.com',
    customer: {
      firstName: 'John',
      lastName: 'Smith',
      orderCount: 2,
      totalSpent: 150,
      country: 'US',
      phoneNumber: '12986038xxx',
      //...more
    },
    //...more
  });
```

## Support

If you need any support, you can reach to us within our customer chat support inside your [app]('https://app.avada.io'')
