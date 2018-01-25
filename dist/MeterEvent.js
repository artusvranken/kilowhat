"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = require("./EventEmitter");
const EventArgs_1 = require("./EventArgs");
/**
* A MeterEvent can be used to convey a certain event in the history of your Meter, like a power outtage.
*/
class MeterEvent extends EventEmitter_1.EventEmitter {
    /**
    * Initialise a new MeterEvent instance.
    * @constructor
    *
    * @param {number} [id=-1] - The ID of the new MeterEvent.
    * @param {string} [description="A new MeterEvent"] - The description of the new MeterEvent.
    * @param {Date} [date=new Date()] - The date of the new MeterEvent.
    */
    constructor(id = -1, description = "A new MeterEvent.", date = new Date()) {
        super();
        this.id = id;
        this.description = description;
        this.date = date;
    }
    get id() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "id", this._id));
        return this._id;
    }
    set id(newId) {
        this._id = newId;
        this.emitEvent(new EventArgs_1.EventArgs("update", "id", newId));
    }
    get description() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "description", this._description));
        return this._description;
    }
    set description(newDescription) {
        this.emitEvent(new EventArgs_1.EventArgs("update", "description", newDescription));
        this._description = newDescription;
    }
    get date() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "date", this._date));
        return this._date;
    }
    set date(newDate) {
        this._date = newDate;
        this.emitEvent(new EventArgs_1.EventArgs("update", "date", newDate));
    }
    static compare(firstMeterEvent, secondMeterEvent) {
        return secondMeterEvent.date.getTime() - firstMeterEvent.date.getTime();
    }
}
exports.MeterEvent = MeterEvent;
