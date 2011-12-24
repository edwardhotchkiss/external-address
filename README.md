
# Always - [![Build Status](https://secure.travis-ci.org/edwardhotchkiss/external-address.png)](http://travis-ci.org/edwardhotchkiss/external-address)

> NodeJS Module to Lookup your External (IP) Address

## Installation

```bash
$ npm install external-address
$ npm install
$ npm test
```

## Usage

```javascript

var external_address = require('external-address');

external_address.lookup(function(error, address){
  console.log(address);
});

/* EOF */
```

## Run Tests

``` bash
$ npm test
```

## License (MIT)

Copyright (c) 2011, Edward Hotchkiss.

## Author: [Edward Hotchkiss][0]

[0]: http://ingklabs.com/
