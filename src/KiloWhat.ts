import { Meter } from './Meter';
import { Dial } from './Dial';
import { Reading } from './Reading';

import { IMeterRepository } from './IMeterRepository';
import { MeterRepositoryStub } from './MeterRepositoryStub';

/**
 * KiloWhat is the facade class of this package, which you can use to keep track of Meters, Dials, Readings and MeterEvents.
 */
export class KiloWhat
{
    public meterRepository : IMeterRepository;

    /**
     * Initialise a new KiloWhat instance.
     * @constructor
     *
     * @param {Array<Meter>} [meters = new Array<Meter>()] - An existing list of meters.
     * @param {IdProvider} [idProvider = new IdProvider(0)] - An existing IdProvider.
     */
    constructor(meterRepository : IMeterRepository = new MeterRepositoryStub())
    {
        this.meterRepository = meterRepository;
    }
    
    addNewMeter(dialAmount : number = 1) : Meter
    {
        let newMeter = this.meterRepository.addMeter(new Meter());
        
        for (let currentDial = 0; currentDial < dialAmount; currentDial++)
        {
            let newDial = this.meterRepository.addDial(newMeter.id, new Dial());
            let newReading = this.meterRepository.addReading(newMeter.id, newDial.id, new Reading());
        }
        
        return newMeter;
    }

    addNewSingleMeter() : Meter
    {
        return this.addNewMeter(1);
    }
    
    addNewDualMeter() : Meter
    {
        return this.addNewMeter(2);
    }
}
