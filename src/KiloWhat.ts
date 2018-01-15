import { Meter } from './Meter';
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
}
