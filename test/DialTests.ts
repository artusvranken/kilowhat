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
    
    describe('sortedReadings', () => {
        it('should return an empty array when no Readings are present.', () => {
            let dial = new Dial();
            
            assert.equal(dial.sortedReadings.length, 0);
        });
        
        it('should return a list of Readings ordered from newest to olders.', () => {
            let dial = new Dial();
            let oldestReading = new Reading(4, 0, new Date("2017-01-01T11:00:00.000Z"));
            let oldReading = new Reading(0, 0, new Date("2018-01-01T11:00:00.000Z"));
            let newReading = new Reading(1, 0, new Date("2018-01-02T11:00:00.000Z"));
            let newestReading = new Reading(2, 0, new Date("2018-01-03T11:00:00.000Z"));
            
            dial.readings.set(newReading.id, newReading);
            dial.readings.set(oldReading.id, oldReading);
            dial.readings.set(newestReading.id, newestReading);
            dial.readings.set(oldestReading.id, oldestReading);
            
            let sortedReadings = dial.sortedReadings();
            
            assert.equal(sortedReadings[0], newestReading);
            assert.equal(sortedReadings[1], newReading);
            assert.equal(sortedReadings[2], oldReading);
            assert.equal(sortedReadings[3], oldestReading);
        });
    })
    
    describe('latestReading', () => {
        it('should return undefined when no readings are present.', () => {
            let dial = new Dial();
            let latestReading = dial.latestReading();
            
            assert.equal(typeof latestReading, 'undefined');
        });
        
        it('should return the newest reading.', () => {
            let dial = new Dial();
            let oldestReading = new Reading(4, 0, new Date("2017-01-01T11:00:00.000Z"));
            let oldReading = new Reading(0, 0, new Date("2018-01-01T11:00:00.000Z"));
            let newReading = new Reading(1, 0, new Date("2018-01-02T11:00:00.000Z"));
            let newestReading = new Reading(2, 0, new Date("2018-01-03T11:00:00.000Z"));
            
            dial.readings.set(newReading.id, newReading);
            dial.readings.set(oldReading.id, oldReading);
            dial.readings.set(newestReading.id, newestReading);
            dial.readings.set(oldestReading.id, oldestReading);
            
            assert.equal(dial.latestReading(), newestReading);
        });
    }); 
    
    describe('value', () => {
        it('should return 0 when no readings are present.', () => {
            let dial = new Dial();
            assert.equal(dial.value(), 0);
        });
        
        it('should return the value of the latest reading.', () => {
            let dial = new Dial();
            let oldestReading = new Reading(4, 1, new Date("2017-01-01T11:00:00.000Z"));
            let oldReading = new Reading(0, 2, new Date("2018-01-01T11:00:00.000Z"));
            let newReading = new Reading(1, 3, new Date("2018-01-02T11:00:00.000Z"));
            let newestReading = new Reading(2, 4, new Date("2018-01-03T11:00:00.000Z"));
            
            dial.readings.set(newReading.id, newReading);
            dial.readings.set(oldReading.id, oldReading);
            dial.readings.set(newestReading.id, newestReading);
            dial.readings.set(oldestReading.id, oldestReading);
            
            assert.equal(dial.value(), 4);
        })
    });
    
});