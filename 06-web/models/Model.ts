import {AxiosPromise, AxiosResponse} from "axios";

interface ModelAttributes<T> {
    set(value: T): void
    getAll(): T
    get<K extends keyof T>(key: K): T[K]
}

interface ApiSync<T> {
    fetch(id: number): AxiosPromise
    save(data: T): AxiosPromise
}

interface Events {
    on(eventName: string, callback: () => void): void
    trigger(eventName: string): void
}

interface HasId {
    id?: number
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: ApiSync<T>
    ) {}

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }

    get get() {
        return this.attributes.get
    }

    set(update: T): void {
        this.attributes.set(update)
        this.events.trigger('change')
    }

    fetch(): void {
        const id = this.attributes.get('id')

        if(!id) {
            throw new Error('Нельзя запросить данные без id')
        }

        this.sync.fetch(id).then((r: AxiosResponse): void => {
            this.set(r.data)
        })
    }

    save(): void{
        this.sync.save(this.attributes.getAll())
            .then((r: AxiosResponse): void => {
                this.trigger('save')
            })
            .catch(() => {
                this.trigger('error')
            })
    }
}