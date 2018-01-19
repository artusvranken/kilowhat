import { Reading } from '../src/Reading';
import * as assert from 'assert';

describe('Reading', () => {
    
    describe('constructor', () => {
      it('should initialise default values if no values are supplied.', () => {
          let newReading = new Reading();
          
          assert.equal(newReading.id, -1);
          assert.equal(newReading.value, 0);
          assert.equal(newReading.date.toISOString(), newReading.date.toISOString());
      });
      it('should initialise values if they are supplied correctly.', () => {
          let newDateString = new Date().toISOString();
          let value = 100;
          let id = 2;
          
          let newReading = new Reading(id, value, new Date(newDateString));
          
          assert.equal(newReading.id, id);
          assert.equal(newReading.value, value);
          assert.equal(newReading.date.toISOString(), newDateString);
      });
    });
    
    describe('compare', () => {
        it('Should return a negative number when the first Reading has a date later than the date of the second Reading.', () => {
            let earlierReading = new Reading(0, 0, new Date("2018-01-19T11:00:00.000Z"));
            let laterReading = new Reading(0, 0, new Date("2019-01-19T12:00:00.000Z"));
            
            let comparedValue = Reading.compare(laterReading, earlierReading);
            assert.equal(comparedValue < 0, true);
        });
        
        it("should return a positive number when the first Reading has a date earlier than the date of the second Reading.", () => {
            let earlierReading = new Reading(0, 0, new Date("2018-01-19T11:00:00.000Z"));
            let laterReading = new Reading(0, 0, new Date("2019-01-19T12:00:00.000Z"));
            
            let comparedValue = Reading.compare(earlierReading, laterReading);
            assert.equal(comparedValue > 0, true);
        });
    });
});