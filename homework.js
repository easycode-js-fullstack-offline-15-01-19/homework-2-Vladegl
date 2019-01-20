// -------------------------- Home work --------------------------
// -------------------------- Еглевский Владислав Александрович --------------------------


// ------------------------------------------------Преобразование примитивов. Задачи.------------------------------------------------

//1. Чему равно a, почему?


//1.1

let a = 0 || 'string'; // a равно 'string', поскольку оператор || запинается на правде, а любая строка(кроме пустой) - true. 0 - false.

//1.2

let a = 1 && 'string'; // a равно 'string', поскольку оператор && запинается на лжи, а если таковой нет, то выводит последнее значение.

//1.3

let a = null || 25; // a равно 25, это первое вхождение true(любое число, кроме 0 - true).

//1.4

let a = null && 25; // a равно null, поскольку это первое вхождение false(null приравнивается к false)

//1.5

let a = null || 0 || 35; // a равно 35, поскольку это первое вхождение true.

//1.6

let a = null && 0 && 35; // a равно null, поскольку это первое вхождение false.


//2. Что отобразится в консоли. Почему?


//2.1

12 + 14 + '12'; // Отобразится строка 2612, результат сложения суммы первых двух чисел со строкой '12'.

// //2.2

3 + 2 - '1'; // Отобразится число 4, результат вычитания из суммы первых двух чисел, третьего. Строка '1' конвертируется в число.

// //2.3

'3' + 2 - 1; // Отобразится число 31 (результат конкатенации - строка '32' преобразуется в число, после чего совершается операция вычитания).

// //2.4

true + 2; // Отобразится число 3, результат преобразования true в число 1, и последующего сложения.

// //2.5

+'10' + 1; // Отобразится число 11 (унарный оператор + меняет строку '10' на число, после чего идет сложение)

// //2.6

undefined + 2; // Отобразится NaN, поскольку undefined равно NaN и наоборот, но ничему другому. Далее идет сложение NaN с числом, результат чего NaN.

// //2.7

null + 5; // Отобразится число 5 (null преобразуется в число 0, после чего идет сложение)

// //2.8

true + undefined; // Отобразится NaN. true преобразуется в 1, а undefined преобразуется в NaN. Результат  их сложения - NaN.


//------------------------------------------------If else. Задачи.------------------------------------------------

//1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let value = 'some_value';
if (value === 'hidden') {
	value = 'visible';
} else {
	value = 'hidden';
}

// Используя if, записать условие:

//a. Если переменная равна нулю, присвоить ей 1;

let variable = 12;
if (variable === 0) {
variable = 1;
}

//b. Если меньше нуля - строку “less then zero”;

let variable = 12;
if (variable < 0) {
	variable = 'less than zero';
}

//c. Если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let variable = 12;
if (variable > 0) {
	variable *= 10;
}


// a+b+c

let variable = 12;
if (variable === 0) {
	variable = 1;
} else if (variable < 0) {
	variable = 'less than zero';
} else {
	variable *=10;
}

//3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
//		Написать условие если возраст машины больше 5 лет то нужно вывести в консоль 
//		сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { 
	name: 'Lexus', 
	age: 10, 
	create: 2008, 
	needRepair: false
}

if (car.age > 5) {
	console.log('Need Repair');
	car.needRepair = true;
} else {
	car.needRepair = false;
}


//4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
//Написать условие если у item есть поле discount и там есть значение то в объекте item создать 
//поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount
//и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = { 
	name: 'Intel core i7', 
	price: '100$', 
	discount: '15%' 
}

if (item.discount) {
	item.priceWithDiscount = (parseInt(item.price, 10) / 100) * (100 - parseInt(item.discount, 10))+'$';
	console.log(item.priceWithDiscount);
} else {
	console.log(item.price);
}


//5. Дан следующий код:

let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

// Написать условие если цена товара больше или равна
// минимальной цене и меньше или равна максимальной цене то вывести в 
// консоль название этого товара, иначе вывести в консоль что товаров не найдено.

if ((parseInt(product.price) >= min) && (parseInt(product.price) <= max)) {
	console.log('название этого товара');
} else {
	console.log('товаров не найдено.');
}


//--------------------------------------Тернарный оператор. Switch case. Задачи.-------------------------------------

//1. Записать в виде switch case следующее условие:

if (a === ‘block’) {
	console.log(‘block’)
} else if (a === ‘none’) {
	console.log(‘none’)
} else if (a === ‘inline’) {
console.log(‘inline’)
} else {
	console.log(‘other’)
}

// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

a = 'inline';

switch (a) {
 case 'block': console.log('block');
	break;
 case 'none': console.log('none');
	break;
 case 'inline': console.log('inline');
 	break;
 default: console.log('other');
 	break;
}

//2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

//2.a Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let someVar = 'hidden';
someVar = someVar === 'hidden' ? 'visible'
	: 'hidden';

//2.

let someVar = 20;
someVar = someVar === 0 ? 1
	: someVar < 0 ? 'less than zero'
	: someVar * 10;

//3.

let car = { 
	name: 'Lexus', 
	age: 10, 
	create: 2008, 
	needRepair: false 
}

car.age > 5 ? (car.needRepair = true , console.log('Need Repair'))
	: car.needRepair = false;

