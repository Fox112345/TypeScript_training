class Vehicle {
    color: string = 'red'; 

    protected drive(): void {
        console.log('chugga chugga');
        
    }

    protected honk(): void {
        console.log('beep');
        
    }
}

class Carr extends Vehicle {
    drive(): void {
        console.log("vroom");
        
    }
}

const carr = new Carr();

carr.drive()