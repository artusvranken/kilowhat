import { Dial } from './Dial';
import { MeterEvent } from './MeterEvent';

export class Meter
{
    id : number;
    dials : Map<number, Dial>;
    meterEvents : Map<number, MeterEvent>;
    description: string;
    
    constructor(meterId : number = -1, description : string = "A new meter.", dials : Map<number, Dial> = new Map<number, Dial>(), meterEvents : Map<number, MeterEvent> = new Map<number, MeterEvent>())
    {
        this.id = meterId;
        this.description = description;
        this.dials = dials;
        this.meterEvents = meterEvents;
    }
}