import { Dial } from '../src/Dial';
import { Reading } from '../src/Reading';
import * as assert from 'assert';

describe('Dial', () => {
    
    describe('constructor', () => {
        
        it('should initialise default values when no parameters are supplied.', () => {
            let newDial = new Dial();
            
            assert.equal(newDial.id, -1);
            assert.equal(newDial.description, 'A new Dial.');
            assert.equal(newDial.readings.size, 0);
        });
        
        it('should initialise values when parameters are supplied.', () => {
            let newReadingMap = new Map<number, Reading>();
            let firstReading = new Reading(1);
            let secondReading = new Reading(2);
            
            newReadingMap.set(firstReading.id, firstReading);
            newReadingMap.set(secondReading.id, secondReading);
            
            let newDial = new Dial(3, 'Some dial.', newReadingMap);
            
            assert.equal(newDial.id, 3);
            assert.equal(newDial.description, 'Some dial.');
            assert.equal(newDial.readings, newReadingMap);
        });
        
    });
    
});