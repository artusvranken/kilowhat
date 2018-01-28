import { Meter } from './Meter';
import { Dial } from './Dial';
import { Reading } from './Reading';
import { MeterEvent } from './MeterEvent';

import { IMeterRepository } from './IMeterRepository';
import { MeterRepositoryStub } from './MeterRepositoryStub';

export * from './Meter';
export * from './Dial';
export * from './Reading';
export * from './MeterEvent';
export * from './IMeterRepository';
export * from './MeterRepositoryStub';

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
    
    get repo() : IMeterRepository
    {
        return this.meterRepository;
    }
    
    /**
     * Create and add a new Meter instance.
     *
     * @param {number} [dialAmount = 1] - The amount of Dials that should be maintained by this Meter.
     * @returns {Meter} The new Meter that was created and added to our MeterRepository.
     */
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

    /**
     * Add a new single Meter, which is a Meter that maintains only 1 Dial.
     *
     * @returns {Meter} The new Meter that was created and added to our MeterRepository.
     */
    addNewSingleMeter() : Meter
    {
        return this.addNewMeter(1);
    }
    
    /**
     * Add a new dual Meter, which is a Meter that maintains 2 Dials.
     *
     * @returns {Meter} The new Meter that was created and added to our MeterRepository.
     */
    addNewDualMeter() : Meter
    {
        return this.addNewMeter(2);
    }
}
