let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}

console.log(total);
///////////////////////////////////////////////////////////
// console.log(sum(range(1, 10)));
// a = 21;
// b = a * 2; 
// console.log(b);


// age = prompt("Please tell me your age:");
// console.log(age);
//////////////////////////////////////////////////////////////

let a = 20;

a = a + 1;
a *= 2;

console.log(a);
//////////////////////////////////////////////////

let q = "102";
let w = Number(q);

console.log(q); //str
console.log(w); //num

/////////////////////////////////////////////////////////////

e = "99.99";
r = 99.99;

t = e == r;

console.log(t);

////////////////////////////////////////////////////////////

let amount = 99.99;
amount = amount * 2; //amount *=2
console.log(amount);
// преобразует `amount` в строку и
// добавляет "$" в начало
amount = "$" + String(amount);
console.log(amount);

///////////////////////////////////////////////////////

const TAX_RATE = 0.08; // 8% налог с продаж

let amount2 = 99.99;

amount2 *= 2;
amount2 = amount2 + (amount2 * TAX_RATE);
console.log(amount2);//215.9784
console.log(amount2.toFixed(2)); //215.98

////////////////////////////////////////////

let amount3 = 99.99;
//отдельный блок/Такой вид допустим, но не используется 
{
    amount3 *= 2;
    console.log(amount3);//199.98
}

let amount4 = 9.99; //
//Сумма достаточно велика?

if (amount4 > 10) { //блок приклепляется к if
    amount4 *= 2;
    console.log(amount4);//199.98, если amount4 = 99.99/как в примере 
}
else {
    amount4 *= 5;
    console.log(amount4);//49.95 
}
/////////////////////////////

let bank_balance = 302.13;
let amount5 = 99.99;

if (
    amount5 < bank_balance
) {
    console.log("Я хочу купить этот телефон");
}

/////////////////////////////////////////////////

const ACCESSORY_PRICE = 9.99;
let bank_balance2 = 302.13;
let amount6 = 99.99;

amount6 *= 2;
//может ли мы позволить себе дополнительную покупку? 
if (amount6 < bank_balance) {
    console.log("Я возьму этот аксуссуар!");
    amount6 += ACCESSORY_PRICE;
}
//иначе
else {
    console.log("Нет спасибо.")
}

////////////////////////////////////////////////

// while (numOfCustomers > 0) {
//     console.log("Чем я могу вам помочь?");
//     numOfCustomers -= 1;
// }
// /////////////////////
// do {
//     console.log("Чем я могу вам помочь");
//     numOfCustomers -= 1;
// } while (numOfCustomers > 0);

/////////////////////////////
//Просто пример работы, не рекомендуется так использовать
let i = 0;
while (true) {
    if ((i <= 9) === false)  {
        break;
    }
    console.log(i);// 0 1 2 3 4 5 6 7 8 9

    i += 1 ;
}
//Специально для перебора 
for (let o = 0; o <= 9; o += 1){
    console.log(o);// 0 1 2 3 4 5 6 7 8 9
}
// У цикла for есть три составных части: инициализация (var i=0), проверка условия (i <= 9)
// и обновление значения (i = i + 1).

function printAmount() {
    console.log(amount7.toFixed(2));
}
let amount7 = 99.99;
printAmount(); //99.990

amount7 *= 2;
printAmount(); //199.98
//////////////////////////////////

const TAX_RATE2 = 0.08;
function calculateFinalPurchaseAmount(amt) {
    //Вычисляем новую сумму с налогом
    amt += (amt * TAX_RATE2);
    //возвращаем новую сумму 
    return amt;
}

let amount8 = 99.99;
amount8 = calculateFinalPurchaseAmount(amount8);
console.log(amount8.toFixed(2));//107.99
///////////////////////////////////////////
function one() {
    //эта "a" принадлежит только функции "one()"
    let a = 1;
    console.log(a);
}

function two() {
    //эта "a" принадлежит только функции "two()"
    let a = 2;
    console.log(a);
}

one();//1
two();//2


function outer() {
    let a = 1;
    function inner() {
        let b = 2;
        // здесь у нас есть доступ и к а. И к б
        console.log(a+b);//3
    }
    inner();
    //Здесь у нас есть доступ только к а.
    console.log(a);//1
}
outer();

///////////////////////////////////////////////

let SPENDING_THRESHOLD = 200;
const TAX_RATE3 = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE2 = 9.99;
let bank_balance3 = 30530;
let amount9 = 0;

//Считаем процент от суммы покупки
function calcualte(amount9) {
    return amount9 * TAX_RATE3;
}
//Возврашаем формат доллара и фикс до 2 чисел
function formatAmount(amount9) {
    return "$" + amount9.toFixed(2);
}

//Покупаем телефон, пока есть деньги на счету
while (amount9 < bank_balance3) {
    amount9 += PHONE_PRICE;

    //Если баланса хваатет, покупаем эксессуары
    if (amount9 < SPENDING_THRESHOLD) {
        amount9 += ACCESSORY_PRICE2;
    }
}
//Платим налог
amount9 += calcualte(amount9);

//Выводим в консоль
console.log("Ваша покупка:" + formatAmount(amount9));

//Можем ли мы позволить себе эту покупку ?

if (amount9 > bank_balance3) {
    console.log("Вы не можете позволить себе эту покупку :(");
}

//////////////////////////////////

// const phonePrice = 1200.99;
// const accessoryPrice = 150.99;
// const taxRate = 0.2;

// let balance = prompt( "Сколько у вас денег" );
// let count2 = 0;

// const calcTax = () => {
//   let tax = (phonePrice + accessoryPrice) * taxRate ;
//   return tax;
// }

// const calcSum = (params) => {
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   const sum = params.reduce(reducer).toFixed(2);
//   return sum;
// }

// const buyPhone = () => {
//   let fullPrice = calcSum([phonePrice, accessoryPrice, calcTax(phonePrice)]);
//   balance -= fullPrice;
// }

// while(balance > phonePrice){
//   count2++;
//   buyPhone();
// }

// alert(`Вы купили ${count2} телефонов \nНа балансе осталось ${(balance.toFixed(2))}`);

///////////////////////////////////////////////////////

// var a;
// typeof a;				// "undefined"

// a = "hello world";
// typeof a;				// "string"

// a = 42;
// typeof a;				// "number"

// a = true;
// typeof a;				// "boolean"

// a = null;
// typeof a;				// "object" — черт, ошибка

// a = undefined;
// typeof a;				// "undefined"

// a = { b: "c" };
// typeof a;				// "object"

// a = Symbol();            // "symbol"
// typeof a;

//object
var obj = {
    a: "Hello world",
    b: 42,
    c: true
};

obj.a;
obj.b;
obj.c;

obj["a"];
obj["b"];
obj["c"];


var obj = {
    a: "hello world",
    b:42
}

var c = "a";

obj[c]; // "hello world"
obj["b"]; // 42
///////////////////////////////// 

//ARRAY

var arr = ["hello world, 42, true"];

arr[0];     // "hello world"
arr[1];     // 42
arr[2];     // true
arr.length;     // 3

typeof arr;     // "object"

////////////////////////////////////////////////////////////////
//function

function foo() {
    return 42;
}

foo.bar = "hello world"
typeof foo;     // "function"
typeof foo();   // "number" 
typeof foo.bar; // "string"

console.log(typeof foo);
console.log(typeof foo());
console.log(typeof foo.bar);

//Методы встроенных типов

var aa = "hello world";
var bb = 3.13423423412342;

aa.length;      //11
aa.toUpperCase(); //HELLO WORLD
bb.toFixed(4); //3.1342

console.log(aa.length);
console.log(aa.toUpperCase());
console.log(bb.toFixed(4));

//Сравнение значений

//Приведение типов (coercion)

//явного приведения:
var aaa = "42";
var bbb = Number(a);
aaa;    // "42"
bbb;    // 42 — число!


//неявного приведения:

var qq = "42";
var ww = qq * 1;// здесь "42" неявно приводится к 42
qq;     // "42"
ww;     // 42 — число!

//Как бы истинный и ложный

// "" (пустая строка)
// 0, -0, NaN (некорректное число)
// null, undefined
// false
// Любое значение, не входящее в этот список — "как бы истинно." Вот несколько примеров:

// "hello"
// 42
// true
// [ ], [ 1, "2", 3 ] (массивы)
// { }, { a: 42 } (объекты)
// function foo() { .. } (функции)



//Равенство

// = присваивание
// == неестррогое равенство
// === строгое равенство

var rr = "42";
var tt = 42;

rr == tt;   // true 
rr === tt;  // false

//!!!!ARRAY

var u = [1, 2, 3];
var p = [1, 2, 3];
var o = "1,2,3";

u == o;     // true
p == o;     // true
u == p;     // false

//Неравенство

var z = 41;
var x = "42";
var v = "43";

z < x; // true числовое сравнение 
x < c; // true сравнение в алфавитном порядке


var zz = 42;
var xx = "foo";

zz < xx;  // false
zz > xx;  // false   
zz == xx; // false Приводиться к некоректному числу, то есть NaN



//Области видимости функции

var k = 2;
fook();

function fook() {
    k = 3;
    console.log(k); //3

    var k;
}

console.log(k); //2


//вложенные области видимости

function fut() {
    var a = 1;
    function bar(){
        var b = 2;
        function baz() {
          var c = 3;
            console.log(a, b, c);   //1 2 3
        }
        baz();
        console.log(a, b);  //1 2
    }
    bar();
    console.log(a); //1
}
fut();
///////////////////////////
//Это очень плохая практика. Не делайте так! Всегда явно объявляйте свои переменные.
function fet() {
    a = 1; //а, формально не объявлена
}
fet();
a; //1, автоматическая глобальная переменная

////////////////////////////

function fit() {
    var a = 1;
    if (a >= 1) {
        let b = 2;  //b будет принадлежать только оператору if

        while (b < 5) {
            let c = b * 2;      //c принадлежит только циклу while
            b++;
            console.log(a + c); //5 7 9
        }
    }
}
fit();//5 7 9

//Условные операторы

if (a == 2) {
    //Сделать что то
}
else if (a == 10) {
    //Сделать что то еще
}
else if (a == 42) {
    //сделать еще одну вещь
}
else {
    //резервный вариант 
}
//Эта структура работает, но она слишком подробна, поскольку вам нужно указать проверку для a в каждом случае. Вот альтернативная возможность, оператор switch:
switch (a) {
    case 2:
        //сделать что то 
        break;
    case 10:
        //сделать что то еще
        break;
    case 42:
        //сделать еще одну вещь
        break;
    default:
        //резервный варинт 
}


//тернарная операция". Это примерно как более краткая форма отдельного оператора if..else

var ii = 42;
var oo = (ii > 41) ? "hello" : "world";
console.log(oo);//hello

//эквивалентно этому:
var hh = 42;
if (hh > 41) {
    gg="hello"
}
else {
    gg="world"
}
console.log(gg);//hello


//Строгий режим (Strict Mode)

function feta() {
    "use strict";
    // этот код в строгом режиме
    function bar() {
        // этот код в строгом режиме
    }
}
// этот код в нестрогом режиме
/////////////////////////////

"use strict";

function fnt() {
    // этот код в строгом режиме
    function bar() {
        // этот код в строгом режиме
    }
}
// этот код в строгом режиме

/////////////////////////////////

// var rty = function () { //анонимная функция
//     //....
// }

// var ert = function bar() {
//     //....
// }
    //Выражения немедленно вызываемых функций (Immediately Invoked Function Expressions (IIFEs))


(function IIFE(){
	console.log( "Hello!" );
})();
// "Hello!"

function foo() {  }

// `foo` выражение со ссылкой на функцию,
// затем `()` выполняют ее
foo();

// Выражение с функцией `IIFE`,
// затем `()` выполняют ее
(function IIFE() { })();


var abc = 42;
(function IIFE() {
    var abc = 10;
    console.log(abc);   //10
})();

console.log(abc);   //42


var xc = (function IIFE() {
    return 42;
})();

xc; //42

// ЗАМЫКАНИЕ
function makeAdder(x) {
    //параметр x - внутренняя перенная
    //внутренняя функция add() использует x, поэтому у нее есть 'замыкание' на нее

    function add(y) {
        return y + x;
    };
    return add;
}

//plusOne получает ссылку на внутреннюю функцию add()
//с замыканием на параметре x
//внешней makeADdder(..)
var plusOne = makeAdder(1);

//plusTen получает ссылку на внутреннюю функцию add
//с замыкание на пармантре x
//внешней makeAdder(..)
var plusTen = makeAdder(10);

plusOne(3);
plusOne(41);
plusTen(13);
console.log(plusOne(3));    // 4 <--3+1
console.log(plusOne(41));   // 42 <--41+1
console.log(plusTen(13));   //23 <--13+10


//Модули
//Самое распространенное использование замыкания в JavaScript — это модульный шаблон

function User() {
    //Функция User() служит как внешняя область видимости, которая хранит переменные username и password, а также внутреннюю функцию doLogin(). Всё это частные внутренние детали этого модуля User, которые недоступны из внешнего мира.
    var username, password;
    //У внутренней функции doLogin() есть замыкание на username и password
    function doLogin(user, pw) {
        username = user;
        password = pw;
        
        //сделать остальную часть работы по логину
    }
    var publicAPI = {
        //publicAPI — это объект с одним свойством/методом, login, который является ссылкой на внутреннюю функцию doLogin()
        login: doLogin
    };
    return publicAPI;
}

//Создать экземляр модуля User
var fred = User(); //При выполнении User() создается экземпляр модуля User
fred.login("fred", "12Battery34!");


//Идентификатор this

function fot() {
    console.log(this.bar);
}

var bar = "global";
var obj1 = {
    bar: "obj1",
    fot: fot
};
var obj2 = {
    bar: "obj2"
};

fot(); //foo() присваивает в this ссылку на глобальный объект в нестрогом режиме. В строгом режиме, this будет undefined, и вы получите ошибку при доступе к свойству bar, поэтому "global" — это значение для this.bar.
obj1.fot();//obj1.foo() устанавливает this в объект obj1.
fot.call(obj2);//foo.call(obj2) устанавливает this в объект obj2.
new fot();//new foo() устанавливает this в абсолютно новый пустой объект.


//Прототип 
var ftn = {
    a: 42
};
//создаем bty и связываем его с ftn
var bty = Object.create(ftn);

bty.b = "hello motherfucker";
bty.b; //hello motherfucker
bar.a; // 42 <-- делегируется в `ftn`

console.log(bty.b);
console.log(bty.a);

/////////////////////////
//Старый и новый
//Полифиллинг (polyfilling)

if (!Number.isNaN) {
    Number.isNaN = function isNaN(x) {
        // причудливости значения NaN Поэтому значение NaN — единственное, делающее условие x !== x истинным.
        return x !== x;
    };
}

//Транспиляция (Transpiling)
//новый браузер 
function foo(aw = 2) {
	console.log( aw );
}

foo();		// 2
foo(42);	// 42

//Старый браузер 
function foo() {
	var aw = arguments[0] !== (void 0) ? arguments[0] : 2;
	console.log( aw );
}

// Есть довольно много отличных транспиляторов на выбор. Вот несколько из них на момент написания этого текста:

// Babel (https://babeljs.io) (бывший 6to5): Транспилирует из ES6+ в ES5
// Traceur (https://github.com/google/traceur-compiler): Транспилирует из ES6, ES7 и далее в ES5





function footr(av) {
    var b = av * 2;//4
    function bar(c) {
        console.log(av, b, c);//2 4 12
    }
    bar(b * 3);//12
}

footr(2);//av = 2

/////////////////////////////////////
//eval

function foro(str, a) {
	eval( str ); // обман!
	console.log( a, br );
}

var br = 2;

foro("var b = 3;", 1); // 1, 3


// function foqo(str) {
//    "use strict";
//    eval( str );
//    console.log( a ); // ReferenceError: a is not defined
// }

// foqo( "var a = 2" );






//Глава 3: Область видимости: функции против блоков
//Область видимости из функций

function ftn(a) {
    var b = 2;
    //некоторый код
    function bar() {
        //..
    }
    //еще код
    var c = 3;
}

// bar();// ошибка
// console.log(a, b, c); // все 3 вызовут ошибку

function doSomething(a) {
    b = a + doSomethingElse(a * 2);
    console.log(b * 3);;
}

function doSomethingElse(a) {
    return a - 1;
}

var b;
doSomething(2);//15


//Более "правильный" дизайн скрыл бы эти частные детали внутри области видимости doSomething(..)

function doSomethings(a) {
    function doSomethingElse(a) {
        return a - 1;
    }
    var b;
    b = a + doSomethingElse(a * 2);
    console.log((b * 3));
}

doSomethings(2);//15


//Предотвращение коллизий

function fgh() {
    function bew(a) {
       var i = 3;// меняем `i` в окружающей области видимости цикла for-loop
        console.log(a + i);
    }
    for (var i = 0; i < 10; i++){
        // bew(i * 2);//// упс, впереди бесконечный цикл!
    }
}
fgh();


// Глобальные "Пространства имен"
var MyReallyCoolLibrary = {
	awesome: "stuff",
	doSomething: function() {
		// ...
	},
	doAnotherThing: function() {
		// ...
	}
}

//Функции как области видимости

var aw2 = 2;

function fooq() { // <-- вставляем это

	var aw2 = 3;
	console.log( aw2 ); // 3

} // <-- и это
fooq(); // <-- и это
//имя идентификатора foo "засоряет" окружающую область видимости
console.log(aw2); // 2


//Было бы идеально, если бы функции не было нужно имя (или точнее, чтобы это имя не загрязняло окружающую область видимости) и если бы функция могла бы автоматически выполняться.

var ass = 2;
(function fooot() { // <-- вставляем это
    var ass = 3;
    console.log(ass);//3
})();// <-- и это
console.log(ass);//2


//Анонимный против названного

//Это называется "анонимное функциональное выражение"
// setTimeout(function () {
//     console.log("I waited 1 second");
// }, 1000);
//Аналогично
// setTimeout(() => {
//     console.log("I waited 1 second");
// }, 1000);


//Встраиваемые функциональные выражения
//Лучшая практика — это всегда именовать ваши функциональные выражения:
//Выражение стрелочных функций не позволяют задавать имя, поэтому стрелочные функции анонимны, если их ни к чему не присвоить.
// setTimeout(() => {
//     console.log("I waited 1 second");
// }, 1000);

// setTimeout( function timeoutHandler(){ // <-- Смотри, у меня есть имя!
// 	console.log( "I waited 1 second!" );
// }, 1000);

//Вызов функциональных выражений по месту

// undefined = true; // устанавливаем мину для другого кода! остерегайтесь!

// (function IIFE( undefined ){

// 	var a;
// 	if (a === undefined) {
// 		console.log( "Undefined is safe here!" );
// 	}

// })();

var acb = 2;
(function IIFE(global) {
    var acb = 3;
    console.log(acb);//3
    console.log(global.acb);//2 Показывает undefined, но правильно работает в консоле браузера 
})(window);

console.log(acb);//2

var vfc = 2;
(function IIFE(def) {
    def(window);
})(function def(global) {
    var vfc = 3;
    console.log(vfc);//3
    console.log(global.vfc);//2 Показывает undefined, но правильно работает в консоле браузера 
});



//Блоки как области видимости
// try/catch
//объявление переменной в блоке catch оператора try/catch как принадлежащее блочной области видимости блока catch.
try {
	undefined(); // нелегальная операция, чтобы вызвать исключение!
}
catch (err) {
	console.log( err ); // работает!
}

// console.log( err ); // ReferenceError: `err` not found


//Ключевое слово let присоединяет объявление переменной к области видимости того блока (обычно пара { .. }), в котором оно содержится. Иными словами, let неявно похищает у любой блочной области видимости ее объявления переменных.

// var foo = true;

// if (foo) {
//     {   // <-- явный блок
//         let bars = foo * 2;
//         bars = something(bars);
//         console.lof(bars);
//     }
// }
// console.log(bars);// ReferenceError

//let в циклах 
for (let i=0; i<10; i++) {
	console.log( i );
}

// console.log( i ); // ReferenceError

{
	let j;
	for (j=0; j<10; j++) {
		let i = j; // перепривязка в каждой итерации!
		console.log( i );
	}
}
////////////////////////////
var fooo1 = true, baz1 = 10;

if (fooo1) {
	var bar = 3;

	if (baz1 > bar) {
		console.log( baz1 );//10
	}

	// ...
}

//Этот код довольно легко отрефакторить в такой:

var foo23 = true, baz = 10;

if (foo23) {
	let bar = 3;

	if (baz > bar) { // <-- не забудьте про `bar`, если будете перемещать этот блок!
		console.log( baz );//10
	}
}

//const

var foo3 = true;
if (foo3) {
    var aw3 = 2;
    const bcw = 3;//в блочной области видимости содержазего ее if

    aw3 = 3; // просто отлично!
    // b = 4;//Assignment to constant variable.

}

console.log(a);
// console.log(bcw);// ReferenceError! bcw is not defined


//"Поднятие (Hoisting)".
awq = 2;//присваивание, остается на своем месте в фазе исполнения. выполнятся 2 

let awq;//объявление, обрабатывается во время фазы компиляции. выполняется 1

console.log(awq);


foo();

function foo() {
	console.log( a ); // undefined

	let a = 2;
}

//даже если это именованное функциональное выражение, идентификатор имени недоступен в окружающей области видимости:
// footrw(); // TypeError
// bar(); // ReferenceError

// var footrw = function bar() {
// 	// ...
// };

//Сначала функции
fooqwq();//1
let fooqwq;//является дублем объявления (и поэтому игнорируется)
function fooqwq() {
    console.log(1);//1
}

fooqwq = function () {
    console.log(2);
};

//1 выводится вместо 2! Этот код интерпретируется Движком так:

function fooqwq1() {
	console.log( 1 );
}

fooqwq1(); // 1

fooqwq1 = function() {
	console.log( 2 );
};

//В то время как множественные/дублирующие объявления var фактически игнорируются, последовательные объявления функции перекрывают предыдущие.

fooqwq2();//3

function fooqwq2() {//не показывается т.к перекрыто 
    console.log(1);
}

var fooqwq2 = function () {//игнорируется 
    console.log(2);
};

function fooqwq2() {//перекрытие 1 вызова функции. Показывается 3 
    console.log(3);//3
}




//Глава 5: Замыкание области видимости
///Замыкание — это когда функция умеет запоминать и имеет доступ к лексической области видимости даже тогда, когда эта функция выполняется вне своей лексической области видимости.
//Всякий раз, когда вы вызываете функцию внутри другой функции, вы создаете замыкание. Говорят, что внутренняя функция является замыканием. Результатом замыкания обычно является то, что в дальнейшем становятся доступными переменные внешней функции.

// function foo32() {
// 	var aw4 = 2;

// 	function bar() {
// 		console.log( aw4 ); // 2
// 	}

// 	bar();
// }
// foo32();



// /Тогда давайте посмотрим на код, который представит замыкание во всей красе:

// function foo33() {
//     var z1 = 2;

//     function bar2() {
//         console.log(z1);
//     }
//     return bar2;

// }
// var baz1 = foo33();
// baz1();

////////////////////////// можно немного сократить код, совместив возврат значения с объявлением функции.
//глобальная область видимости
// function foo34() { //самая внешняя функция
//     var z1 = 2;

//     return function bar2() {    // внутренняя функция является замыканием
//         console.log(z1);
//     }
// }
// foo34()();

//Благодаря замыканиям появляется доступ к внешней функции


//примером контролирующего замыкания.

// function foo() {
// 	var a = 2;

// 	function baz() {
// 		console.log( a ); // 2
// 	}

// 	bar( baz );
// }

// function bar(fn) {
// 	fn(); // смотри мам, я видел замыкание!
// }

//Мы передаем внутреннюю функцию baz в bar и вызываем ее (теперь как fn), и когда мы это делаем, ее замыкание на внутреннюю область видимости foo() соблюдается посредством доступа к a.


//Такие передачи функций могут быть также и непрямыми.

let fn;
function foo35() {
    let a = 2;
    function baz() {
        console.log(a);//2
    }
    fn = baz;

}
function bar332() {
    fn();
}

foo35();
bar332();//2


///////////////////////////////////////////////////
function wait(message) {
    setTimeout(function timer() {
        console.log(message);
    }, 1000);
}

// wait("Привет, замыкание!");


// Циклы + замыкание

for (let iw = 1; iw <= 5; iw++){
    setTimeout(function timer() {
        console.log(iw);//6 6 6 6 6

    }, iw * 1000);
}


for (let iu = 1; iu <= 5; iu++){
    (function () {
        let ji = iu;
    setTimeout(function timer() {
        console.log(ji);//1 2 3 4 5 

    }, ji * 1000);

    }) ();
}

//Небольшая вариация на тему, которую некоторые предпочтут вышеуказанной:
for (let iu2 = 1; iu2 <= 5; iu2++) {
    (function (ji2) {
        setTimeout(function timer() {
            console.log(ji2);//1 2 3 4 5 
        }, ji2 * 1000);
    })(iu2);
};


//И вновь рассмотрим блочную область видимости
for (let io2 = 1;  io2 <= 5; io2++) {
    let jo = io2;//блочная область видимости для замыкания 
    setTimeout(function timer() {
        console.log(jo);//1 2 3 4 5 
    }, jo * 1000);
};

for (let i = 1; i <= 5; i++){
    setTimeout(function timer() {
        console.log(i);//1 2 3 4 5 
    }, i * 1000);
};



//Модули

function CoolModule() {
    let something2 = "cool";
    let another2 = [1, 2, 3];



    function doSomething() {
        console.log(something2);//cool
    }
    function doAnother() {
        console.log(another2.join(","));//1,2,3
    }

    return {
        doSomething: doSomething,   // функция CoolModule() возвращает объект, выполненный в синтаксисе объектного литерала { key: value, ... }
        doAnother: doAnother    //Это объектное возвращаемое значение в итоге присваивается внешней переменной foo
    };
};
let fouta = CoolModule();// Без выполнения внешней функции не случится ни создание внутренней области видимости, ни создание замыканий.

fouta.doAnother();//1,2,3  
fouta.doSomething();//cool  а затем мы можем получить доступ к этим методам в API, например к fouta.doSomething().


//Небольшая вариация этого шаблона — это когда вы заботитесь о том, чтобы был только один экземпляр,
let fpq = (function CoolModule() {
  let something3 = "cool";
  let another3 = [1, 2, 3];

  function doSomething() {
    console.log(something3); //cool
  }
  function doAnother() {
    console.log(another3.join("!")); //1!2!3
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother,
  };
})();

fpq.doSomething();//cool
fpq.doAnother();//1!2!3
//Тут мы превратили нашу модульную функцию в IIFE , сразу же вызвали ее и присвоили возвращаемое ею значение прямо нашему единственному идентификатору fpq.


//Модули — это всего лишь функции, поэтому они могут принимать параметры:

function CoolModule2(id) {
    function identify() {
        console.log(id);//fty1 fty2
    }
    return {
        identify: identify
    };
}

let fty1 = CoolModule2("fty1");
let fty2 = CoolModule2("fty2");

fty1.identify();//fty1
fty2.identify();//fty2


let fyi = (function CoolModule3(id) {
  function change() {
    // modifying the public API
    publicAPI.identify = identify2;
  }
  function identify1() {
    console.log(id); //fyi module
  }
  function identify2() {
    console.log(id.toUpperCase()); //FYI MODULE
  }

  let publicAPI = {
    change: change,
    identify: identify1,
  };

  return publicAPI;
})("fyi module");

fyi.identify(); //fyi module
fyi.change();
fyi.identify(); //FYI MODULE

let obj4 = {
  count: 0,
  cool: function coolFn() {
    let self = this;
    if (self.count < 1) {
      setTimeout(function timer() {
        self.count++;
        console.log("Красиво ?");
      }, 100);
    }
  },
};

obj4.cool();

let obj5 = {
  count: 0,
  cool: function coolFn() {
    if (this.count < 1) {
      setTimeout(
        function timer() {
          this.count++; //this безопасен из за bind
          console.log("Еще красивее");
        }.bind(this),
        100
      ); // В современном JavaScript у функций есть встроенный метод bind, который позволяет зафиксировать this.
    }
  },
};

obj5.cool(); // еще красивее



//This и Прототипы Объектов

function identify3() {
    return this.name.toUpperCase();
}

function speak() {
    let greeting = "Hello, I'm " + identify3.call(this);
    console.log(greeting);
}

let me = {
    name: "Kyle"
};

let you = {
    name: "Reader"
};
// identify3.call(me);
// identify3.call(you);

speak.call(me);// Hello, I'm KYLE
speak.call(you);// Hello, I'm READER


////

function foo(num) {
	console.log( "foo: " + num );
	// следим, сколько раз вызывается функция
	// Заметьте: `this` теперь действительно ссылается на `foo`, это основано на том,
	// как `foo` вызывается (см. ниже)
	this.count++;
}

foo.count = 0;

var iw;

for (iw=0; iw<10; iw++) {
	if (iw > 5) {
		// используя `call(..)` мы гарантируем что `this`
		// ссылается на объект функции (`foo`) изнутри
		foo.call( foo, iw );
	}
}


// сколько раз `foo` была вызвана?
console.log(foo.count); // 4



//Ничего кроме правил
//Привязка по умолчанию не иммет смысла в strict mode
function foo33() {
  console.log(this.aw5); //undefined
}

var aw5 = 2;

foo33(); //undefined


function foo() {
  console.log(this.aw4); //undefined
}

var aw4 = 2;

(function () {


  foo(); //undefined 
})();


// глобальная привязка объектов JavaScript (Работает в консоле браузера )
let sayName = function (name) {
  console.log(this.name);
};

window.name = "Tapas";
sayName();


//Неявная привязка

let blog = {
  name: "Tapas",
  address: "freecodecamp",
  message: function () {
    console.log(`${this.name} blogs on ${this.address}`); //Tapas blogs on freecodecamp
  },
};

blog.message();
//
let dog = {
  breed: 'Beagles',
  lovesToChase: 'rabbits'
};

function chase() {
  console.log(this.breed + ' loves chasing ' + this.lovesToChase + '.'); 
}

dog.foo = chase;
dog.foo(); // в консоль попадёт Beagles loves chasing rabbits.

// chase(); //так эту функцию лучше не вызывать



//Только верхний/последний уровень ссылки на свойство объекта в цепочке имеет значение для точки вызова. Например:
function foo21() {
	console.log( this.a );
}

var obj2 = {
	a: 42,
	foo21: foo21
};

var obj1 = {
	a: 2,
	obj2: obj2
};

obj1.obj2.foo21(); // 42




//Явная привязка
//call
function foo() {
	console.log( this.a );
}

let obj = {
	a: 2
};

foo.call(obj); // 2
//
//Такая привязка одновременно явная и сильная, поэтому мы называем ее жесткой привязкой.
function foo(something) {
	console.log( this.a, something );//2 3 
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = function() {
	return foo.apply( obj, arguments );
};

var b = bar( 3 ); // 2 3
console.log( b ); // 5
//
let getName = function () {
    console.log(this.name);
}

let user = {
    name: 'Tapas',
    address:'Freecodecamp'
};

getName.call(user);//Tapas

//Но мы также можем передать несколько аргументов call()
let getName2 = function (hobby1, hobby2) {
  console.log(this.name + " likes " + hobby1 + "," + hobby2); //Tapas likes Swimming,Blogging
}

let user2 = {
    name: 'Tapas',
    address: 'Omsk'
};

let hobby = ['Swimming', 'Blogging'];

getName2.call(user2, hobby[0], hobby[1]);//Tapas likes Swimming,Blogging
//Совет: если у вас есть только один аргумент значения или нет аргументов значения для передачи, используйте call(). Если у вас есть несколько аргументов значений для передачи, используйте apply
getName2.apply(user2, hobby);//Tapas likes Swimming,Blogging

//bind()возвращает совершенно новую функцию, и мы можем вызвать ее вместо этого.
let newFn = getName2.bind(user, hobby[0], hobby[1]);//вызываем новую функцию для вызова 

newFn();//Tapas likes Swimming,Blogging

//new привязка JavaScript

let Cartoon = function (name, character) {
    this.name = name;
    this.character = character;
    this.log = function () {
        console.log(this.name + " is a " + this.character);
        return this;
    }

};
 let tom = new Cartoon("Tom", "Cat");
let jerry = new Cartoon("Jerry", "Mouse");
 


// Функция-конструктор
let Friend = function(name, password, interests, job){
  this.fullName = name;
  this.password = password;
  this.interests = interests;
  this.job = job;
};

function sayHello(){
  console.log(this); //new Friend подставляется в  let Friend = function
  return `Hi, my name is ${this.fullName} and I'm a ${this.job}. Let's be friends!`;
}

// Мы можем создать один или несколько экземпляров объекта типа Friend, используя ключевое слово new
let john = new Friend('John Smith', 'badpassword', ['hiking', 'biking', 'skiing'], 'teacher'); 

console.log(john); 

// Назначим функцию ключу greeting объекта john
john.greeting = sayHello; 

// Вызовем новый метод объекта
console.log( john.greeting() ); //Hi, my name is John Smith and I'm a teacher. Let's be friends!

// sayHello() не стоит вызывать как обычную функцию
// console.log( sayHello() ) ;



let strPrimitive = "I am a string";
typeof strPrimitive; // "string"
strPrimitive instanceof String; // false
let strObject = new String("I am a string");
typeof strObject; // "object"
strObject instanceof String; // true
// проверим подтип объекта
Object.prototype.toString.call(strObject); // [object String]

//«доступ к свойству».
let prefix = "foo";
let myObject = {
  [prefix + "bar"]: "hello",
  [prefix + "baz"]: "world",
};
myObject["foobar"]; // hello
myObject["foobaz"]; // world

//array
var myArray = ["foo", 42, "bar"];
myArray.baz = "baz";
myArray.length; // 3
myArray.baz; // "baz"

//Флаги и дескрипторы свойств
let myObject2 = {
  a: 2,
};
//Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.
Object.getOwnPropertyDescriptor(myObject2, "a"); //{ value: 2, writable: true, enumerable: true, configurable: true }
//Чтобы изменить флаги, мы можем использовать метод Object.defineProperty.

let users = {};

Object.defineProperty(users, "name", {
  value: "John",
  // для нового свойства необходимо явно указывать все флаги, для которых значение true
  writable: true,
});

let descriptor = Object.getOwnPropertyDescriptor(users, "name");

console.log(JSON.stringify(descriptor, null, 2));
/*
{
  "value": "John",
  "writable": true,
  "enumerable": false,
  "configurable": false
}
 */

//Метод Object.defineProperties
//Таким образом, мы можем определить множество свойств одной операцией.
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
});

// Object.getOwnPropertyDescriptors Чтобы получить все дескрипторы свойств сразу, можно воспользоваться методом
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
for (let key in user) {
  clone[key] = user[key];
}