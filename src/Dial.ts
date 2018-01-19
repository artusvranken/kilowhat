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
    
    value() : number
    {
        if (typeof this.latestReading() == 'undefined') return 0;
        return this.latestReading().value;
    }
    
    latestReading() : Reading
    {
        return this.sortedReadings()[0];
    }

    sortedReadings() : Array<Reading>
    {
        let sortedArray = Array.from(this.readings.values());
        sortedArray.sort(Reading.compare);
        return sortedArray;
    }
}