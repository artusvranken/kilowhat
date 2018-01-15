import { Meter } from './Meter';
import { Dial } from './Dial';
import { Reading } from './Reading';
import { MeterEvent } from './MeterEvent';

/**
* An IMeterRepository provides method descriptions that need to be implemented by a concrete MeterRepository.
*/
export interface IMeterRepository
{
    newId() : number;
    
    getMeters() : Array<Meter>;
    getMeter(meterId : number) : Meter;
    addMeter(description : string) : Meter;
    updateMeter(meterId : number, description : string) : Meter;
    removeMeter(meterId : number) : number;
    addExistingMeter(newMeter : Meter) : Meter;
    
    getMeterEvents(meterId : number) : Array<MeterEvent>;
    getMeterEvent(meterId : number, meterEventId : number) : MeterEvent;
    addMeterEvent(meterId : number, description : string, date : Date) : MeterEvent;
    removeMeterEvent(meterId : number, meterEventId : number) : number;
    addExistingMeterEvent(meterId : number, newMeterEvent : MeterEvent) : MeterEvent;
    
    getDials(meterId : number) : Array<Dial>;
    getDial(meterId : number, dialId : number) : Dial;
    addDial(meterId : number, description : string);
    updateDial(meterId : number, dialId : number, description : string) : Dial;
    removeDial(meterId : number, dialId : number) : number;
    addExistingDial(meterId : number, newDial : Dial) : Dial;
    
    getReadings(meterId : number, dialId : number) : Array<Reading>;
    getReading(meterId : number, dialId : number, readingId : number) : Reading;
    addReading(meterId : number, dialId : number, value : number, date : Date) : Reading;
    removeReading(meterId : number, dialId : number, readingId : number) : number;
    addExistingReading(meterId : number, dialId : number, newReading : Reading) : Reading;
}