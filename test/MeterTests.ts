import { Meter } from '../src/Meter';
import { Dial } from '../src/Dial';
import { MeterEvent } from '../src/MeterEvent';
import * as assert from 'assert';

describe('Meter', () => {
    
    describe('constructor', () => {
        it('should initialise default values if no parameters are supplied.', () => {
            let newMeter = new Meter();
            
            assert.equal(newMeter.id, -1);
            assert.equal(newMeter.dials.size, 0);
            assert.equal(newMeter.meterEvents.size, 0);
            assert.equal(newMeter.description, "A new meter.");
        });
        
        it('should initialise values if they are supplied correctly.', () => {
            let dials = new Map<number, Dial>();
            let meterEvents = new Map<number, Dial>();
            
            let newMeter = new Meter(0, "0001000", "My new meter.", dials, meterEvents);
            
            assert.equal(newMeter.id, 0);
            assert.equal(newMeter.number, "0001000");
            assert.equal(newMeter.description, "My new meter.");
            assert.equal(newMeter.dials, dials);
            assert.equal(newMeter.meterEvents, meterEvents);
        });
    });
    
    describe('sortedMeterEvents', () => {
        it('should return an array of MeterEvents sorted from latest MeterEvent to oldest.', () => {
            let oldestMeterEvent = new MeterEvent(0, "Something.", new Date("2018-01-01T12:00:00.000Z"));
            let oldMeterEvent = new MeterEvent(1, "Something.", new Date("2018-01-02T12:00:00.000Z"));
            let newMeterEvent = new MeterEvent(2, "Something.", new Date("2018-01-03T12:00:00.000Z"));
            let newestMeterEvent = new MeterEvent(3, "Something.", new Date("2018-01-04T12:00:00.000Z"));
            
            let newMeter = new Meter();
            newMeter.meterEvents.set(newMeterEvent.id, newMeterEvent);
            newMeter.meterEvents.set(oldestMeterEvent.id, oldestMeterEvent);
            newMeter.meterEvents.set(oldMeterEvent.id, oldMeterEvent);
            newMeter.meterEvents.set(newestMeterEvent.id, newestMeterEvent);
            
            let sortedArray = newMeter.sortedMeterEvents;
            
            assert.equal(sortedArray[0], newestMeterEvent);
            assert.equal(sortedArray[1], newMeterEvent);
            assert.equal(sortedArray[2], oldMeterEvent);
            assert.equal(sortedArray[3], oldestMeterEvent);
        });
    });
});