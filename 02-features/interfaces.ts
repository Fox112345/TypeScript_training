interface Vehicle {
    // name: string; 
    // year: number; 
    // broken: boolean
    summary(): string
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return 'STRING'
    }
}

const drinkk = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return 'STRING DRINK'
    }
};


const printVehicle = (vehicle: Vehicle): void => {
    console.log(`${vehicle.summary}`);
};

printVehicle(oldCivic) 
printVehicle(drinkk) 