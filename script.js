//111.1 for loop in JavaScript
// for (let i = 1; i <= 100; i++) {
// 	console.log(i);
// }

//111.2
// for (let i = 11; i <= 33; i++) {
// 	console.log(i);
// }

//111.3
// for (let i = 0; i < 101; i += 2) {
// 	console.log(i);
// }

//111.4
// for (let i = 1; i < 99; i++) {
// 	console.log(i);
// }

//111.5
// for (let i = 100; i > 0; i--) {
// 	console.log(i);
// }

//112.1 Перебор массива циклом for-of
// let arr = ['a', 'b', 'c', 'd', 'e'];

// for (let elem of arr) {
// 	console.log(elem);
// }

//113.1 Перебор объекта циклом for-in
// let obj = { x: 1, y: 2, z: 3 };

// for (let key in obj) {
// 	console.log(key);
// }

//113.2
// let obj = { x: 1, y: 2, z: 3 };

// for (let key in obj) {
// 	console.log(obj[key]);
// }

//114.1 Цикл while
// let num = 1;

// while (num < 100) {
// 	console.log(num);
// 	num++;
// }

//114.2
// let num = 11;

// while (num < 34) {
// 	console.log(num);
// 	num++;
// }

//114.3
// let num = 7;

// while (num < 1000) {
// 	num = num * 3;
// 	console.log(num); //5 итераций
// }

//115.1 Цикл for для массивов
// let arr = ['a', 'b', 'c', 'd', 'e'];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

//115.2
// let arr = ['a', 'b', 'c', 'd', 'e'];

// for (let i = 1; i < arr.length - 1; i++) {
// 	console.log(arr[i]);
// }

//115.3
// let arr = ['a', 'b', 'c', 'd', 'e'];

// for (let i = arr.length - 1; i > 0; i--) {
// 	console.log(arr[i]);
// }

//115.4
// let arr = ['a', 'b', 'c', 'd', 'e'];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

//116.1 Условия в циклах
// let arr = [2, 5, 9, 15, 1, 4];

// for (let elem of arr) {
// 	if (elem > 3 && elem < 10) {
// 		console.log(elem);
// 	}
// }

//116.2
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// for (let key in obj) {
// 	if (obj[key] % 2 === 1) {
// 		console.log(obj[key]);
// 	}
// }

//117.1 Накопление чисел в циклах
// let res = 0;

// for (let i = 2; i < 100; i++) {
// 	if (i % 2 == 0) {
// 		res += i;
// 	}
// }

// console.log(res);

//117.2
// let sum = 0;

// for (let i = 1; i <= 99; i++) {
// 	if (i % 2 == 1) {
// 		sum += i;
// 	}
// }
// console.log(sum);

//117.3
// let res = 1;

// for (let i = 1; i <= 20; i++) {
// 	res = res * i;
// 	console.log(res);
// }

//118.1 Накопление элементов массивов в циклах
// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;

// for (let elem of arr) {
// 	res = res + elem;
// }
// console.log(res);

//118.2
// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;

// for (let elem of arr) {
// 	if (elem % 2 == 0) {
// 		res = elem + res;
// 	}
// }
// console.log(res);

//118.3
// let arr = [2, 5, 9, 3, 1, 4];

// for (let elem of arr) {
// 	res = elem * elem;
// 	console.log(res);
// }

//119.1 Формирование строк через циклы
// let str = ' ';

// for (let i = 0; i < 1; i++) {
// 	str += '-----';
// 	console.log(str);
// }

//119.2
// let str = '';

// for (let i = 1; i <= 9; i++) {
// 	str = str += i;
// }
// console.log(str);

//119.3
// let str = '';

// for (let i = 9; i >= 1; i--) {
// 	str += i;
// }
// console.log(str);

//119.4
// let str = '';

// for (let i = 1; i <= 9; i++) {
// 	str = str + i + '-';
// }
// console.log(str);

//120.1 Цифры числа при переборе циклом

// for (let i = 10; i <= 100; i++) {
// 	let str = String(i)[0];
// 	console.log(str);
// }

//120.2 Не решено
//Переберите циклом числа от 10 до 1000 и выведите в консоль сумму первой и второй цифры каждого числа.
let res = 0;
for (let i = 10; i <= 1000; i++) {
	let str = String(i);
	let res = +str[0] + +str[1];
	console.log(res);
}
//120.3
// for (let i = 10; i <= 1000; i++) {
// 	let str = String(i)[0];
// 	if (str == 1) {
// 		console.log(str);
// 	}
// }

//120.4
// for (let i = 10; i <= 1000; i++) {
// 	let str = String(i);
// 	if (+str[0] + +str[1] == 5) {
// 		console.log(str);
// 	}
// }

//121.1 Инструкция break
// let arr = [1, 2, 3, 0, 4, 5];

// for (let elem of arr) {
// 	if (elem == 0) {
// 		console.log(elem);
// 		break;
// 	}
// 	console.log(elem);
// }

//121.2
// let arr = [1, 2, 3, 5, -4, 5];
// let count = 0;

// for (let i = 1; i < arr.length; i++) {
// 	count += arr[i];
// 	if (i < 0) {
// 		break;
// 	}
// }
// console.log(count);

//121.3
// let arr = [1, 2, 3, 0, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == 3) {
// 		console.log(i);
// 		break;
// 	}
// }

//121.4 Не решено Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
// let count = 0;

// for (let i = 1; i < 100; i++) {
// 	count += i;
// 	if (count > 100) {
// 		console.log(count);
// 		break;
// 	}
// }
