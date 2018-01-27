import { Meter } from './Meter';
import { Dial } from './Dial';
import { Reading } from './Reading';
import { MeterEvent } from './MeterEvent';

/**
* An IMeterRepository provides method descriptions that need to be implemented by a concrete MeterRepository.
*/
export interface IMeterRepository
{
    /**
     * Get a new ID and increment the current idCounter value.
     *
     * @returns {number} A new ID.
     */
    newId() : number;
    
    /**
     * Get the collections of Meters maintained by this IMeterRepository.
     *
     * @returns {Map<number, Meter>} The current collection of Meters maintained by this IMeterRepository.
     */
    getMeters() : Map<number, Meter>;
    
    /**
     * Get a single Meter by its ID.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     *
     * @param {number} meterId - The ID of the Meter that should be returned.
     * @returns {Meter} The Meter with supplied ID.
     */
    getMeter(meterId : number) : Meter;
    
    /**
     * Add or replace a Meter and assign it a new ID if its current ID is a negative value. If a Meter with the same ID already exists, it will be overwritten.
     *
     * @param {Meter} newMeter - The new Meter to be added.
     * @returns {Meter} The new Meter, with possibly a newly assigned ID.
     */
    addMeter(newMeter : Meter) : Meter;
    
    /**
     * Delete a Meter from the collection of Meters maintained by this IMeterRepository.
     *
     * @param {number} meterId - The ID of the Meter to be deleted.
     * @returns {number} The amount of Meters still maintained by this IMeterRepository after removal.
     */
    removeMeter(meterId : number) : number;
    
     /**
     * Get the collection of MeterEvents from a certain Meter with supplied ID, maintained by this IMeterRepository.
     *
     * @returns {Map<number, MeterEvent>} The collection of MeterEvents that belongs to the Meter with supplied ID.
     */
    getMeterEvents(meterId : number) : Map<number, MeterEvent>;
    
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
    getMeterEvent(meterId : number, meterEventId : number) : MeterEvent;
    
    /**
     * Add or replace a MeterEvent. If the ID of the supplied MeterEvent is a negative number, a new ID will be assigned.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     * 
     * @param {number} meterId - The ID of the Meter this new/replaced MeterEvent belongs to.
     * @param {MeterEvent} newMeterEvent - The new MeterEvent to be added.
     * 
     * @returns {MeterEvent} The MeterEvent that was added to the IMeterRepository.
     */
    addMeterEvent(meterId : number, newMeterEvent : MeterEvent) : MeterEvent;
    
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
    removeMeterEvent(meterId : number, meterEventId : number) : number;
    
    /**
     * Get the collection of all Dials that belong to the Meter with supplied ID.
     *
     * @throws Will throw an Error when no Meter with supplied ID is found.
     *
     * @param {number} meterId - The ID of the Meter that we want the Dials to be returned from.
     *
     * @returns {Map<number, Dial>} The collection of Dials that belong to the Meter with supplied ID.
     */    
    getDials(meterId : number) : Map<number, Dial>;
    
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
    getDial(meterId : number, dialId : number) : Dial;
    
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
    addDial(meterId : number, newDial : Dial) : Dial;
    
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
    removeDial(meterId : number, dialId : number) : number;
    
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
    getReadings(meterId : number, dialId : number) : Map<number, Reading>;
    
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
    getReading(meterId : number, dialId : number, readingId : number) : Reading;
    
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
    addReading(meterId : number, dialId: number, newReading : Reading) : Reading;
    
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
    removeReading(meterId : number, dialId : number, readingId : number) : number;
}