import { EventEmitter } from './EventEmitter';
import { EventArgs } from './EventArgs';

/**
* A MeterEvent can be used to convey a certain event in the history of your Meter, like a power outtage.
*/
export class MeterEvent extends EventEmitter
{
    private _id : number;
    private _description : string;
    private _date : Date;
    
    /**
    * Initialise a new MeterEvent instance.
    * @constructor
    * 
    * @param {number} [id=-1] - The ID of the new MeterEvent.
    * @param {string} [description="A new MeterEvent"] - The description of the new MeterEvent.
    * @param {Date} [date=new Date()] - The date of the new MeterEvent.
    */
    constructor(id : number = -1, description : string = "A new MeterEvent.", date : Date = new Date())
    {
        super();
        
        this.id = id;
        this.description = description;
        this.date = date;
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
    
    get description() : string
    {
        this.emitEvent(new EventArgs("read", "description", this._description));
        return this._description;
    }
    
    set description(newDescription : string)
    {
        this.emitEvent(new EventArgs("update", "description", newDescription));
        this._description = newDescription;
    }
    
    get date() : Date
    {
        this.emitEvent(new EventArgs("read", "date", this._date));
        return this._date;
    }
    
    set date(newDate : Date)
    {
        this._date = newDate;
        this.emitEvent(new EventArgs("update" ,"date", newDate));
    }
    
    static compare(firstMeterEvent : MeterEvent, secondMeterEvent : MeterEvent) : number
    {
        return secondMeterEvent.date.getTime() - firstMeterEvent.date.getTime();
    }
}