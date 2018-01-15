import { Reading } from '../src/Reading';
import * as assert from 'assert';

describe('Reading', () => {
    
    describe('constructor', () => {
      it('should initialise values correctly if no values are supplied.', () => {
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
});