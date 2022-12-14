//===========================================================================================================
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = ('hello world');
// let str1 = ('lorem ipsum');
// let str2 = ('javascript is cool');
// let str3 = ('hello world, lorem ipsum, javascript is cool');
// console.log(str.length);
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

//===========================================================================================================
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = ('hello world');
// let str1 = ('lorem ipsum');
// let str2 = ('javascript is cool');
// let str3 = ('hello world, lorem ipsum, javascript is cool');
// console.log(str.toUpperCase());
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());
//===========================================================================================================
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = ('hello world');
// let str1 = ('lorem ipsum');
// let str2 = ('javascript is cool');
// let str3 = ('hello world, lorem ipsum, javascript is cool');
// console.log(str.toLowerCase());
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());
//===========================================================================================================
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = (' dirty string   ');
// let s = str.trim();
// console.log(s);

// or

// let str = (' dirty string   ');
// console.log(str.trim());


//===========================================================================================================
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(' ');
// console.log(arr);
//
//===========================================================================================================
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let map = arr.map(number => number.toString());
// console.log(map);

//===========================================================================================================
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let arr = [11,21,3];
// let direction = 1;
// console.log(arr.sort(function (a,b){
//     if(direction===1) {
//         return a - b;
//     }
//     if(direction===-1){
//         return b-a;
//     }
// }))
//
//
//===========================================================================================================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray
//     .sort((a,b) => (b.monthDuration-a.monthDuration))
//     .filter((fil)=>(fil.monthDuration>5))
//     .forEach(fil=>console.log(fil));


//===========================================================================================================
//
// описати колоду карт

let mastsandcolors = [
    {mast: 'heart', color: 'red'},
    {mast: 'diamond', color: 'red'},
    {mast: 'spade', color: 'black'},
    {mast: 'clubs', color: 'black'},
]
let cardNames = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let koloda = [];

for (const mastandcolor of mastsandcolors) {
    for (const cardName of cardNames) {
        let card = {
            mast: mastandcolor.mast,
            valueCard: cardName,
            color: mastandcolor.color
        }
        koloda.push(card);
    }
}
koloda.push({mast: 'joker', valueCard: null, color: 'red'});
koloda.push({mast: 'joker', valueCard: null, color: 'black'});
//console.log(koloda);
// - знайти піковий туз

//let filter = koloda.filter(tuz => tuz.mast === 'spade' && tuz.valueCard === 'ace');
//console.log(filter);

// - всі шістки

//let filter = koloda.filter(sest => sest.valueCard === '6');
//console.log(filter);
// - всі червоні карти

//let filter = koloda.filter(cvet => cvet.color === 'red');
//console.log(filter);
// - всі буби

//let filter = koloda.filter(bubna => bubna.mast === 'diamond');
//console.log(filter);
// - всі трефи від 9 та більше

//let filter = koloda.filter(trefa => trefa.mast === 'clubs' && trefa.valueCard >= '9' || trefa.mast === 'clubs' && trefa.valueCard === '10');
//console.log(filter);
//

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//===========================================================================================================
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт

let reduce = koloda.reduce((accumulator, value) => {
    if (value.mast === 'spade') {
        accumulator.spades.push(value);
    } else if (value.mast === 'diamond') {
        accumulator.diamonds.push(value);
    } else if (value.mast === 'heart') {
        accumulator.hearts.push(value);
    } else if (value.mast === 'clubs') {
        accumulator.clubses.push(value)
    }
    return accumulator;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubses:[]
});
console.log(reduce);
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
