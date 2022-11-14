// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function SqRec(a,b){
    return a * b;
}
let S = SqRec(4,6);
console.log(S)

//=================================================================================================================
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function Sqcir(r){
    return Math.PI*(r*r);
}
let Scir = Sqcir(5);
console.log(Scir)

//===================================================================================================================
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r
function Sqcyl(H,R){
    return (2*Math.PI*R)*(R+H);
}
let Scyl = Sqcyl(5,2);
console.log(Scyl)

//====================================================================================================================
// - створити функцію яка приймає масив та виводить кожен його елемент
function LIST(US){
    for (const u of US) {
        console.log(u);
    }
}
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
LIST(users);

//=====================================================================================================================
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function Paragraf(arguments){
    document.write(`<p>${arguments}</p>`);
}
Paragraf('Lorem ipsum dolor sit amet, consectetur adipisicing elit');

//=====================================================================================================================
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulli(arguments){
    document.write(`<ul>
        <li>${arguments}</li>
        <li>${arguments}</li>
        <li>${arguments}</li>
    </ul>`);
}
ulli('Lorem ipsum dolor sit amet');

// SECOND VARIANT

function ulli2(tex){
    document.write(`<ul>`);
        document.write(`<li>${tex}</li>
        <li>${tex}</li>
        <li>${tex}</li>`);
    document.write(`</ul>`);
}
ulli2('Lorem');

//=====================================================================================================================
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulli3(text, counter) {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    };
    document.write(`</ul>`);
}

ulli3('fdjyf', 3);
//=====================================================================================================================
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listArr(xxx){
    for (const xx of xxx) {
        document.write(`<li>${xx}</li>`);
    }
}
let gg = [23,64,'gfg',false,43,true];
listArr(gg);

//===================================================================================================================
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function klients(people) {
    for (const person of people) {
        document.write(`<div>${person.id} ${person.name} ${person.age}</div>`);
        document.write(`=========`)
    }

}
let vvv = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2,name: 'petya', age: 30},
    {id: 3,name: 'kolya', age: 29},
    {id: 4,name: 'olya', age: 28}
];
klients(vvv);

//=====================================================================================================================
// - створити функцію яка повертає найменьше число з масиву

function ssss(arrMin){
    return[Math.min(...arrMin)];
}
console.log(ssss([1,2,3,4,5]));

//=====================================================================================================================
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function clozenije(Sdt){
    let sum = [];
    for (let i = 0; i < Sdt.length; i++) {
    return sum += Sdt[i];
    }
}
console.log(clozenije([1,2,3]));

