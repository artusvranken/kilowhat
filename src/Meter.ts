import { Dial } from './Dial';
import { MeterEvent } from './MeterEvent';

import { EventArgs } from './EventArgs';
import { EventEmitter } from './EventEmitter';

export class Meter extends EventEmitter
{
    private _id : number;
    private _number : number;
    private _dials : Map<number, Dial>;
    private _meterEvents : Map<number, MeterEvent>;
    private _description: string;
    
    constructor(meterId : number = -1, number : string = "000", description : string = "A new meter.", dials : Map<number, Dial> = new Map<number, Dial>(), meterEvents : Map<number, MeterEvent> = new Map<number, MeterEvent>())
    {
        super();
        
        this.id = meterId;
        this.number = number;
        this.description = description;
        this.dials = dials;
        this.meterEvents = meterEvents;
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

    get number() : string
    {
        this.emitEvent(new EventArgs("read", "number", this._number));
        return this._number;
    }
    
    set number(newNumber : string)
    {
        this._number = newNumber;
        this.emitEvent(new EventArgs("update", "number", newNumber));
    }

    get description() : string
    {
        this.emitEvent(new EventArgs("read", "description", this._description));
        return this._description;
    }

    set description(newDescription : string)
    {
        this._description = newDescription;
        this.emitEvent(new EventArgs("update", "description", newDescription));
    }

    get dials() : Map<number, Dial>
    {
        this.emitEvent(new EventArgs("read", "dials", this._dials));
        return this._dials;
    }

    set dials(newDials : Map<number, Dial>)
    {
        this._dials = newDials;
        this.emitEvent(new EventArgs("update", "dials", newDials));
    }

    get meterEvents() : Map<number, MeterEvent>
    {
        this.emitEvent(new EventArgs("read", "meterEvents", this._meterEvents));
        return this._meterEvents;
    }

    set meterEvents(newMeterEvents : Map<number, MeterEvent>)
    {
        this._meterEvents = newMeterEvents;
        this.emitEvent(new EventArgs("update", "meterEvents", newMeterEvents));
    }

    get sortedMeterEvents() : Array<MeterEvent>
    {
        let meterEventArray = Array.from(this.meterEvents.values());
        meterEventArray.sort(MeterEvent.compare);
        
        this.emitEvent(new EventArgs("read", "sortedMeterEvents", meterEventArray));
        return meterEventArray;
    }
}