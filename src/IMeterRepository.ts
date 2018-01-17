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
    removeMeter(meterId : number) : number;
    
    getMeterEvents(meterId : number) : Array<MeterEvent>;
    getMeterEvent(meterId : number, meterEventId : number) : MeterEvent;
    addMeterEvent(meterId : number, newMeterEvent : MeterEvent) : MeterEvent;
    removeMeterEvent(meterId : number, meterEventId : number) : number;
    
    getDials(meterId : number) : Array<Dial>;
    getDial(meterId : number, dialId : number) : Dial;
    addDial(meterId : number, newDial : Dial) : Dial;
    removeDial(meterId : number, dialId : number) : number;
    
    getReadings(meterId : number, dialId : number) : Array<Reading>;
    getReading(meterId : number, dialId : number, readingId : number) : Reading;
    addReading(meterId : number, dialId: number, newReading : Reading) : Reading;
    removeReading(meterId : number, dialId : number, readingId : number) : number;
}