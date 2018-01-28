# KiloWhat
## An npm package to keep track of your energy meters.

![Travis-ci status](https://travis-ci.org/artusvranken/kilowhat.svg?branch=master)

I created this npm package as a domain project for future usage in an application that you can use to keep track of your energy meters.

##
### User stories

As a user I want to:
- Add a meter ✔️
- Add a dial to a meter ✔️
- Add a reading to a dial ✔️
- Retrieve a list of readings of a dial ✔️
- Retrieve the latest (current) value of a dial ✔️
- Calculate my energy consumption for a certain dial between 2 periods

## Install

```sh
npm install -s kilowhat
```

## Usage

### Creating a new KiloWhat instance

```javascript
const { KiloWhat } = require('kilowhat');

let newKiloWhat = new KiloWhat();
```

### Adding a Meter

```javascript
let newMeter = new Meter();

newKiloWhat.addMeter(newMeter);
```