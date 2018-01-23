import { Event } from 'typescript.events';
import { EventArgs } from './EventArgs';

export class EventEmitter extends Event
{
    constructor()
    {
        super();
    }

    emitEvent(eventArgs : EventArgs)
    {
        this.emit(eventArgs.action, eventArgs);
    }
}