//=====================================================================================================================

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) => {
//     let massiv = [];
//     for (let i = 0; i < str.length; i += n) {
//         massiv.push(str.slice(i, n + i))
//     }
//     return massiv;
// }
// let cutString1 = cutString('наслаждение', 3);
// console.log(cutString1);
//=====================================================================================================================

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let str = 'Каждый охотник желает знать';
let deletestring = (str, length) => str.slice(0, length);
let deletestring1 = deletestring(str, 11);
console.log(deletestring1);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі
// символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
//
// const insert_dash = (str) => str.split(' ').join('-').toUpperCase();
//
// let insertDash = insert_dash(str);
// console.log(insertDash);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'hello';
//
// const toUp = (str) => str[0].toUpperCase() + str.slice(1);
//
// console.log(toUp(str));

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let str = '   !@#$%^&*Harry..     Pott55555er   ';
//
// const norm = (str) => {
//     let string = str.split('').map(value => (value >= 'A' && value <= 'Z') || (value >= 'a' && value <= 'z') ||
//     (value >= '0' && value <= '9') ? value : ' ').join('').trim();
//
//     let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//
//     for (let i = 0; i < arr.length; i++) {
//         while (string.includes('  ') || string.includes(arr[i])) {
//             string = string.replace('  ', '').replace(arr[i], '');
//         }
//     }
//
//     return string;
// }
// let norm1 = norm(str);
// console.log(norm1);


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'Каждый охотник желает знать';
//
// const capitalize = (str) => str.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ');
// console.log(capitalize(str));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
//     наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до
// регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом,
//     з регулярками будете потім бавитись.

// const val = (str1) => {
//     let str = str1.toLowerCase();
//     if (!str.startsWith('@') && str.includes('@') && str.includes('.', str.indexOf('@') + 3)) {
//
//         console.log('Valid');
//     } else {
//         console.log('Not valid');
//     }
// }
//
// val('someemail@gmail.com');
// val('someeMAIL@gmail.com');
// val('someeMAIL@i.ua');
// val('some.email@gmail.com');


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let symb = "н";
// let str = "Астрономия это наука о небесных объектах";
//
// const count = (str, symb) => {
//     let count = 0;
//     let split = str.split('');
//
//     for (const item of split) {
//         if (item === symb) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(count(str, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'


// let str = "Сила тяжести приложена к центру масс тела";
//
// const cutString = (str, n) => str.split(' ').splice(0, n).join(' ');
//
// console.log(cutString(str, 5));