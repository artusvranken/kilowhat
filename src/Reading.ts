/**
* A Reading is a notation of the state of a meter at a certain point in time.
*/
export class Reading
{
    public id : number;
    public date : Date;
    public value : number;
    
    /**
    * Initialise a new instance of a Reading.
    * @constructor
    * 
    * @param {number} [id = -1] - The ID of the new Reading.
    * @param {number} [value = 0] - The value of the new Reading.
    * @param {Date} [date = new Date()] - The date of the new Reading.
    */
    constructor(id : number = -1, value : number = 0, date : Date = new Date())
    {
        this.id = id;
        this.date = date;
        this.value = value;
    }
    
    static compare(firstReading : Reading, secondReading : Reading) : number
    {
        return secondReading.date.getTime() - firstReading.date.getTime();
    }
}