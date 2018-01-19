import { MeterRepositoryStub } from '../src/MeterRepositoryStub';
import { Meter } from '../src/Meter';
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
    
});