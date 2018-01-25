"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = require("./EventEmitter");
const EventArgs_1 = require("./EventArgs");
/**
* A Reading is a notation of the state of a meter at a certain point in time.
*/
class Reading extends EventEmitter_1.EventEmitter {
    /**
    * Initialise a new instance of a Reading.
    * @constructor
    *
    * @param {number} [id = -1] - The ID of the new Reading.
    * @param {number} [value = 0] - The value of the new Reading.
    * @param {Date} [date = new Date()] - The date of the new Reading.
    */
    constructor(id = -1, value = 0, date = new Date()) {
        super();
        this.id = id;
        this.date = date;
        this.value = value;
    }
    get id() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "id", this._id));
        return this._id;
    }
    set id(newId) {
        this._id = newId;
        this.emitEvent(new EventArgs_1.EventArgs("update", "id", newId));
    }
    get date() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "date", this._date));
        return this._date;
    }
    set date(newDate) {
        this._date = newDate;
        this.emitEvent(new EventArgs_1.EventArgs("update", "date", newDate));
    }
    get value() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "value", this._value));
        return this._value;
    }
    set value(newValue) {
        this._value = newValue;
        this.emitEvent(new EventArgs_1.EventArgs("update", "value", newValue));
    }
    static compare(firstReading, secondReading) {
        return secondReading.date.getTime() - firstReading.date.getTime();
    }
}
exports.Reading = Reading;
