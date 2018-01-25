import { Event } from 'typescript.events';
import { EventArgs } from './EventArgs';

/**
 * An EventEmitter is a superclass that other classes can extend to support emitting events that take an EventArgs object as extra information.
 */
export class EventEmitter extends Event
{
    /**
     * Create a new instance of the EventEmitter.
     *
     */
    constructor()
    {
        super();
    }

    /**
     * Fire an event with supplied EventArgs information.
     *
     * @params {EventArgs} eventArgs - The EventArgs object that should be transmitted with the Event.
     */
    emitEvent(eventArgs : EventArgs)
    {
        this.emit(eventArgs.action, eventArgs);
    }
}