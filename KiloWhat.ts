import { Meter } from './Meter';

export class KiloWhat
{
    public meters : Array<Meter>;
    
    constructor(meters : Array<Meter> = new Array<Meter>())
    {
        this.meters = meters;
    }
}