/**
 * An EventArgs object can be used to pass Event information on to the receiver of an EventEmitter.
 */
export class EventArgs
{
    action : string;
    field : string;
    value : any;

    /**
     * Create a new instance of an EventArgs.
     * @constructor
     *
     * @param {string} action - The action of the Event.
     * @param {string} field - The field of the EventEmitter that has been involved in the Event.
     * @param {any} value - The value of the involved field.
     */
    constructor(action : string, field : string, value : any)
    {
        this.action = action;
        this.field = field;
        this.value = value;
    }
}