//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let massiv = [12,24,['fgf', '654', 543],'hgf', true, false, 'gfd', 345, 66, 'lkjh'];
console.log(massiv[0]);
console.log(massiv[1]);
console.log(massiv[2]);
console.log(massiv[3]);
console.log(massiv[4]);
console.log(massiv[5]);
console.log(massiv[6]);
console.log(massiv[7]);
console.log(massiv[8]);
console.log(massiv[9]);
console.log(massiv);

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books1 = {
  title: "hgfjyf",
  pageCount: 345,
  genre: 'drama'
}
console.log(books1);
let books2={
  title: "trrewsdf",
  pageCount: 234,
  genre: 'comedy'
}
console.log(books2);
let books3={
  title: "ssssss",
  pageCount: 10,
  genre: 'horror'
}
console.log(books3);

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let books4 = {
  title: "hgfjyf",
  pageCount: 345,
  genre: 'drama',
  authors: {
    name: 'Agatha',
    age: 45
  }
}
console.log(books4);

let books5 = {
  title: "wwwww",
  pageCount: 3555,
  genre: 'comedy',
  authors: {
    name: 'Tolik',
    age: 76
  }
}
console.log(books5);

let books6 = {
  title: "jjjj",
  pageCount: 39,
  genre: 'horror',
  authors: {
    name: 'Stiven',
    age: 65
  }
}
console.log(books6);


//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
  {name: 'Ivan', username: "Iv",password: 1212},
  {name: 'Petr', username: "Pe",password: 2424},
  {name: 'Olga', username: "Ol",password: 4848},
  {name: 'Semen', username: "Se",password: 1010},
  {name: 'Maria', username: "Ma",password: 2020},
  {name: 'Diana', username: "Di",password: 3030},
  {name: 'Dima', username: "Dim",password: 4040},
  {name: 'Milana', username: "Mi",password: 5050},
  {name: 'Angela', username: "An",password: 6060},
  {name: 'Sasha', username: "Sa",password: 7070}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


