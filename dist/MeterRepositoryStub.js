"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MeterRepositoryStub {
    constructor() {
        this.idCounter = 0;
        this.meters = new Map();
    }
    newId() {
        return this.idCounter++;
    }
    getMeters() {
        return this.meters;
    }
    getMeter(meterId) {
        if (this.getMeters().has(meterId))
            return this.getMeters().get(meterId);
        throw new Error(`Meter with id ${meterId} not found.`);
    }
    addMeter(newMeter) {
        if (newMeter.id < 0)
            newMeter.id = this.newId();
        this.getMeters().set(newMeter.id, newMeter);
        return newMeter;
    }
    removeMeter(meterId) {
        this.getMeters().delete(meterId);
        return this.getMeters().size;
    }
    getMeterEvents(meterId) {
        return this.getMeter(meterId).meterEvents;
    }
    getMeterEvent(meterId, meterEventId) {
        if (this.getMeterEvents(meterId).has(meterEventId))
            return this.getMeterEvents(meterId).get(meterEventId);
        throw new Error(`MeterEvent with id ${meterEventId} not found.`);
    }
    addMeterEvent(meterId, newMeterEvent) {
        if (newMeterEvent.id < 0)
            newMeterEvent.id = this.newId();
        this.getMeterEvents(meterId).set(newMeterEvent.id, newMeterEvent);
        return newMeterEvent;
    }
    removeMeterEvent(meterId, meterEventId) {
        this.getMeterEvents(meterId).delete(meterEventId);
        return this.getMeterEvents(meterId).size;
    }
    getDials(meterId) {
        return this.getMeter(meterId).dials;
    }
    getDial(meterId, dialId) {
        if (this.getDials(meterId).has(dialId))
            return this.getDials(meterId).get(dialId);
        throw new Error(`Dial with id ${dialId} not found.`);
    }
    addDial(meterId, newDial) {
        if (newDial.id < 0)
            newDial.id = this.newId();
        this.getDials(meterId).set(newDial.id, newDial);
        return newDial;
    }
    removeDial(meterId, dialId) {
        this.getDials(meterId).delete(dialId);
        return this.getDials(meterId).size;
    }
    getReadings(meterId, dialId) {
        return this.getDial(meterId, dialId).readings;
    }
    getReading(meterId, dialId, readingId) {
        if (this.getReadings(meterId, dialId).has(readingId))
            return this.getReadings(meterId, dialId).get(readingId);
        throw new Error(`Reading with id ${readingId} not found.`);
    }
    addReading(meterId, dialId, newReading) {
        if (newReading.id < 0)
            newReading.id = this.newId();
        this.getReadings(meterId, dialId).set(newReading.id, newReading);
        return newReading;
    }
    removeReading(meterId, dialId, readingId) {
        this.getReadings(meterId, dialId).delete(readingId);
        return this.getReadings(meterId, dialId).size;
    }
}
exports.MeterRepositoryStub = MeterRepositoryStub;
