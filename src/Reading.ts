import { EventEmitter } from './EventEmitter';
import { EventArgs } from './EventArgs';

/**
* A Reading is a notation of the state of a meter at a certain point in time.
*/
export class Reading extends EventEmitter
{
    private _id : number;
    private _date : Date;
    private _value : number;
    
    /**
    * Initialise a new instance of a Reading.
    * @constructor
    * 
    * @param {number} [id = -1] - The ID of the new Reading.
    * @param {number} [value = 0] - The value of the new Reading.
    * @param {Date} [date = new Date()] - The date of the new Reading.
    */
    constructor(id : number = -1, value : number = 0, date : Date = new Date())
    {
        super();
        
        this.id = id;
        this.date = date;
        this.value = value;
    }
    
    /**
     * Get or set the ID of the Reading.
     *
     * @param {number} [newId] - The new ID for the Reading.
     * @returns {number} The current ID of the Reading.
     */
    get id() : number
    {
        this.emitEvent(new EventArgs("read", "id", this._id));
        return this._id;
    }
    
    set id(newId : number)
    {
        this._id = newId;
        this.emitEvent(new EventArgs("update", "id", newId));
    }
    
    /**
     * Get or set the date of this Reading.
     *
     * @param {Date} [newDate] - The new date of this Reading.
     * @returns {Date} The current date of this Reading.
     */
    get date() : Date
    {
        this.emitEvent(new EventArgs("read", "date", this._date));
        return this._date;
    }
    
    set date(newDate : Date)
    {
        this._date = newDate;
        this.emitEvent(new EventArgs("update", "date", newDate));
    }
    
    /**
     * Get or set the value of this Reading.
     *
     * @param {number} [newValue] - The new value for this Reading.
     * @returns {number} The current value of this Reading.
     */
    get value() : number
    {
        this.emitEvent(new EventArgs("read", "value", this._value));
        return this._value;
    }
    
    set value(newValue : number)
    {
        this._value = newValue;
        this.emitEvent(new EventArgs("update", "value", newValue));
    }
    
    /**
     * Compare two Readings to sort them from most recent to least recent. 
     *
     * @param {Reading} [firstReading] - The first Reading that should be compared to the second Reading.
     * @param {Reading} [secondReading] - The second Reading that should be compared to the first Reading.
     *
     * @returns {number} A value indiciating how these two Readings should be sorted relative to eachother.
     */
    static compare(firstReading : Reading, secondReading : Reading) : number
    {
        return secondReading.date.getTime() - firstReading.date.getTime();
    }
}