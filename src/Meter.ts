import { Dial } from './Dial';
import { MeterEvent } from './MeterEvent';

export class Meter
{
    id : number;
    dials : Array<Dial>;
    meterEvents : Array<MeterEvent>;
    description: string;
    
    constructor(meterId : number = -1, description : string = "A new meter.", dials : Array<Dial> = new Array<Dial>(), meterEvents : Array<MeterEvent> = new Array<MeterEvent>())
    {
        this.id = meterId;
        this.description = description;
        this.dials = dials;
        this.meterEvents = meterEvents;
    }
}