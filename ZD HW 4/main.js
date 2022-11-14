//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let dogs =[];
for (let i = 0; i < 10; i++) {
    const dog = dogs[i];
    document.write(`<div>Privet
</div>`);

};

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let pets =[];
for (let i = 0; i < 10; i++) {
    document.write(`<div>${[i]} Privet
</div>`);

};

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині
let cars = [];
for (let i = 0; i < 20; i++) {
    const car = cars[i];
    document.write(`<h1>Porsche 911</h1>`);
};

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині
let names = [];
for (let i = 0; i < 20; i++) {
    const name = names[i];
    document.write(`<h1>${[i]} Dmitriy</h1>`);
};

//Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Масив:

//    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

//ШАБЛОН:
//<ul>
// <li>ITEM OF ARRAY</li>
// <!--
//і тд інші об'єкти масиву
// ...
// ...
// ...
// -->
//</ul>

//замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (let i = 0; i < listOfItems.length; i++) {
//    const listOfItem = listOfItems[i];
//    document.write(`<ul>
// <li>${listOfItem}</li>
// </ul>`);
// };

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (let listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
};
document.write(`</ul>`);
//Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону  Зробити адекватну стилізацію
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

//let products = [
//    {
//        title: 'milk',
//        price: 22,
//        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//    },
//    {
//        title: 'juice',
//        price: 27,
//        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//    },
//    {
//        title: 'tomato',
//        price: 47,
//        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//    },
//    {
//        title: 'tea',
//        price: 15,
//        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//    },
//];

//ШАБЛОН
//<div className="product-card">
//    <h3 className="product-title">TITLE. Price - PRICE</h3>
//    <img src="IMAGE" alt="" className="product-image">
//</div>
//Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 1.2,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 2.7,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 2.47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 0.5,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(`<div class ="product-card">
        <h3 class ="product-title">${product.title}: ${product.price} EUR</h3>
        <img src="${product.image}" alt="" class ="product-image">
    </div>`);
};

//є масив
//let users = [
//    {name: 'vasya', age: 31, status: false},
//    {name: 'petya', age: 30, status: true},
//    {name: 'kolya', age: 29, status: true},
//    {name: 'olya', age: 28, status: false},
//    {name: 'max', age: 30, status: true},
//    {name: 'anya', age: 31, status: false},
//    {name: 'oleg', age: 28, status: false},
//    {name: 'andrey', age: 29, status: true},
//    {name: 'masha', age: 30, status: true},
//    {name: 'olya', age: 31, status: false},
//    {name: 'max', age: 31, status: true}
//];
//за допомоги циклу вивести:
//    one- користувачів зі статусом true
//    two- користувачів зі статусом false
//    three- користувачів які старші за 30 років

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
for (const user of users) {
    if (user.status){
        document.write(`<h2>${user.name} ${user.age} ${user.status}</h2>`)
    };

};
for (const user of users) {
    if (!user.status){
        document.write(`<h5>${user.name} ${user.age} ${user.status}</h5>`)
    };

};
for (const user of users) {
    if (user.age >= 30){
        document.write(`<h1>${user.name} ${user.age} ${user.status}</h1>`)
    };

};