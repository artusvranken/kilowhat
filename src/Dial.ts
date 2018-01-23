import { Reading } from './Reading';

import { EventEmitter } from './EventEmitter';
import { EventArgs } from './EventArgs';

export class Dial extends EventEmitter
{
    private _id: number;
    private _readings : Map<number, Reading>;
    private _description : string;
    
    constructor(id : number = -1, description : string = "A new Dial.", readings : Map<number, Reading> = new Map<number, Reading>())
    {
        // Required for events
        super();
        
        this.id = id;
        this.description = description;
        this.readings = readings;
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

    get readings() : Map<number, Reading>
    {
        this.emitEvent(new EventArgs("read", "readings", this._readings));
        return this._readings;
    }

    set readings(newReadings : Map<number, Reading>)
    {
        this._readings = newReadings;
        this.emitEvent(new EventArgs("update", "readings", newReadings));
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
    
    get value() : number
    {
        if (typeof this.latestReading == 'undefined') return 0;
        this.emitEvent(new EventArgs("read", "value", this.latestReading.value));
        return this.latestReading.value;
    }
    
    get latestReading() : Reading
    {
        this.emitEvent(new EventArgs("read", "latestReading", this.sortedReadings));
        return this.sortedReadings[0];
    }

    get sortedReadings() : Array<Reading>
    {
        let sortedArray = Array.from(this.readings.values());
        sortedArray.sort(Reading.compare);
        this.emitEvent(new EventArgs("read", "sortedReadings", sortedArray));
        return sortedArray;
    }
}