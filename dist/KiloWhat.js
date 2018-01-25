"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Meter_1 = require("./Meter");
const Dial_1 = require("./Dial");
const Reading_1 = require("./Reading");
const MeterRepositoryStub_1 = require("./MeterRepositoryStub");
/**
 * KiloWhat is the facade class of this package, which you can use to keep track of Meters, Dials, Readings and MeterEvents.
 */
class KiloWhat {
    /**
     * Initialise a new KiloWhat instance.
     * @constructor
     *
     * @param {Array<Meter>} [meters = new Array<Meter>()] - An existing list of meters.
     * @param {IdProvider} [idProvider = new IdProvider(0)] - An existing IdProvider.
     */
    constructor(meterRepository = new MeterRepositoryStub_1.MeterRepositoryStub()) {
        this.meterRepository = meterRepository;
    }
    addNewMeter(dialAmount = 1) {
        let newMeter = this.meterRepository.addMeter(new Meter_1.Meter());
        for (let currentDial = 0; currentDial < dialAmount; currentDial++) {
            let newDial = this.meterRepository.addDial(newMeter.id, new Dial_1.Dial());
            let newReading = this.meterRepository.addReading(newMeter.id, newDial.id, new Reading_1.Reading());
        }
        return newMeter;
    }
    addNewSingleMeter() {
        return this.addNewMeter(1);
    }
    addNewDualMeter() {
        return this.addNewMeter(2);
    }
}
exports.KiloWhat = KiloWhat;
