import { IMeterRepository } from './IMeterRepository';
import { Meter } from './Meter';
import { MeterEvent } from './MeterEvent';
import { Dial } from './Dial';
import { Reading } from './Reading';

export class MeterRepositoryStub implements IMeterRepository
{
    private idCounter = 0;
    private meters : Map<number, Meter> = new Map<number, Meter>();
    
    newId() : number
    {
        return this.idCounter++;
    }
    
    getMeters() : Map<number, Meter>
    {
        return this.meters;
    }
    
    getMeter(meterId : number) : Meter
    {
        if (this.getMeters().has(meterId)) return this.getMeters().get(meterId);
        
        throw new Error(`Meter with id ${meterId} not found.`);
    }
    
    addMeter(newMeter : Meter) : Meter
    {
        if (newMeter.id < 0) newMeter.id = this.newId();
        this.getMeters().set(newMeter.id, newMeter);
        return newMeter;
    }
    
    removeMeter(meterId : number) : number
    {
        this.getMeters().delete(meterId);
        return this.getMeters().size;
    }
    
    getMeterEvents(meterId : number) : Map<number, MeterEvent>
    {
        return this.getMeter(meterId).meterEvents;
    }
    
    getMeterEvent(meterId : number, meterEventId : number) : MeterEvent
    {
        if (this.getMeterEvents(meterId).has(meterEventId)) return this.getMeterEvents(meterId).get(meterEventId);
        
        throw new Error(`MeterEvent with id ${meterEventId} not found.`);
    }
    
    addMeterEvent(meterId : number, newMeterEvent : MeterEvent) : MeterEvent
    {
        if (newMeterEvent.id < 0) newMeterEvent.id = this.newId();
        this.getMeterEvents(meterId).set(newMeterEvent.id, newMeterEvent);
        return newMeterEvent;
    }
    
    removeMeterEvent(meterId : number, meterEventId : number) : number
    {
        this.getMeterEvents(meterId).delete(meterEventId);
        
        return this.getMeterEvents(meterId).size;
    }
    
    getDials(meterId : number) : Map<number, Dial>
    {
        return this.getMeter(meterId).dials;
    }
    
    getDial(meterId : number, dialId : number) : Dial
    {
        if (this.getDials(meterId).has(dialId)) return this.getDials(meterId).get(dialId);
        
        throw new Error(`Dial with id ${dialId} not found.`);
    }
    
    addDial(meterId : number, newDial : Dial) : Dial
    {
        if (newDial.id < 0) newDial.id = this.newId();
        this.getDials(meterId).set(newDial.id, newDial);
        return newDial;
    }
    
    removeDial(meterId : number, dialId : number) : number
    {
        this.getDials(meterId).delete(dialId);
        
        return this.getDials(meterId).size;
    }
    
    getReadings(meterId : number, dialId : number) : Map<number, Reading>
    {
        return this.getDial(meterId, dialId).readings;
    }
    
    getReading(meterId : number, dialId : number, readingId : number) : Reading
    {
        if (this.getReadings(meterId, dialId).has(readingId)) return this.getReadings(meterId, dialId).get(readingId);
        
        throw new Error(`Reading with id ${readingId} not found.`);
    }
    
    addReading(meterId : number, dialId : number, newReading : Reading) : Reading
    {
        if (newReading.id < 0) newReading.id = this.newId();
        this.getReadings(meterId, dialId).set(newReading.id, newReading);
        return newReading;
    }
    
    removeReading(meterId : number, dialId : number, readingId : number) : number
    {
        this.getReadings(meterId, dialId).delete(readingId);
        
        return this.getReadings(meterId, dialId).size;
    }
    
}