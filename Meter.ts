import { MeterType } from './MeterType';
import { Dial } from './Dial';
import { Reading } from './Reading';

export interface Meter
{
    readonly meterType : MeterType;

    id : number;
    dials : Array<Dial>;
    description: string;
}