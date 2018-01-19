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
    
    describe('compare', () => {
        it('should return a negative number when the first MeterEvent has a date later than the date of the second MeterEvent.', () => {
            let firstDate = new Date("2018-01-01T12:00:00.000Z");
            let secondDate = new Date("2018-01-02T12:00:00.000Z");
            
            let oldMeterEvent = new MeterEvent(0, "something.", firstDate);
            let newMeterEvent = new MeterEvent(0, "something.", secondDate);
            
            let compareValue = MeterEvent.compare(newMeterEvent, oldMeterEvent);
            assert.equal(compareValue < 0, true);
        });
        
        it ('should return a positive number when the first MeterEvent has a date earlier than the date of the second MeterEvent.', () => {
            let firstDate = new Date("2018-01-01T12:00:00.000Z");
            let secondDate = new Date("2018-01-02T12:00:00.000Z");
            
            let oldMeterEvent = new MeterEvent(0, "something.", firstDate);
            let newMeterEvent = new MeterEvent(0, "something.", secondDate);
            
            let compareValue = MeterEvent.compare(oldMeterEvent, newMeterEvent);
            assert.equal(compareValue > 0, true);
        });
    });
});