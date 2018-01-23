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
    
    static compare(firstReading : Reading, secondReading : Reading) : number
    {
        return secondReading.date.getTime() - firstReading.date.getTime();
    }
}