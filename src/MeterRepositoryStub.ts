import { IMeterRepository } from './IMeterRepository';
import { Meter } from './Meter';
import { MeterEvent } from './MeterEvent';
import { Dial } from './Dial';
import { Reading } from './Reading';

export class MeterRepositoryStub implements IMeterRepository
{
    private idCounter = 0;
    private meters : Array<Meter>;
    
    newId() : number
    {
        return this.idCounter++;
    }
    
    getMeters() : Array<Meter>
    {
        return this.meters;
    }
    
    getMeter(meterId : number) : Meter
    {
        for (let meter of this.getMeters())
        {
            if (meter.id == meterId) return meter;
        }
        
        throw new Error("Meter with id {meterId} not found.");
    }
    
    addMeter(description : string) : Meter
    {
        let newMeter = new Meter(this.newId(), description);
        
        return this.addExistingMeter(newMeter);
    }
    
    addExistingMeter(newMeter : Meter) : Meter
    {
        if (newMeter.id < 0) newMeter.id = this.newId();
        this.meters.push(newMeter);
        return newMeter;
    }
    
    updateMeter(meterId : number, description : string) : Meter
    {
        this.getMeter(meterId).description = description;
        return this.getMeter(meterId);
    }
    
    removeMeter(meterId : number) : number
    {
        let index = this.getMeters().indexOf(this.getMeter(meterId), 0);
        if (index > -1) {
           this.getMeters().splice(index, 1);
        }
        
        return this.getMeters().length;
    }
    
    getMeterEvents(meterId : number) : Array<MeterEvent>
    {
        return this.getMeter(meterId).meterEvents;
    }
    
    getMeterEvent(meterId : number, meterEventId : number) : MeterEvent
    {
        for (let meterEvent of this.getMeterEvents(meterId))
        {
            if (meterEvent.id == meterEventId) return meterEvent;
        }
        
        throw new Error("MeterEvent with id {meterEventId} not found.");
    }
    
    addMeterEvent(meterId : number, description : string, date : Date) : MeterEvent
    {
        let newMeterEvent = new MeterEvent(this.newId(), description, date);
        return this.addExistingMeterEvent(meterId, newMeterEvent);
    }
    
    addExistingMeterEvent(meterId : number, newMeterEvent : MeterEvent) : MeterEvent
    {
        if (newMeterEvent.id < 0) newMeterEvent.id = this.newId();
        this.getMeterEvents(meterId).push(newMeterEvent);
        return newMeterEvent;
    }
    
    removeMeterEvent(meterId : number, meterEventId : number) : number
    {
        let meterEventIndex = this.getMeterEvents(meterId).indexOf(this.getMeterEvent(meterId, meterEventId), 0);
        
        if (meterEventIndex > -1)
        {
            this.getMeterEvents(meterId).splice(meterEventIndex, 1);
        }
        
        return this.getMeterEvents(meterId).length;
    }
    
    getDials(meterId : number) : Array<Dial>
    {
        return this.getMeter(meterId).dials;
    }
    
    getDial(meterId : number, dialId : number) : Dial
    {
        for (let dial of this.getDials(meterId))
        {
            if (dial.id == dialId) return dial;
        }
        
        throw new Error("Dial with id {dialId} not found.");
    }
    
    addDial(meterId : number, description : string) : Dial
    {
        let newDial = new Dial(this.newId(), description);
        return this.addExistingDial(meterId, newDial);
    }
    
    addExistingDial(meterId : number, newDial : Dial) : Dial
    {
        if (newDial.id < 0) newDial.id = this.newId();
        this.getDials(meterId).push(newDial);
        return newDial;
    }
    
    updateDial(meterId : number, dialId : number, description : string) : Dial
    {
        let dial = this.getDial(meterId, dialId);
        dial.description = description;
        return dial;
    }
    
    removeDial(meterId : number, dialId : number) : number
    {
        let dialIndex = this.getDials(meterId).indexOf(this.getDial(meterId, dialId), 0);
        
        if (dialIndex > -1)
        {
            this.getDials(meterId).splice(dialIndex, 1);
        }
        
        return this.getDials(meterId).length;
    }
    
    getReadings(meterId : number, dialId : number) : Array<Reading>
    {
        return this.getDial(meterId, dialId).readings;
    }
    
    getReading(meterId : number, dialId : number, readingId : number) : Reading
    {
        for (let reading of this.getReadings(meterId, dialId))
        {
            if (reading.id == readingId) return reading;
        }
        
        throw new Error("Reading with id {readingId} not found.");
    }
    
    addReading(meterId : number, dialId : number, value : number, date : Date) : Reading
    {
        let newReading = new Reading(this.newId(), value, date);
        return this.addExistingReading(meterId, dialId, newReading);
    }
    
    addReading(meterId : number, dialId : number, newReading : Reading) : Reading
    {
        if (newReading.id < 0) newReading.id = this.newId();
        this.getReadings(meterId, dialId).push(newReading);
        return newReading;
    }
    
    removeReading(meterId : number, dialId : number, readingId : number) : number
    {
        let readingIndex = this.getReadings(meterId, dialId).indexOf(this.getReading(meterId, dialId, readingId), 0);
        
        if (readingIndex > -1)
        {
            this.getReadings(meterId, dialId).splice(readingIndex, 1);
        }
        
        return this.getReadings(meterId, dialId).length;
    }
    
}