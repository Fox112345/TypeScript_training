import {CsvFileReader} from "./CsvFileReader";


const reader = new CsvFileReader('football.csv');
reader.read();

const dateOfFirstMatch = reader.data[0]
console.log(dateOfFirstMatch)

// const printMatchResult = (): MatchResult => {
//     if (match[5] === 'H') {
//         return MatchResult.HomeWin
//     }
//     return MatchResult.AwayWin
// }

// let manUnitedWins = 0;
// for (let match of reader.data) {
//     if (match[1] === 'Man United' && match[5] === 'H') {
//         manUnitedWins++;
//     } else if (match[2] === 'Man United' && match[5] === 'A') {
//         manUnitedWins++
//     }
// }
//
// console.log(`Man united wins: ${manUnitedWins}`)