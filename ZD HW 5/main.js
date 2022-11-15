// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sqRec(a,b){
    return a * b;
}
let s = sqRec(4,6);
console.log(s)

//=================================================================================================================
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sqcir(r){
    return Math.PI*(r*r);
}
let scir = sqcir(5);
console.log(scir)

//===================================================================================================================
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r
function sqcyl(H,R){
    return (2*Math.PI*R)*(R+H);
}
let scyl = sqcyl(5,2);
console.log(scyl)

//====================================================================================================================
// - створити функцію яка приймає масив та виводить кожен його елемент
function list(us){
    for (const u of us) {
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
list(users);

//=====================================================================================================================
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(arg){
    document.write(`<p>${arg}</p>`);
}
paragraf('Lorem ipsum dolor sit amet, consectetur adipisicing elit');

//=====================================================================================================================
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulli(argu){
    document.write(`<ul>
        <li>${argu}</li>
        <li>${argu}</li>
        <li>${argu}</li>
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
    }
    document.write(`</ul>`);
}

ulli3('fdjyf', 3);
//=====================================================================================================================
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listArr(xxx){
    document.write(`<ul>`);
    for (const xx of xxx) {
        document.write(`<li>${xx}</li>`);
    }
    document.write(`</ul>`);
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

// вариант через FOR, и выводит число а не массив

function minChislo(mc) {
    let minimum = mc[0];
    for (const item of mc) {
        if (item < minimum) {
            minimum = item;
        }
    }
    return minimum;
}
console.log(minChislo([44, 4, 5, 88, 10, 9, 20]));


//=====================================================================================================================
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function summacisel(scisel){
    let su = 0;
    for (const item of scisel) {
        su += item;

    }
    return su;
}
console.log(summacisel([1, 2, 3, 3]));