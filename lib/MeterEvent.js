"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* A MeterEvent can be used to convey a certain event in the history of your Meter, like a power outtage.
*/
var MeterEvent = /** @class */ (function () {
    /**
    * Initialise a new MeterEvent instance.
    * @constructor
    *
    * @param {number} [id=-1] - The ID of the new MeterEvent.
    * @param {string} [description="A new MeterEvent"] - The description of the new MeterEvent.
    * @param {Date} [date=new Date()] - The date of the new MeterEvent.
    */
    function MeterEvent(id, description, date) {
        if (id === void 0) { id = -1; }
        if (description === void 0) { description = "A new MeterEvent."; }
        if (date === void 0) { date = new Date(); }
        this.id = id;
        this.description = description;
        this.date = date;
    }
    return MeterEvent;
}());
exports.MeterEvent = MeterEvent;
