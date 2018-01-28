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
var kw = require('kilowhat');

let kilowhat = new kw.KiloWhat();
```

### Adding a Meter

```javascript
let newMeter = kilowhat.repo.addMeter(new kw.Meter());
```

### Adding a Dial to a Meter

```javascript
let newDial = kilowhat.repo.addDial(newMeter.id, new kw.Dial());
```

### Adding a Reading to a Dial

```javascript
let newReading = kilowhat.repo.addReading(newMeter.id, newDial.id, new kw.Reading());
```

### Adding a MeterEvent to a Meter

```javascript
let newMeterEvent = kilowhat.repo.addMeterEvent(newMeter.id, new kw.MeterEvent());
```