///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// let newUsers = [];
// function foo (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// newUsers.push(new foo(1, 'Vasya', 'Wresd', 'dffgcgh@mail', '976543333'));
// newUsers.push(new foo(2, 'Anton', 'Puytr', 'fxhxfm@mail', '976543213'));
// newUsers.push(new foo(3, 'Olya', 'Qjgck', 'kfhd@mail', '976876543'));
// newUsers.push(new foo(4, 'Max', 'Kmhfd', 'dffgf@mail', '976212321'));
// newUsers.push(new foo(5, 'Oleg', 'Hyfdxf', 'gxerjhkg@mail', '976444444'));
// newUsers.push(new foo(6, 'Kostya', 'Jtdsfgjx', 'xcasdf@mail', '976545454'));
// newUsers.push(new foo(7, 'Sveta', 'Phmfxx', 'dgxgxhnb@mail', '976656543'));
// newUsers.push(new foo(8, 'Kolya', 'Okyfx', 'xdgszxt@mail', '976987687'));
// newUsers.push(new foo(9, 'Ivan', 'Rhfffhc', 'sfghfff@mail', '976765409'));
// newUsers.push(new foo(10, 'Semen', 'Tkghhgk', 'fdutdssz@mail', '976095431'));
// console.log(newUsers);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filter = newUsers.filter(function (newUser){
//     return newUser.id%2===0;
// });
// console.log(filter);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = newUsers.sort(function (a, b){
//     return b.id-a.id;
// });
// console.log(sort);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id,name,surname,email,phone,orders) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.orders = orders;
//     }
// }
// let newClient = [];
// newClient.push(new Client(1,'Vasya', 'Wresd', 'dffgcgh@mail', '976543333', ['tea', 'apple']));
// newClient.push(new Client(2, 'Anton', 'Puytr', 'fxhxfm@mail', '976543213',['cheeps', 'coffee']));
// newClient.push(new Client(3, 'Olya', 'Qjgck', 'kfhd@mail', '976876543',['bananas', 'ananas','apple']));
// newClient.push(new Client(4, 'Max', 'Kmhfd', 'dffgf@mail', '976212321',['choko', 'hgfdjyfd','hgfd']));
// newClient.push(new Client(5, 'Oleg', 'Hyfdxf', 'gxerjhkg@mail', '976444444',['hgftr', 'ggfdddd','jjjjjj']));
// newClient.push(new Client(6, 'Kostya', 'Jtdsfgjx', 'xcasdf@mail', '976545454',['hgfreee', 'iiu']));
// newClient.push(new Client(7, 'Sveta', 'Phmfxx', 'dgxgxhnb@mail', '976656543',['hgtt', 'kjuy','ygf','kgc','ffdf','fghfgh']));
// newClient.push(new Client(8, 'Kolya', 'Okyfx', 'xdgszxt@mail', '976987687',['jhyt', 'jjjj','jgfx']));
// newClient.push(new Client(9, 'Ivan', 'Rhfffhc', 'sfghfff@mail', '976765409',['jhyt', 'hgttt','qwe', 'uyty']));
// newClient.push(new Client(10, 'Semen', 'Tkghhgk', 'fdutdssz@mail', '976095431',['uuuu']));
// console.log(newClient);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort = newClient.sort(function (a, b){
//     return a.orders.length-b.orders.length;
// });
// console.log(sort);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями:
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//======================================================================================================================
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// function car (model, fabrica, year, speed, motor) {
//     this.model = model;
//     this.fabrica = fabrica;
//     this.year = year;
//     this.speed = speed;
//     this.motor = motor;
//     this.greeting = function (msg){
//         return `${msg} їдемо зі швидкістю ${this.speed}`
//     };
// }
// let drive = new car('Ford',"USA", 2008, 260, 3);
// console.log(drive.greeting('Mи'));

//=====================================================================================================================
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// function car (model, fabrica, year, speed, motor) {
//     this.model = model;
//     this.fabrica = fabrica;
//     this.year = year;
//     this.speed = speed;
//     this.motor = motor;
// }
// let info = new car('Ford',"USA", 2008, 260, 3);
// console.log(info);

//======================================================================================================================
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

function car (model, fabrica, year, speed, motor) {
    this.model = model;
    this.fabrica = fabrica;
    this.year = year;
    this.speed = speed;
    this.motor = motor;
}
let car1 = new car('Ford', 'USA', 2008, 260, 3);

let increaseMaxSpeed = {
    newSpeed: 300
};
let mapa = car1.map(function (car1){
    let newCar = {model:car1.model, fabrica:car1.fabrica, year:car1.year, speed:increaseMaxSpeed.newSpeed, motor:car1.motor}
    return newCar;
});
console.log(mapa);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку