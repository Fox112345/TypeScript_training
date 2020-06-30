class Boat {
    @testDecorator
    color: string = 'red'

    get formattedColor(): string {
        return `This is ${this.color}`
    }

    @logError(`Somwthisng bad!`)
    pilot(): void {
        throw new Error()
        console.log('swish')
    }
}

function testDecorator(target: any, key: string) {
    console.log(target)
}

function logError(errMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        const method = desc.value

        try {
            method()
        } catch (e) {
            console.log(errMessage)
        }
    }
}

new Boat().pilot()