const varMarks: string[] = ['ford', 'toyota', 'chevy'];

const carsMakers: string[][] = [];

varMarks.map((car: string): string => {
    return car.toUpperCase();
});


// Flexible types
const importDates: (Date | string)[] = [new Date(), 'wefew'];

importDates.push('few');
importDates.push(new Date());

