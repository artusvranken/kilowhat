import { MeterRepositoryStub } from '../src/MeterRepositoryStub';
import { Meter } from '../src/Meter';
import { MeterEvent } from '../src/MeterEvent';
import { Dial } from '../src/Dial';
import { Reading } from '../src/Reading';
import * as assert from 'assert';

describe('MeterRepositoryStub', () => {
    
    describe('addMeter', () => {
        it('should add a Meter and return it.', () => {
            let newStub = new MeterRepositoryStub();
            
            let newMeter = new Meter();
            let returnedMeter = newStub.addMeter(newMeter);
            assert.equal(newMeter, returnedMeter);
            
            let secondMeter = new Meter();
            returnedMeter = newStub.addMeter(secondMeter);
            assert.equal(secondMeter, returnedMeter);
            
            assert.equal(newStub.getMeters().size, 2);
        });
        
        it('should assign a new ID to a Meter if its current ID is a negative number.', () => {
            let newStub = new MeterRepositoryStub();
            
            let newMeter = new Meter();
            let firstValue = newMeter.id;
            newStub.addMeter(newMeter);
            
            assert.equal(firstValue == newMeter.id, false);
        });
        
        it('should overwrite an existing Meter if it they have the same ID.', () => {
            let newStub = new MeterRepositoryStub();
            
            let firstMeter = new Meter(0);
            let secondMeter = new Meter(0);
            
            newStub.addMeter(firstMeter);
            assert.equal(newStub.getMeters().size, 1);
            
            newStub.addMeter(secondMeter);
            assert.equal(newStub.getMeters().size, 1);
        });
    });
    
    describe('getMeters', () => {
        it('should return the list of Meters', () => {
            let newStub = new MeterRepositoryStub();
            assert.equal(newStub.getMeters().size, 0);
             
            newStub.addMeter(new Meter());
            assert.equal(newStub.getMeters().size, 1);
            
            newStub.addMeter(new Meter());
            assert.equal(newStub.getMeters().size, 2);
             
            newStub.addMeter(new Meter());
            assert.equal(newStub.getMeters().size, 3);
        });
    });
    
    describe('getMeter', () => {
        it('should return the Meter with supplied ID.', () => {
            let newStub = new MeterRepositoryStub();
            let newMeter = new Meter(1);
            
            newStub.addMeter(newMeter);
            let returnedMeter = newStub.getMeter(1);
            
            assert.equal(newMeter, returnedMeter);
        });
        
        it('should throw an error when the requested Meter does not exist.', () => {
            let newStub = new MeterRepositoryStub();
            let errorThrown = false;
            
            try {
                newStub.getMeter(100);
            } catch(e) {
                errorThrown = true;
            }
            
            assert.equal(errorThrown, true);
        });
    });
    
    describe('removeMeter', () => {
        it('should remove Meter with supplied ID and return size of Meter map.', () => {
            let newStub = new MeterRepositoryStub();
            let newMeter = new Meter(1);
            
            newStub.addMeter(newMeter);
            assert.equal(newStub.getMeters().size, 1);
            
            let returnedSize = newStub.removeMeter(1);
            assert.equal(newStub.getMeters().size, returnedSize);
        });
        
        it('should not remove a Meter when no Meter with supplied ID is found.', () => {
            let newStub = new MeterRepositoryStub();
            newStub.addMeter(new Meter());
            newStub.removeMeter(1000);
            
            assert.equal(newStub.getMeters().size, 1);
        });
    });
    
    describe('addMeterEvent', () => {
        it('should add a new MeterEvent and return it.', () => {
            let newStub = new MeterRepositoryStub();
            let newMeter = newStub.addMeter(new Meter());
            let newMeterEvent = new MeterEvent();
            let returnedMeterEvent = newStub.addMeterEvent(newMeter.id, newMeterEvent);
            
            assert.equal(newMeterEvent, returnedMeterEvent);
        });
    });
    
    describe('removeMeterEvent', () => {
        it('should remove a MeterEvent if it exists.', () => {
            let newStub = new MeterRepositoryStub();
            let newMeter = newStub.addMeter(new Meter());
            let newMeterEvent = newStub.addMeterEvent(newMeter.id, new MeterEvent());
            
            assert.equal(newStub.getMeterEvents(newMeter.id).size, 1);
           
            assert.equal(newStub.removeMeterEvent(newMeter.id, newMeterEvent.id), 0);
        });
    });
    
    describe('addDial', () => {
        it('should add a Dial and return it.', () => {
            let newStub = new MeterRepositoryStub();
            let newMeter = newStub.addMeter(new Meter());
            let newDial = new Dial();
            let returnedDial = newStub.addDial(newMeter.id, newDial);
            
            assert.equal(newDial, returnedDial);
        });
    });
    
    describe('removeDial', () => {
        it('should remove a Dial from a Meter and return the amount of Dials maintained by the Meter.', () => {
            let newStub = new MeterRepositoryStub();
            let newMeter = newStub.addMeter(new Meter());
            let newDial = newStub.addDial(newMeter.id, new Dial());
            
            assert.equal(newStub.getDials(newMeter.id).size, 1);
            
            assert.equal(newStub.removeDial(newMeter.id, newDial.id), 0);
        });
    });
    
    describe('addReading', () => {
        it('should add a new Reading to a Dial and return it.', () => {
            let newStub = new MeterRepositoryStub();
            let newMeter = newStub.addMeter(new Meter());
            let newDial = newStub.addDial(newMeter.id, new Dial());
            let newReading = new Reading();
            let returnedReading = newStub.addReading(newMeter.id, newDial.id, newReading);
            
            assert.equal(newReading, returnedReading);
        });
    });
    
    describe('removeReading', () => {
        it('should remove a Reading and return the amount of Readings maintained by the Dial.', () => {
            let newStub = new MeterRepositoryStub();
            let newMeter = newStub.addMeter(new Meter());
            let newDial = newStub.addDial(newMeter.id, new Dial());
            let newReading = new Reading();
            let returnedReading = newStub.addReading(newMeter.id, newDial.id, newReading);
            
            assert.equal(newReading, returnedReading);
            
            assert.equal(newStub.removeReading(newMeter.id, newDial.id, newReading.id), 0);
        });
    });
    
});