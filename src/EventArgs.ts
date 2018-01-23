export class EventArgs
{
    action : string;
    field : string;
    value : any;

    constructor(action : string, field : string, value : any)
    {
        this.action = action;
        this.field = field;
        this.value = value;
    }
}