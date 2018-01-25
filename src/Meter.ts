import { Dial } from './Dial';
import { MeterEvent } from './MeterEvent';

import { EventArgs } from './EventArgs';
import { EventEmitter } from './EventEmitter';

/**
 * A Meter is the class that represents your energy consumption Meter that you want to track. It consists of Dials and MeterEvents.
 *
 */
export class Meter extends EventEmitter
{
    private _id : number;
    private _number : string;
    private _dials : Map<number, Dial>;
    private _meterEvents : Map<number, MeterEvent>;
    private _description: string;
    
    /**
     * Initialise a new Meter instance.
     * @constructor
     *
     * @param {number} [meterId = -1] - The ID of the new Meter.
     * @param {string} [number = "000"] - The number of the new Meter.
     * @param {string} [description = "A new meter."] - The description of the new Meter.
     * @param {Map<number, Dial>} [dials = new Map<number, Meter>()] - The collection of Dials that are maintained by the new Meter.
     * @param {Map<number, meterEvent>} [meterEvents = new Map<number, MeterEvent>()] - The collection of MeterEvents that are maintained by the new Meter.
     */
    constructor(meterId : number = -1, number : string = "000", description : string = "A new meter.", dials : Map<number, Dial> = new Map<number, Dial>(), meterEvents : Map<number, MeterEvent> = new Map<number, MeterEvent>())
    {
        super();
        
        this.id = meterId;
        this.number = number;
        this.description = description;
        this.dials = dials;
        this.meterEvents = meterEvents;
    }

    /**
     * Get or set the ID of the Meter.
     *
     * @param {number} [newId] - The new ID of the Meter.
     * @returns {number} The current ID of the Meter.
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
     * Get or set the number of the Meter.
     *
     * @param {string} [newNumber] - The new number of the Meter.
     * @returns {string} The current number of the Meter.
     */
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

    /**
     * Get or set the description of the Meter.
     *
     * @param {string} [newDescription] - The new description of this Meter.
     * @returns {string} The current description of this Meter.
     */
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

    /**
     * Get or set the collection of Dials maintained by this Meter.
     *
     * @param {Map<number, Dial>} [newDials] - The new collection of Dials to be maintained by this Meter.
     * @returns {Map<number, Dial>} The current collection of Dials that are maintained by this Meter.
     */
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

    /**
     * Get or set the collection of MeterEvents that are maintained by this Meter.
     *
     * @param {Map<number, MeterEvent>} [newMeterEvents] - The new collection of MeterEvents that should be maintained by this Meter.
     * @returns {Map<number, MeterEvent>} The current collection of MeterEvents that are maintained by this Meter.
     */
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

    /**
     * Get an Array of the collection of MeterEvents sorted from most recent to least recent.
     *
     * @returns {Array<MeterEvent>} The sorted Array of MeterEvents maintained by this Meter.
     */
    get sortedMeterEvents() : Array<MeterEvent>
    {
        let meterEventArray = Array.from(this.meterEvents.values());
        meterEventArray.sort(MeterEvent.compare);
        
        this.emitEvent(new EventArgs("read", "sortedMeterEvents", meterEventArray));
        return meterEventArray;
    }
}