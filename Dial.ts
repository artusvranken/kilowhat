import { Reading } from './Reading';

export class Dial
{
    public id: number;
    public readings : Array<Reading>;
    
    get value() : number
    {
        let total = 0;
        
        for (let reading of this.readings)
        {
            return this.latestReading.value;
        }
        
        return 
    }
    
    get latestReading() : Reading
    {
        return this.readings[this.readings.length - 1];
    }
}