"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* A Reading is a notation of the state of a meter at a certain point in time.
*/
var Reading = /** @class */ (function () {
    /**
    * Initialise a new instance of a Reading.
    * @constructor
    *
    * @param {number} [id=-1] - The ID of the new Reading.
    * @param {Date} [date=new Date()] - The date of the new Reading.
    * @param {number} [value=0.0] - The value of the new Reading.
    */
    function Reading(id, date, value) {
        if (id === void 0) { id = -1; }
        if (date === void 0) { date = new Date(); }
        if (value === void 0) { value = 0.0; }
        this.id = id;
        this.date = date;
        this.value = value;
    }
    return Reading;
}());
exports.Reading = Reading;
