import { IMeterRepository } from './IMeterRepository';
import { Meter } from './Meter';
import { MeterEvent } from './MeterEvent';
import { Dial } from './Dial';
import { Reading } from './Reading';

/**
 * A MeterRepositoryStub is a stub for maintaining a collection of Meters, Dials, Readings and MeterEvents. It implements the IMeterRepository.
 */
export class MeterRepositoryStub implements IMeterRepository
{
    private idCounter;
    private meters : Map<number, Meter>;

    /**
     * Initialise a new instance of a MeterRepositoryStub.
     * @constructor
     *
     * @param {number} [idCounter = 0] - The value that the MeterRepositoryStub should start at when assigning IDs.
     * @param {Map<number,Meter>} [meters] - The Meter collection that should be maintained by this MeterRepository.
     */
    constructor(idCounter : number = 0, meters? : Map<number, Meter>)
    {
        this.idCounter = idCounter;
        
        if (typeof meters == 'undefined')
        {
            meters = new Map<number, Meter>();
        }
        
        this.meters = meters;
    }
    
    /**
     * Get a new ID and increment the current idCounter value.
     *
     * @returns {number} A new ID.
     */
    newId() : number
    {
        return this.idCounter++;
    }
    
    /**
     * Get the collections of Meters maintained by this MeterRepositoryStub.
     *
     * @returns {Map<number, Meter>} The current collection of Meters maintained by this MeterRepositoryStub.
     */
    getMeters() : Map<number, Meter>
    {
        return this.meters;
    }
    
    /**
     * Get a single Meter by its ID.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     *
     * @param {number} meterId - The ID of the Meter that should be returned.
     * @returns {Meter} The Meter with supplied ID.
     */
    getMeter(meterId : number) : Meter
    {
        if (this.getMeters().has(meterId)) return this.getMeters().get(meterId);
        
        throw new Error(`Meter with id ${meterId} not found.`);
    }
    
    /**
     * Add or replace a Meter and assign it a new ID if its current ID is a negative value. If a Meter with the same ID already exists, it will be overwritten.
     *
     * @param {Meter} newMeter - The new Meter to be added.
     * @returns {Meter} The new Meter, with possibly a newly assigned ID.
     */
    addMeter(newMeter : Meter) : Meter
    {
        if (newMeter.id < 0) newMeter.id = this.newId();
        this.getMeters().set(newMeter.id, newMeter);
        return newMeter;
    }
    
    /**
     * Delete a Meter from the collection of Meters maintained by this MeterRepositoryStub.
     *
     * @param {number} meterId - The ID of the Meter to be deleted.
     * @returns {number} The amount of Meters still maintained by this MeterRepositoryStub after removal.
     */
    removeMeter(meterId : number) : number
    {
        this.getMeters().delete(meterId);
        return this.getMeters().size;
    }
    
    /**
     * Get the collection of MeterEvents from a certain Meter with supplied ID, maintained by this MeterRepositoryStub.
     *
     * @returns {Map<number, MeterEvent>} The collection of MeterEvents that belongs to the Meter with supplied ID.
     */
    getMeterEvents(meterId : number) : Map<number, MeterEvent>
    {
        return this.getMeter(meterId).meterEvents;
    }
    
    /**
     * Get single MeterEvent by its ID and the ID of the Meter it belongs to.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     * @throws Will throw an Error when no MeterEvent with supplied ID is found.
     *
     * @param {number} meterId - The ID of the Meter this MeterEvent belongs to.
     * @param {number} meterEventId - The ID of the MeterEvent tha should be returned.
     *
     * @returs {MeterEvent} The MeterEvent with supplied ID.
     */
    getMeterEvent(meterId : number, meterEventId : number) : MeterEvent
    {
        if (this.getMeterEvents(meterId).has(meterEventId)) return this.getMeterEvents(meterId).get(meterEventId);
        
        throw new Error(`MeterEvent with id ${meterEventId} not found.`);
    }
    
    /**
     * Add or replace a MeterEvent. If the ID of the supplied MeterEvent is a negative number, a new ID will be assigned.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     * 
     * @param {number} meterId - The ID of the Meter this new/replaced MeterEvent belongs to.
     * @param {MeterEvent} newMeterEvent - The new MeterEvent to be added.
     * 
     * @returns {MeterEvent} The MeterEvent that was added to the MeterRepositoryStub.
     */
    addMeterEvent(meterId : number, newMeterEvent : MeterEvent) : MeterEvent
    {
        if (newMeterEvent.id < 0) newMeterEvent.id = this.newId();
        this.getMeterEvents(meterId).set(newMeterEvent.id, newMeterEvent);
        return newMeterEvent;
    }
    
    /**
     * Remove a MeterEvent by supplying its ID and the ID of the Meter is belongs to.
     *
     * @thows Will throw an Error when no Meter with supplied ID is found.
     *
     * @param {number} meterId - The ID of the Meter this MeterEvent belongs to.
     * @param {number} meterEventId - The ID of the MeterEvent to be removed.
     *
     * @returns {number} The amount of MeterEvents still maintained by this Meter after removal.
     */
    removeMeterEvent(meterId : number, meterEventId : number) : number
    {
        this.getMeterEvents(meterId).delete(meterEventId);
        
        return this.getMeterEvents(meterId).size;
    }
    
    /**
     * Get the collection of all Dials that belong to the Meter with supplied ID.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     *
     * @param {number} meterId - The ID of the Meter that we want the Dials to be returned from.
     *
     * @returns {Map<number, Dial>} The collection of Dials that belong to the Meter with supplied ID.
     */
    getDials(meterId : number) : Map<number, Dial>
    {
        return this.getMeter(meterId).dials;
    }
    
    /**
     * Get a single Dial with supplied ID from a Meter with supplied ID.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     * @throws Will throw an Error when no Dial with supplied ID is found.
     *
     * @param {number} meterId - The ID of the Meter this Dial belongs to.
     * @param {number} dialId - The ID of the Dial we want to retrieve.
     *
     * @returns {Dial} The Dial we want to return.
     */
    getDial(meterId : number, dialId : number) : Dial
    {
        if (this.getDials(meterId).has(dialId)) return this.getDials(meterId).get(dialId);
        
        throw new Error(`Dial with id ${dialId} not found.`);
    }
    
    /**
     * Add of replace a Dial that belongs to a Meter with supplied ID. If the ID of the Dial is a negative number, a new ID will be assigned to it.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     *
     * @param {number} meterId - The ID of the Meter this Dial belongs to.
     * @param {Dial} newDial - The Dial to be added/replaced.
     *
     * @returns {Dial} The newly added or replaced Dial.
     */
    addDial(meterId : number, newDial : Dial) : Dial
    {
        if (newDial.id < 0) newDial.id = this.newId();
        this.getDials(meterId).set(newDial.id, newDial);
        return newDial;
    }
    
    /**
     * Remove the Dial with supplied ID that belongs to a Meter with supplied ID.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     *
     * @param {number} meterId - The ID of the Meter this Dial should be removed from.
     * @param {number} dialId - The ID of the Dial that should be removed.
     * 
     * @returns {number} The amount of Dials still maintained by this Meter after removal.
     */
    removeDial(meterId : number, dialId : number) : number
    {
        this.getDials(meterId).delete(dialId);
        
        return this.getDials(meterId).size;
    }
    
    /**
     * Get the collection of Readings that belong to a Dial with supplied ID, that in turn belongs to a Meter with supplied ID.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     * @throws Will throw an Error when no Dial with supplied ID is found.
     *
     * @param {number} meterId - The ID of the Meter that the Dial belongs to.
     * @param {number} dialId - The ID of the Dial where the requested Readings belong  to.
     *
     * @returns {Map<number, Reading>} The collection of Readings maintained by the Dial with supplied ID.
     */
    getReadings(meterId : number, dialId : number) : Map<number, Reading>
    {
        return this.getDial(meterId, dialId).readings;
    }
    
    /**
     * Get a single Reading by ID.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     * @throws Will throw an Error when no Dial with supplied ID is found.
     * @throws Will throw an Error when no Reading with supplied ID is found.
     * 
     * @param {number} meterId - The ID of the Meter the Dial with supplied ID belongs to.
     * @param {number} dialId - The ID of the Dial the requested Reading belongs to.
     * @param {number} readingId - The ID of the Reading that needs to be returned.
     *
     * @returns {Reading} The requested Reading.
     */
    getReading(meterId : number, dialId : number, readingId : number) : Reading
    {
        if (this.getReadings(meterId, dialId).has(readingId)) return this.getReadings(meterId, dialId).get(readingId);
        
        throw new Error(`Reading with id ${readingId} not found.`);
    }
    
    /**
     * Add or replace a Reading. If the ID of the Reading is a negative number, it will get a new ID assigned.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     * @throws Will throw an Error when no Dial with supplied ID is found.
     * 
     * @param {number} meterId - The ID of the Meter the Dial with supplied ID belongs to.
     * @param {number} dialId - The ID of the Dial the new Readings should be added to.
     * @param {Reading} newReading - The Reading to be added.
     *
     * @returns {Reading} The Reading that was added, replaced.
     */
    addReading(meterId : number, dialId : number, newReading : Reading) : Reading
    {
        if (newReading.id < 0) newReading.id = this.newId();
        this.getReadings(meterId, dialId).set(newReading.id, newReading);
        return newReading;
    }
    
    /**
     * Remove a Reading by its ID and the ID of the Dial it belongs to and the ID of the Meter this Dial belongs to.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     * @throws Will throw an Error when no Dial with supplied ID is found.
     *
     * @param {number} meterId - The ID of the Meter the Dial belongs to.
     * @param {number} dialId - The ID of the Dial the requested Reading belongs to.
     * @param {number} readingId - The ID of the Reading that should be removed.
     *
     * @returns {number} The amount of Readings still maintained by the Dial with supplied ID after removal.
     */
    removeReading(meterId : number, dialId : number, readingId : number) : number
    {
        this.getReadings(meterId, dialId).delete(readingId);
        
        return this.getReadings(meterId, dialId).size;
    }
    
}