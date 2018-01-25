import { Reading } from './Reading';

import { EventEmitter } from './EventEmitter';
import { EventArgs } from './EventArgs';

/**
 * A Dial holds information about the Readings of your Meter.
 */
export class Dial extends EventEmitter
{
    private _id: number;
    private _readings : Map<number, Reading>;
    private _description : string;
    
    /**
     * Initialise a new Dial instance.
     * @constructor
     *
     * @param {number} [id = -1] - The ID of the new Dial instance.
     * @param {string} [description = "A new Dial."] - The description of the new Dial instance.
     * @param {Map<number, Reading>} [readings = new Map<number, Reading>()] - The collection of all Readings for the new Dial instance.
     */
    constructor(id : number = -1, description : string = "A new Dial.", readings : Map<number, Reading> = new Map<number, Reading>())
    {
        // Required for events
        super();
        
        this.id = id;
        this.description = description;
        this.readings = readings;
    }

    /**
     * Get or set the ID of the Dial.
     *
     * @param {number} newId - The new ID for this Dial.
     * @returns {number} The current ID of this Dial.
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
     * Get or set the Readings collection of this Dial.
     *
     * @param {Map<number, Reading>} newReadings - The new collection of Readings for this Dial.
     * @returns {Map<number, Reading>} The current collection of Readings for this Dial.
     */
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

    /**
     * Get or set the description of this Dial.
     *
     * @param {string} newDescription - The new description for this Dial.
     * @returns {string} The current description of this Dial.
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
     * Get the current value of the Dial. This is the value of the most recent Reading in the collection of Readings in this Dial.
     *
     * @returns {number} The current value of this Dial.
     */
    get value() : number
    {
        if (typeof this.latestReading == 'undefined') return 0;
        this.emitEvent(new EventArgs("read", "value", this.latestReading.value));
        return this.latestReading.value;
    }

    /**
     * Get the latest Reading of the collection of Readings from this Dial.
     *
     * @returns {Reading} The most recent Reading maintained by this Dial.
     */
    get latestReading() : Reading
    {
        this.emitEvent(new EventArgs("read", "latestReading", this.sortedReadings));
        return this.sortedReadings[0];
    }

    /**
     * Get the collection of Readings of this Dial as an Array.
     *
     * @returns {Array<Reading>} An Array containing all Readings maintained by this Dial.
     */
    get sortedReadings() : Array<Reading>
    {
        let sortedArray = Array.from(this.readings.values());
        sortedArray.sort(Reading.compare);
        this.emitEvent(new EventArgs("read", "sortedReadings", sortedArray));
        return sortedArray;
    }
}