
type Callback = () => void

export class Eventing {
    events: {[key: string]: Callback[]} ={}

    trigger = (eventName: string): void => {
        const handler = this.events[eventName];

        if(!handler || handler.length===0) {
            return
        }

        handler.forEach( cb => cb() )
    }

    on = (eventName: string, cb: Callback): void => {
        const handlers = this.events[eventName] || [];
        handlers.push(cb);
        this.events[eventName] = handlers;
    }

}