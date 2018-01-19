import { MeterEvent } from '../src/MeterEvent';
import * as assert from 'assert';

describe('MeterEvent', () => {
    describe('constructor', () => {
        it('should initialise default values when no parameters are supplied.', () => {
            let newMeterEvent = new MeterEvent();
            let date = newMeterEvent.date;
            
            assert.equal(newMeterEvent.id, -1);
            assert.equal(newMeterEvent.description, "A new MeterEvent.");
            assert.equal(newMeterEvent.date, date)
        });
        
        it('should initialise values when parameters are supplied.', () => {
            let newDate = new Date();
            let newMeterEvent = new MeterEvent(0, "Power outage.", newDate);
            
            assert.equal(newMeterEvent.id, 0);
            assert.equal(newMeterEvent.description, "Power outage.");
            assert.equal(newMeterEvent.date, newDate);
        });
    });
});