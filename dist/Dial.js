"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Reading_1 = require("./Reading");
const EventEmitter_1 = require("./EventEmitter");
const EventArgs_1 = require("./EventArgs");
class Dial extends EventEmitter_1.EventEmitter {
    constructor(id = -1, description = "A new Dial.", readings = new Map()) {
        // Required for events
        super();
        this.id = id;
        this.description = description;
        this.readings = readings;
    }
    get id() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "id", this._id));
        return this._id;
    }
    set id(newId) {
        this._id = newId;
        this.emitEvent(new EventArgs_1.EventArgs("update", "id", newId));
    }
    get readings() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "readings", this._readings));
        return this._readings;
    }
    set readings(newReadings) {
        this._readings = newReadings;
        this.emitEvent(new EventArgs_1.EventArgs("update", "readings", newReadings));
    }
    get description() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "description", this._description));
        return this._description;
    }
    set description(newDescription) {
        this._description = newDescription;
        this.emitEvent(new EventArgs_1.EventArgs("update", "description", newDescription));
    }
    get value() {
        if (typeof this.latestReading == 'undefined')
            return 0;
        this.emitEvent(new EventArgs_1.EventArgs("read", "value", this.latestReading.value));
        return this.latestReading.value;
    }
    get latestReading() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "latestReading", this.sortedReadings));
        return this.sortedReadings[0];
    }
    get sortedReadings() {
        let sortedArray = Array.from(this.readings.values());
        sortedArray.sort(Reading_1.Reading.compare);
        this.emitEvent(new EventArgs_1.EventArgs("read", "sortedReadings", sortedArray));
        return sortedArray;
    }
}
exports.Dial = Dial;
