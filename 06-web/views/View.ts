import {Model} from "../models/Model";

export abstract class View <T extends Model<K>,K>{
    regions: {[key: string]: Element} = {}

    constructor(public parent: Element, public model: T) {
        this.model.on('change', ()=> {
            this.render()
        })
    }

    abstract template(): string

    regionsMap(): {[key:string]: string} {
        return {}
    }
    eventMap(): { [key: string]: () => void } {
        return {}
    }


    bindEvents (fragment: DocumentFragment): void {
        const eventsMap = this.eventMap();
        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':')
            fragment.querySelectorAll(selector)
                .forEach(el => {
                    el.addEventListener(eventName, eventsMap[eventKey])
                })
        }
    }

    onRender(): void {

    }

    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap()

        for (let key in regionsMap){
            const selector = regionsMap[key]
            const el = fragment.querySelector(selector)

            if (el) this.regions[key] = el
        }
    }

    render(): void {
        this.parent.innerHTML = ''
        const templateElement = document.createElement('template')

        templateElement.innerHTML = this.template()

        this.bindEvents(templateElement.content)
        this.mapRegions(templateElement.content)

        this.onRender();

        this.parent.append(templateElement.content)
    }
}