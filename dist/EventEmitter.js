"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_events_1 = require("typescript.events");
class EventEmitter extends typescript_events_1.Event {
    constructor() {
        super();
    }
    emitEvent(eventArgs) {
        this.emit(eventArgs.action, eventArgs);
    }
}
exports.EventEmitter = EventEmitter;
