import { Reading } from './Reading';

export class Dial
{
    public id: number;
    public readings : Map<number, Reading>;
    public description : string;
    
    constructor(id : number = -1, description : string = "A new Dial.", readings : Map<number, Reading> = new Map<number, Reading>())
    {
        this.id = id;
        this.description = description;
        this.readings = readings;
    }
    
    get value() : number
    {
        let total = 0;
        
        for (let reading of this.readings)
        {
            return this.latestReading.value;
        }
        
        return total;
    }
    
    get latestReading() : Reading
    {
        return this.readings.values()[this.readings.size - 1];
    }
}