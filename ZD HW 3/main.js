//- Є змінна х, якій ви надаєте довільне числове значення.
//  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//  Перевірте  скрипт при a, що дорівнює 1, 0, -3

//let x = +prompt("enter number");
//if (x !== 0) {
//    console.log("Good");
//}else{
//    console.log("Not Good");
//}
//==========================================================================================================
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

//let time = +prompt('enter number from 0 till 59');
//if (time >=0 && time<=15) {
//    console.log('First part of Hour');
//}else if (time >=16 && time<=30) {
//    console.log('Second part of Hour');
//}else if (time >=31 && time<=45) {
//    console.log('Third part of Hour');
//}else if (time >=46 && time<=59) {
//    console.log('Fourth part of Hour');
//}else{
//    console.log('enter please number correctly!!!');
//}

//==============================================================================================================
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

//let day = +prompt('enter number from 1 till 31');
//if (day >=1 && day<=10) {
//    console.log('First Decade');
//}else if (day >=11 && day<=20) {
//    console.log('Second Decade');
//}else if (day >=21 && day<=31) {
//    console.log('Third Decade');
//}else{
//    console.log('enter please number correctly!!!');
//}

//===============================================================================================================
//- Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

//let day_of_week = +prompt('enter number from 1 till 7');
//switch (day_of_week){
//    case 1:
//        console.log('Sunday');
//        break;
//    case 2:
//        console.log('Monday');
//        break;
//    case 3:
//        console.log('Tuesday');
//        break;
//    case 4:
//        console.log('Wednesday');
//        break;
//    case 5:
//        console.log('Thursday');
//        break;
//    case 6:
//        console.log('Friday');
//        break;
//    case 7:
//        console.log('Saturday');
//        break;
//    default:
//        console.log('enter please number correctly!!!');
//}


//============================================================================================================
//- Користувач вводить або має два числа.
//      Потрібно знайти та вивести максимальне число з тих двох .
//    Також потрібно врахувати коли введені рівні числа.

//let a = +prompt('enter number 1');
//let b = +prompt('enter number 2');
//if (a >= b) {
//    console.log(a);
//}else if (b>=a) {
//    console.log(b);
//}


//==============================================================================================================
//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = prompt() || "default";
console.log(x);




