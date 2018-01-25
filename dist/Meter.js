"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MeterEvent_1 = require("./MeterEvent");
const EventArgs_1 = require("./EventArgs");
const EventEmitter_1 = require("./EventEmitter");
class Meter extends EventEmitter_1.EventEmitter {
    constructor(meterId = -1, number = "000", description = "A new meter.", dials = new Map(), meterEvents = new Map()) {
        super();
        this.id = meterId;
        this.number = number;
        this.description = description;
        this.dials = dials;
        this.meterEvents = meterEvents;
    }
    get id() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "id", this._id));
        return this._id;
    }
    set id(newId) {
        this._id = newId;
        this.emitEvent(new EventArgs_1.EventArgs("update", "id", newId));
    }
    get number() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "number", this._number));
        return this._number;
    }
    set number(newNumber) {
        this._number = newNumber;
        this.emitEvent(new EventArgs_1.EventArgs("update", "number", newNumber));
    }
    get description() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "description", this._description));
        return this._description;
    }
    set description(newDescription) {
        this._description = newDescription;
        this.emitEvent(new EventArgs_1.EventArgs("update", "description", newDescription));
    }
    get dials() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "dials", this._dials));
        return this._dials;
    }
    set dials(newDials) {
        this._dials = newDials;
        this.emitEvent(new EventArgs_1.EventArgs("update", "dials", newDials));
    }
    get meterEvents() {
        this.emitEvent(new EventArgs_1.EventArgs("read", "meterEvents", this._meterEvents));
        return this._meterEvents;
    }
    set meterEvents(newMeterEvents) {
        this._meterEvents = newMeterEvents;
        this.emitEvent(new EventArgs_1.EventArgs("update", "meterEvents", newMeterEvents));
    }
    get sortedMeterEvents() {
        let meterEventArray = Array.from(this.meterEvents.values());
        meterEventArray.sort(MeterEvent_1.MeterEvent.compare);
        this.emitEvent(new EventArgs_1.EventArgs("read", "sortedMeterEvents", meterEventArray));
        return meterEventArray;
    }
}
exports.Meter = Meter;
