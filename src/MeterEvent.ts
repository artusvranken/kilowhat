/**
* A MeterEvent can be used to convey a certain event in the history of your Meter, like a power outtage.
*/
export class MeterEvent
{
    public id : number;
    public description : string;
    public date : Date;
    
    /**
    * Initialise a new MeterEvent instance.
    * @constructor
    * 
    * @param {number} [id=-1] - The ID of the new MeterEvent.
    * @param {string} [description="A new MeterEvent"] - The description of the new MeterEvent.
    * @param {Date} [date=new Date()] - The date of the new MeterEvent.
    */
    constructor(id : number = -1, description : string = "A new MeterEvent.", date : Date = new Date())
    {
        this.id = id;
        this.description = description;
        this.date = date;
    }
    
    static compare(firstMeterEvent : MeterEvent, secondMeterEvent : MeterEvent) : number
    {
        return secondMeterEvent.date.getTime() - firstMeterEvent.date.getTime();
    }
}