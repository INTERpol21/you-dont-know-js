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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Циклы + замыкание

for (let iw = 1; iw <= 5; iw++){
    setTimeout(function timer() {
        console.log(iw);//6 6 6 6 6

    }, iw * 1000);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
for (let iu = 1; iu <= 5; iu++){
    (function () {
        let ji = iu;
    setTimeout(function timer() {
        console.log(ji);//1 2 3 4 5 

    }, ji * 1000);

    }) ();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Небольшая вариация на тему, которую некоторые предпочтут вышеуказанной:
for (let iu2 = 1; iu2 <= 5; iu2++) {
    (function (ji2) {
        setTimeout(function timer() {
            console.log(ji2);//1 2 3 4 5 
        }, ji2 * 1000);
    })(iu2);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// глобальная привязка объектов JavaScript (Работает в консоле браузера )
let sayName = function (name) {
  console.log(this.name);
};

window.name = "Tapas";
sayName();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Неявная привязка

let blog = {
  name: "Tapas",
  address: "freecodecamp",
  message: function () {
    console.log(`${this.name} blogs on ${this.address}`); //Tapas blogs on freecodecamp
  },
};

blog.message();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Явная привязка
//call
function foo() {
	console.log( this.a );
}

let obj = {
	a: 2
};

foo.call(obj); // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Такая привязка одновременно явная и сильная, поэтому мы называем ее жесткой привязкой.
function foo(something) {
	console.log( this.a, something );//2 3 
	return this.a + something;
}

let obj = {
	a: 2
};

let bar = function() {
	return foo.apply( obj, arguments );
};

let b = bar( 3 ); // 2 3
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let strPrimitive = "I am a string";
typeof strPrimitive; // "string"
strPrimitive instanceof String; // false
let strObject = new String("I am a string");
typeof strObject; // "object"
strObject instanceof String; // true
// проверим подтип объекта
Object.prototype.toString.call(strObject); // [object String]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//«доступ к свойству».
let prefix = "foo";
let myObject = {
  [prefix + "bar"]: "hello",
  [prefix + "baz"]: "world",
};
myObject["foobar"]; // hello
myObject["foobaz"]; // world
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//array
var myArray = ["foo", 42, "bar"];
myArray.baz = "baz";
myArray.length; // 3
myArray.baz; // "baz"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Флаги и дескрипторы свойств
let myObject2 = {
  a: 2,
};
//Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.
Object.getOwnPropertyDescriptor(myObject2, "a"); //{ value: 2, writable: true, enumerable: true, configurable: true }
//Чтобы изменить флаги, мы можем использовать метод Object.defineProperty.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Дублирование объектов 
function anotherFunction() {
  /*..*/
}
let anotherObject = {
  c: true,
};
let anotherArray = [];
let myObject3 = {
  a: 2,
  b: anotherObject, // ссылка, а не копия!
  c: anotherArray, // еще одна ссылка!
  d: anotherFunction,
};
anotherArray.push(anotherObject, myObject3);


//В то же время, поверхностное копирование достаточно понятно и имеет меньше проблем, поэтому в ES6 для этой задачи есть Object.assign(..)
let newObj = Object.assign({}, myObject);
newObj.a; // 2
newObj.b === anotherObject; // true
newObj.c === anotherArray; // true
newObj.d === anotherFunction; // true
// Как бы то ни было, дублирование, которое имеет место в Object.assign(..) это чистое присваивание в стиле =, так что любые особенные характеристики свойств (вроде writable) исходного объекта не сохраняются в целевом объекте.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Геттеры и Сеттеры    [[Put]] и [[Get]]

let myObject4 = {
  //определяем геттер для а
  get a() {
    return 2;
  },
};

Object.defineProperty(
  myObject4, //цель
  "b", //имя свойства
  {
    //дескриптор
    //определяем геттер для b
    get: function () {
      return this.a * 2;
    },
    //удедимся что b будет отображаться как свойства объекта
    enumerable: true,
  }
);
myObject4.a; //2
myObject4.b; //4

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let myObject8 = {
    // определяем геттер для `a`
    get a() {
        return 4;
    }
};
myObject8.a = 3;
myObject8.a; // 4

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let myObject5 = {
    //
    get a() {
        return this._a_;
    },
    //
    set a(val) {
        this._a_ = val * 2;
    }
};
myObject5.a = 2;//2
myObject5.a;//4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Существование
let myObject7 = {
    a: 2
};
("a" in myObject);	            // true 
//проверит находится ли свойство в объекте или существует ли оно уровнем выше в цепочке [[Prototype]] объекта
("b" in myObject);	            // false
myObject.hasOwnProperty("a");	// true
//наоборот проверяет есть ли свойство только у объекта myObject или нет и не опрашивает цепочку [[Prototype]]
myObject.hasOwnProperty("b");	// false

//При таком сценарии более надежным способом выполнить подобную проверку будет который заимствует базовый метод hasOwnProperty и использует явную привязку this , чтобы применить его к нашему myObject
Object.prototype.hasOwnProperty.call(myObject7, "a");//true

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//перечисление 

let myObject9 = {};
Object.defineProperty(
  myObject9,
  "a",
  //сделаем `a` перечисляемым, как обычно
  { enumerable: true, value: 2 }
);
Object.defineProperty(
  myObject9,
  "b",
  //сделаем `b` неперечисляемым
  { enumerable: false, value: 3 }
);

myObject9.b;
"b" in myObject9;
myObject9.hasOwnProperty("b");
//
// for (var k in myObject9) {
//   console.log(k, myObject9[k]);// a 2
// }
myObject9.propertyIsEnumerable("a"); // true
myObject9.propertyIsEnumerable("b"); // false
Object.keys(myObject9); // ["a"]
Object.getOwnPropertyNames(myObject9); // ["a", "b"]
// //propertyIsEnumerable(..) проверяет существует ли данное имя свойства непосредственно в объекте и установлено ли enumerable:true.
// Object.keys(..) возвращает массив всех перечисляемых свойств, в то время как Object.getOwnPropertyNames(..) возвращает массив всех свойств -- перечисляемых или нет.
// Отличия in от hasOwnProperty(..) в том, опрашивают ли они цепочку [[Prototype]] или нет. В то время как Object.keys(..) и Object.getOwnPropertyNames(..) проверяют только конкретный указанный объект.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Итерация
//перебор индексов, где вы используете индекс для получения значения, наподобие myArray[i].
let myArray2 = [1, 2, 3];
for (let i = 0; i < myArray2.length; i++){
    console.log(myArray2[i]);
}
//1 2 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ES6 добавляет синтаксис цикла for..of для перебора массивов (и объектов, если объект определяет свой собственный итератор).
let myArray3 = [1, 2, 3];
for (let v of myArray3) {
    console.log(v)//1 2 3
}
//Цикл for..of запрашивает объект-итератор (из стандартной встроенной функции, на языке спецификации известной как @@iterator) у перебираемой сущности, а затем перебирает возвращаемые значения, вызывая метод next() объекта-итератора для каждой итерации цикла.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let myArray4 = [ 1, 2, 3 ];
let it = myArray4[Symbol.iterator]();
it.next(); // { value:1, done:false }
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { done:true }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Для перебора любого объекта можно определить свой собственный стандартный @@iterator. Например:

let myObject10 = {
    a: 2,
    b: 3
};

Object.defineProperty(myObject10, Symbol.iterator, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: function () {
        let o = this;
        let idx = 0;
        let ks = Object.keys(o);
        return {
            next: function () {
                return {
                    value: o[ks[idx++]],
                    done: (idx > ks.length)
                };
            }
        };
    }
});
//перебираем myObject10 вручную 
let it2 = myObject10[Symbol.iterator]();
it.next(); // { value:2, done:false }
it.next(); // { value:3, done:false }
it.next(); // { value:undefined, done:true }
// перебираем `myObject` с помощью `for..of`
for (let v of myObject10) {
    console.log( v );
}
// 2
// 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Этот итератор будет генерировать случайные числа «вечно»//Ограничен break до 10
let randoms2 = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return { value: Math.random() };
      },
    };
  },
};
let randoms_pool = [];
for (let n of randoms2) {
  randoms_pool.push(n);
  // не продолжаем бесконечно!
  if (randoms_pool.length === 10) break;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class User2 {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
  sayHi2() {
    console.log(this.name);
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Использование:
let user3 = new User2("Иван");
let user4 = new User2("Вася");
user3.sayHi();
user4.sayHi2();

// класс - это функция
console.log(typeof User2); // function
// в прототипе ровно 3 метода
console.log(Object.getOwnPropertyNames(User2.prototype)); //[ 'constructor', 'sayHi', 'sayHi2' ]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//переменные не работают как в обычном классе, это делегирование прототипа
class C {
  constructor() {
    this.num = Math.random();
  }
  rand() {
    console.log("Random: " + this.num);
  }
}

let c1 = new C();
c1.rand(); // "Random: 0.4324299..."

C.prototype.rand = function () {
  console.log("Random: " + Math.round(this.num * 1000));
};

let c2 = new C();
c2.rand(); // "Random: 867"

c1.rand(); // "Random: 432" -- Ой!!!
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Свойство name не устанавливается в User.prototype. Вместо этого оно создаётся оператором new перед запуском конструктора, это именно свойство объекта.
class User {
  name = "Аноним";

  sayHi() {
    console.log(`Привет, ${this.name}!`);
  }
}
new User().sayHi();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Базовый синтаксис
class MyClass {
  prop = value; //свойство
  constructor() {
    //конструктор
  }
  method() {} //метод1
  method2() {} //метод2
  ////............
  get something() {} // геттер
  set something(params) {} ///сеттер

  [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)

  ///MyClass технически является функцией (той, которую мы определяем как constructor), в то время как методы, геттеры и сеттеры записываются в MyClass.prototype.
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Наследование классов

class Animal{
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} стоит.`);
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Наследуем от Animal указывая ключевое слово extends
class Rabbit extends Animal {
  //Если конструкттор отсутвует, то он наследуется от родительского класса. Если же мы хотим создать новый конструктор или допилнить старый, то чтобы конструктор Rabbit работал, он должен вызвать super() до того, как использовать this, чтобы не было ошибки:
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }
  hide() {
    console.log(`${this.name} прячется !`);
  }

  //Если мы определим свой метод stop в классе Rabbit, то он будет использоваться взамен родительского:
  // super(...) вызывает родительский конструктор (работает только внутри нашего конструктора).
  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}

let rabbit = new Rabbit('Белый кролик',10);

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.hide(); // Белый кролик прячется!
rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!
//Теперь у класса Rabbit есть метод stop, который вызывает родительский super.stop() в процессе выполнения.

console.log(rabbit.earLength); // 10

////////////////////////////////////////////////////////////////////////////////////////////////////////////////



class Animal2 {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit2 extends Animal2 {
    constructor(name) {
      //исправление
    super(name);
    //this.name = name;
    this.created = Date.now();
  }
}

let rabbit2 = new Rabbit2("Белый кролик"); 
console.log(rabbit2.name);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Статические свойства и методы

class Article {
  constructor(tittle, date) {
    this.tittle = tittle;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
  
}

//использование 
let articles = [
    new Article("HTML", new Date(2021, 1, 1)),
    new Article("CSS", new Date(2022, 0, 1)),
    new Article("JavaScript", new Date(2022, 11, 1))
];

articles.sort(Article.compare);
console.log(articles[0].tittle); //HTML



class Article2 {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // помним, что this = Article
    return new this("Сегодняшний дайджест", new Date());
  }
}


let article = Article2.createTodays();
console.log(article.title); // Сегодняшний дайджест


////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Примеси mixin

let sayHiMixin = {
    sayHi() {
      console.log(`Привет, ${this.name}`); // Привет, Вася!
    },
    sayBye() {
        console.log(`Пока, ${this.name}`);
    }
};

//использование 
class User3 {
    constructor(name) {
        this.name = name;
        
    }
}

//копируем методы
//Object.assign() используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.
//Object.assign(target, ...sources) target (Целевой объект) sources (Исходные объекты)
Object.assign(User3.prototype, sayHiMixin);

//теперь user может сказать привет 
new User3("Вася").sayHi();// Привет, Вася!

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Примеси могут наследовать друг друга. sayHiMixin наследует от sayMixin:

let sayMixin = {
    say(phrase) {
        console.log(phrase);//привет Петя
    }
};

let sayHiMixin2 = {
    __proto__: sayMixin,
    sayHi() {
      // вызываем метод родителя
      super.say(`Привет, ${this.name}`);
    },
    sayBye() {
      // вызываем метод родителя
      super.say(`Пока,${this.name}`);
    }
};

class User4 {
    constructor(name) {
        this.name = name;
    }
}

// копируем методы
Object.assign(User4.prototype, sayHiMixin2);

// теперь User может сказать Привет
new User4("Петя").sayHi(); // Привет, Вася!



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let eventMixin = {
  /**
   * Подписаться на событие, использование:
   * menu.on('select', function(item) { ... }
   */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * Отменить подписку, использование:
   * menu.off('select', handler)
   */
  off(eventName, handler) {
    let handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * Сгенерировать событие с указанным именем и данными
   * this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return; // обработчиков для этого события нет
    }

    // вызовем обработчики
    this._eventHandlers[eventName].forEach((handler) =>
      handler.apply(this, args)
    );
  },
};


// Создадим класс
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
// Добавим примесь с методами для событий
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// Добавить обработчик, который будет вызван при событии "select":
menu.on("select", value => console.log(`Выбранное значение: ${value}`));

// Генерирует событие => обработчик выше запускается и выводит:
menu.choose("123"); // Выбранное значение: 123


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Глава 5: Прототипы
//F.prototype

let anotherObject2 = {
  a: 2,
};

// создаем объект, привязанный к `anotherObject`
let myObject11 = Object.create(anotherObject2);

console.log(myObject11.a);//2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function () {
  return this.name;
};

let a4 = new Foo("a");
let b4 = new Foo("b");

a4.myName(); // "a"
b4.myName(); // "b"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


let animal = {
    eats: true
};

function Rabbit3(name) {
    this.name = name;
}
//Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее: "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]
Rabbit3.prototype = animal;

let rabbit3 = new Rabbit3("White Rabbit");//  rabbit.__proto__ == animal

console.log(rabbit3.eats);// true
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//По умолчанию "prototype" – объект с единственным свойством constructor, которое ссылается на функцию-конструктор.

function Rabbit4() {}
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit4 = new Rabbit4(); // наследует от {constructor: Rabbit}

console.log(rabbit4.constructor == Rabbit4); // true (свойство получено из прототипа)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//"(Прототипное) наследование"
function Foo44(name) {
    this.name = name;
}

Foo44.prototype.myName = function () {
  return this.name; // "a"
};

function Bar44(name, label) {
    Foo44.call
        (this, name);
    this.label = label;
}

// здесь мы создаем `Bar.prototype`
// связанный с `Foo.prototype`
// пред-ES6
// ВЫБРАСЫВАЕТ стандартный существующий `Bar.prototype`
// Bar44.prototype = Object.create(Foo44.prototype);
// ES6+
// ИЗМЕНЯЕТ существующий `Bar.prototype`
Object.setPrototypeOf(Bar44.prototype, Foo44.prototype);

// Осторожно! Теперь `Bar.prototype.constructor` отсутствует,
// и это придется "пофиксить" вручную,
// если вы привыкли полагаться на подобные свойства!

Bar44.prototype.myLabel = function () {
  return this.label; // "obj a"
};

let a44 = new Bar44("a", "obj a");
console.log(a44.myName());// "a"
console.log(a44.myLabel());// "obj a"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Свойство [[Prototype]] является внутренним и скрытым, но есть много способов задать его.

let animal33 = {
    eats: true,
    walk() {
      console.log("Animal walk"); // Animal walk
    }
};
let rabbit33 = {
    jumps: true
};

let longEar = {
  earLength: 10,
  __proto__: rabbit33,
};

rabbit33.__proto__ = animal33;

console.log(rabbit33.eats);// true
console.log(rabbit33.jumps)// true
rabbit33.walk();// Animal walk
console.log(longEar.jumps);// true (из rabbit)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let book = {
    tur: true,
    con() { }
};

let page ={
    __proto__:book
};

page.con = function () {
  console.log("Book-puk!!!"); //Book-puk!!!
}

page.con(); //Вызов находит метод непосредственно в объекте и выполняет его, не используя прототип

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Свойства-аксессоры (get и set) – исключение, так как запись в него обрабатывается функцией-сеттером. То есть, это, фактически, вызов функции.
let user5 = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user5,
  isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

// срабатывает сеттер!
admin.fullName = "Alice Cooper"; // (**)
console.log(admin.name); // Alice
console.log(admin.surname); // Cooper


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Значение «this»
let animal44 = {
    walk() {
        if (!this.isSleeping) {
            console.log(`Walk`);
        }
    },
    
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit44 = {
    name: "White Rabbit",
    __proto__: animal44
};

//// модифицирует rabbit.isSleeping
rabbit44.sleep();

console.log(rabbit44.isSleeping);// true
console.log(animal44.isSleeping);// undefined (нет такого свойства в прототипе). ((т.к функция не была вызвала animal44.sleep();))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let animal5 = {
  eats: true,
};

let rabbit5 = {
  jumps: true,
  __proto__: animal5,
};
// Object.keys возвращает только собственные ключи
console.log(Object.keys(rabbit5)); // jumps
// for..in проходит и по своим, и по унаследованным ключам
for (let prop2 in rabbit5) console.log(prop2); // jumps, затем eats

//Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного метода obj.hasOwnProperty(key)
for (let prop2 in rabbit5) {
  let isOwn = rabbit5.hasOwnProperty(prop2); //возвращает true, если у obj есть собственное, не унаследованное, свойство

  if (isOwn) {
    console.log(`Our: ${prop2}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop2}`); // Inherited: eats
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Object.prototype
let obj = {};
console.log(obj.__proto__ === Object.prototype); // true // краткая нотация obj = {} – это то же самое, что и obj = new Object()
// obj.toString === obj.__proto__.toString === Object.prototype.toString

//Array, Date, Function встроенные прототипы

let arr = [1, 2, 3];

// наследует ли от Array.prototype?
console.log(arr.__proto__ === Array.prototype); // true

// затем наследует ли от Object.prototype?
console.log(arr.__proto__.__proto__ === Object.prototype); // true

// и null на вершине иерархии
console.log(arr.__proto__.__proto__.__proto__); // null
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Свойство __proto__ считается устаревшим
let animal6 = {
  eats: true
};

// создаём новый объект с прототипом animal
let rabbit6 = Object.create(animal6);

console.log(rabbit6.eats); // true

console.log(Object.getPrototypeOf(rabbit6) === animal6); // получаем прототип объекта rabbit// true

Object.setPrototypeOf(rabbit6, {}); // заменяем прототип объекта rabbit на {}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//разреженный массив 
let a32 = [];
a32[0] = 1;
// Элемент `a[1]` здесь не задается
a32[2] = [3];
a32[1]; // undefined
a32.length; // 3
console.log(a32);

let a23 = [];
// 13 используется в качестве числового индекса, а не строкового ключа
a23["13"] = 42;
a23.length; // 14
console.log(a23);

///Подобие массивов
function foo112() {
 let arr = Array.from(arguments);
 arr.push( "bam" );
 console.log( arr );
}
foo112("bar", "baz"); // ["bar","baz","bam"]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Перебираемые объекты
//Symbol.iterator;

let range = {
    from: 1,
    to: 5
};

//  [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },
// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function () {
    // ...она возвращает объект итератора:

    return {
        // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
        current: this.from,
        last: this.to,
      

        // 3. next() вызывается на каждой итерации цикла for..of
        next() {
            // 4. он должен вернуть значение в виде объекта {done:.., value :...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

// теперь работает!
for (let num of range) {
  console.log(num); // 1, затем 2, 3, 4, 5
}



let arr = Array.from(range);
console.log(arr);//[ 1, 2, 3, 4, 5 ]
//// возводим каждое число в квадрат
let arr2 = Array.from(range, (num) => num * num);
console.log(arr2);//[ 1, 4, 9, 16, 25 ]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Явный вызов итератора
let str2 = "Hello";
 // делает то же самое, что и
// for (let char of str) alert(char);

let iterator = str2[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);    // выводит символы один за другим
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array.from 
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr1 = Array.from(arrayLike);
console.log(arr1.pop());// World (метод работает)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Map и Set

//Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

let map = new Map();

map.set("1", "str1");// строка в качестве ключа
map.set(1, "num1");// цифра как ключ
map.set(true, "bool1");// булево значение как ключ

// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
console.log(map.get(1));// "num1"
console.log(map.get("1"));//"str1";
console.table(map);//Map { '1' => 'str1', 1 => 'num1', true => 'bool1' }
console.log(map.size);// 3

let josh = { name: "Josh" };

let visitsCountMap = new Map();

visitsCountMap.set(josh, 123);
//Использование объектов в качестве ключей – одна из наиболее заметных и важных функций Map
console.log(visitsCountMap.get(josh));//123
console.log(josh);//{ name: "Josh" };

//Каждый вызов map.set возвращает объект map, так что мы можем объединить вызовы в цепочку:
map.set("1", "str1").set(1, "num1").set(true, "bool1");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Перебор Map

let recipeMap = new Map([
    ["Огурец", 500],
    ["Помидор", 350],
    ["Лук", 50],
]);

//перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);//огурец Помидор Лук
}
// перебор по значениям (числа)
for (let amount11 of recipeMap.values()) {
    console.log(amount11);//500 350 50
}
// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
  console.log(entry); //[ 'Огурец', 500 ] [ 'Помидор', 350 ] [ 'Лук', 50 ]
}

// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // огурец: 500 и так далее
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Object.entries: Map из Object

let obj22 = {
  name: "John",
  age: 30
};

let map22 = new Map(Object.entries(obj22));

console.log(map22.get("name")); // John
 //Здесь Object.entries возвращает массив пар ключ-значение: [ ["name","John"], ["age", 30] ]. Это именно то, что нужно для создания Map.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //Object.fromEntries: Object из Map Обратная операция предыдушей 
 let map33 = new Map();
map33.set('banana', 1);
map33.set('orange', 2);
map33.set('meat', 4);

let obj33 = Object.fromEntries(map33); // убрать .entries() // создаём обычный объект (*)

// готово!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(obj33.orange); // 2

////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

let set = new Set();

let john = { name: "Josh" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
console.log(set.size);//3

for (let user of set) {
  console.log(user.name); //Josh Pete Mary
}

//Перебор объекта Set(Такие же методы как и у Map)
let set2 = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set2) alert(value);

// то же самое с forEach:
set2.forEach((value, valueAgain, set) => {
  console.log(value);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Деструктурирующее присваивание
//Деструктуризация массива
// у нас есть массив с именем и фамилией
let arr3 = ["Ilyaq", "Kantor"]
// деструктурирующее присваивание
// записывает firstName=arr[0], surname=arr[1]
let [firstName, surName] = arr3;

console.log(firstName);// Ilya
console.log(surName);// Kantor

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//«Деструктуризация» не означает «разрушение».
// второй элемент не нужен
//Пропускайте элементы, используя запятые
let [firstName2,, title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
//присвоен только 1 и 3 элемент остальные откидываются, так как 2 элемент пропускается через запятую, остальные не имеют переменных
console.log(title); // Consul
console.log(firstName2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Работает с любым перебираемым объектом с правой стороны
let [a222, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

//Присваивайте чему угодно с левой стороны
let user51 = {};
[user51.name, user51.surname] = "Ilya Kantor".split(' ');

console.log(user.name, user.surname); // Ilya Kantor
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Цикл с .entries()
let user6 = {
  name: "John",
  age: 30,
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// цикл по ключам и значениям
for (let [key, value] of Object.entries(user6)) {
  console.log(`${key}:${value}`); // name:John, затем age:30
}

//то же самое для map:
let user7 = new Map();
user7.set("name", "John");
user7.set("age", "30");

for (let [key, value] of user5) {
  console.log(`${key}:${value}`); // name:John, затем age:30
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Остаточные параметры «…» Троеточие 

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]; //Любая переменная за место rest. ГЛАВНОЕ ... в ее начале 

console.log(name1); // Julius
console.log(name2); // Caesar

// Обратите внимание, что `rest` является массивом.
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Деструктуризация объекта
//let {var1, var2} = {var1:…, var2:…}

let options = {
  title2: "Menu",
  width: 100,
  height: 200
};

let {title2, width, height} = options;

console.log(title2);  // Menu
console.log(width);  // 100
console.log(height); // 200

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Если мы хотим присвоить свойство объекта переменной с другим названием, например, свойство options.width присвоить переменной w, то мы можем использовать двоеточие:

let options2 = {
  title3: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w2, height: h, title3} = options;//Двоеточие показывает «что : куда идёт»

// width -> w
// height -> h
// title -> title

console.log(title3);  // Menu
console.log(w2);      // 100
console.log(h);      // 200
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Умные параметры функций

let options3 = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

function showMenu({
  title = "Untitled",
  width: w = 100, // width присваиваем в w
  height: h = 200, // height присваиваем в h
  items: [item1, item2], // первый элемент items присваивается в item1, второй в item2
}) {
  console.log(`${title} ${w} ${h}`); // My Menu 100 200
  console.log(item1); // Item1
  console.log(item2); // Item2
}

showMenu(options3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Формат JSON, метод toJSON

let a22 = {
  val: [1, 2, 3],
  // Наверное, правильно.
  toJSON: function () {
    return this.val.slice(1);
  },
};
let b22 = {
  val: [1, 2, 3],
  // Наверное, ошибка.
  toJSON: function () {
    return "[" + this.val.slice(1).join() + "]";
  },
};
JSON.stringify(a22); // "[2,3]"
JSON.stringify(b22); // ""[2,3]""

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let a23 = {
 b: 42,
 c: "42",
 d: [1,2,3]
};
JSON.stringify( a23, ["b","c"] ); // "{"b":42,"c":"42"}"
JSON.stringify( a23, function(k,v){
 if (k !== "c") return v;
} );
// "{"b":42,"d":[1,2,3]}"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let student = {
    name: "Josh",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    wife:null
};

let json = JSON.stringify(student);
console.log(typeof json);//string
console.log(json);//{"name":"Josh","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//replacer Массив свойств для кодирования или функция соответствия function(key, value)
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup

console.log(
  //{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
  JSON.stringify(meetup, ["title", "participants", "place", "name", "number"])
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let room2 = {
    number: 23
};

let meetup2 = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room2  // meetup ссылается на room
};

room2.occupiedBy = meetup2; // room ссылается на meetup

console.log(JSON.stringify(meetup2, function replacer(key, value) {
  console.log(`${key}:${value}`);
  // условие ? выражение1 : выражение2;
  return (key == "occupiedBy") ? undefined : value;
}));

/* пары ключ:значение, которые приходят в replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Теперь давайте добавим собственную реализацию метода toJSON в наш объект room

let room3 = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup3 = {
  title: "Conference",
  room3
};

console.log(JSON.stringify(room3)); // 23

console.log(JSON.stringify(meetup3));//{"title":"Conference","room3":23}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Использование reviver

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log(schedule.meetups[1].date.getDate()); // 18

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//JS ES6

//Объявление на уровне блоков
//IIFE

let a12 = 2;
(function IIFE() {
  let a13 = 3;
  console.log(a13);//3
})();
console.log(a12);//2

//Оператор let

{
  console.log(a323); // значение не определено
  console.log(b323); // ReferenceError!
  var a323;
  // доступ к переменной b появится только после выполнения оператора let b.
  let b323;
}
// //Ошибка ReferenceError, генерируемая при попытке слишком рано
// обратиться к переменной, которая ниже объявляется при помощи
// оператора let, технически называется ошибкой временной мертвой зоны

//оператор let и цикл for

var funcs = [];

for (let i = 0; i < 5; i++){
  funcs.push(function () {
    console.log(i);
  });
}
funcs[3]()//3
 

//Объявления с оператором const

{
  const a = 2 
  console.log(a);//2

  a = 3; // TypeError!
}


//Операторы Spread и Rest

function foo(x, y, z) {
  console.log(x, y, z);
}
// используется, когда требуется превратить массив в набор аргументов для вызова функции
// ... дает более простую синтаксическую замену метода apply(..),
foo(...[1, 2, 3]);//123


//Впрочем, оператор ... позволяет расширять значение и в других
//контекстах, например внутри объявления другого массива:

let a333 = [2, 3, 4];
let b333 = [1, ...a333, 5];//заменяет метод concat(..)
console.log(b333); //[ 1, 2, 3, 4, 5 ]

// Кроме того, оператор ... повсеместно используется для противоположной цели: вместо разделения массива он собирает набор
// значений в массив. Например:

function foo(x, y, ...z) {
  console.log(x, y, z);
}

foo(1, 2, 3, 4, 5); //12[3,4,5]

//Кроме того, оператор ... повсеместно используется для противоположной цели: вместо разделения массива он собирает набор
//значений в массив. Например:

function foo122(...args) {
  console.log(args);
}

foo122(1, 2, 3, 4, 5); //[1, 2, 3, 4, 5];


//чтобы превратить аргументы в нечто, позволяющее обращаться с собой как с массивом.

// новый способ в соответствии со стандартом ES6
function foo(...args) {
  // 'args' это настоящий массив
  // отбрасываем первый элемент в массиве 'args'
  args.shift();

  // передаем все содержимое 'args' как аргументы
  // методу 'console.log(..)'
  console.log(...args);
}

// старый, использовавшийся до появления ES6 способ

function bar() {
  // превращаем 'arguments' в настоящий массив
  var args = Array.prototype.slice.call(arguments);
  // добавляем в конец какие-то элементы
  args.push(4, 5);

  // убираем нечетные числа
  args = args.filter(function (v) {
    return v % 2 == 0;
  });

  // передаем все содержимое 'args' как аргументы
  // в функцию 'foo(..)'
  foo.apply(null, args);
}

bar(0, 1, 2, 3); // 2 4

//Значения параметров по умолчанию

function foo(x = 11, y = 31) {
 console.log( x + y );
}
foo(); // 42
foo( 5, 6 ); // 11
foo( 0, 42 ); // 42
foo( 5 ); // 36
foo( 5, undefined ); // 36 <-- 'undefined' отсутствует
foo( 5, null ); // 5 <-- null приводится к '0'
foo(undefined, 6); // 17 <-- 'undefined' отсутствуе


//Выражения как значения по умолчанию

function bar(val) {
 console.log( "bar called!" );
 return y + val;
}
function foo(x = y + 3, z = bar( x )) {
 console.log( x, z );
}
var y = 5;
foo(); // "bar called"
 // 8 13
foo( 10 ); // "bar called"
 // 10 15
y = 6;
foo(undefined, 10); // 9 10

//Деструктурирующее присваивание
//Шаблон присваивания свойств объекта

let X = 10, Y = 20;
let o = { a: X, b: Y };
console.log(o.a, o.b); // 10 20

///////////////////////////////

var aa = 10, bb = 20;
var o = { x: aa, y: bb };
var { x: AA, y: BB } = o;
console.log(AA, BB); // 10 20


//Не только в объявлениях

let a223, b, c, x, y, z;
[a223, b, c] = foo();
({ x, y, z } = bar());//находятся в (), что бы {} восспринимались как объект, а не как блок

//Здесь переменные уже объявлены и деструктуризация сопровождает только операцию присваивания
console.log( a, b, c ); // 1 2 3
console.log(x, y, z); // 4 5 6


// Можно использовать
// любые допустимые выражения присваивания. Например:
let o = {};
[o.a, o.b, o.c] = foo();
( { x: o.x, y: o.y, z: o.z } = bar() );
console.log( o.a, o.b, o.c ); // 1 2 3
console.log( o.x, o.y, o.z ); // 4 5 6
// В деструктурирующем присваивании могут фигурировать даже
// выражения для вычисляемых свойств. Например:
let which = "x",
 o = {};
( { [which]: o[which] } = bar() );
console.log(o.x); // 4


//Присваивание в общей форме можно использовать для создания
//отображений/преобразований объекта, например:

let o1 = { a: 1, b: 2, c: 3 },
  o2 = {};
({ a: o2.x, b: o2.y, c: o2.z } = o1);
console.log(o2.x, o2.y, o2.z); //1 2 3

//Можно преобразовать объект в массив, например так:

let o3 = { a: 1, b: 2, c: 3 },
  aq = [];
({ a: aq[0], b: aq[1], c: aq[2] } = o3);
console.log(aq);//[1,2,3]

//Или сделать наоборот

let
  aw = [1, 2, 3],
  o4 = {};
[o4.a, o4.b, o4.c] = aw;
console.log(o4.a, o4.b, o4.c);//123

//Можно преобразовать один массив в другой
let
  ae = [1, 2, 3],
  ae2 = [];
[ae2[2], ae2[0], ae2[1]] = ae;
console.log(ae2);//[2,3,1]

//Более того, традиционную задачу по обмену значениями двух переменных можно решать, не прибегая к дополнительной переменной:

let x = 10, y = 20;
[y, x] = [x, y];
console.log(x, y);//20 10

//Повторные присваивания

let { a: X2, a: Y2 } = { a: 1 };
X2;//1
Y2;//1
/////////////////////////////
let { a: { x: X3, x: Y3 }, ap } = { a: { x: 1 } };

X; // 1
Y; // 1
a; // { x: 1 }
////////////////////////////
({ a: X4, a: Y4, a: [Z] } = { a: [1] });

X4.push(2);
Y4[0] = 10;

X; // [10,2]
Y; // [10,2]
Z; // 1

let { a: { b: [c, d], e: { f } }, g } = obj;

let {
  a: {
    b: [c, d2],
    e: { f2 }
  },
  g2
} = obj;

// //Помните, что деструктурирующее присваивание используется не
// только для уменьшения количества набираемых на клавиатуре
// символов, но и для улучшения читабельности кода.


//Выражения деструктурирующего присваивания

let o = { a00: 1, b: 2, c: 3 },
  a00,
  b,
  c,
  p;

p = { a00, b, c } = o;

console.log(a00, b, c); // 1 2 3
p === o; // true
//В этом фрагменте кода переменной p присваивается ссылка на объект o, а не одно из значений a, b или c.

/////////////////////////////////
let o = [1, 2, 3],
  a21, b, c, p;

p = { a21, b, c } = o;
console.log( a, b, c ); // 1 2 3
p === o; // true
////////////////////////////

let o = { a23: 1, b: 2, c: 3 },
  p = [4, 5, 6],
  a23,
  b,
  c,
  x,
  y,
  z;
({ a23 } = { b, c } = o);
[x, y] = [z] = p;

console.log(a23, b, c); // 1 2 3
console.log(x, y, z); // 4 5 4

////////////////////////////////////////
//Слишком много, слишком мало, в самый раз


let a01 = [2, 3, 4];
let b = [1, ...a01, 5];

console.log(b); //[1, 2, 3, 4, 5];

////

let a02 = [2, 3, 4];
let [b, ...c] = a02; //распределяет значения из a в соответствии с заданным внутри квадратных скобок шаблоном

console.log(b, c);//2[3,4]
//////////////////////////////////////////////////////

//Присваивание значений по умолчанию

let [ a03 = 3, b = 6, c = 9, d21 = 12 ] = foo();
let { x = 5, y = 10, z = 15, w21 = 20 } = bar();
console.log( a03, b, c, d21 ); // 1 2 3 12
console.log( x, y, z, w21 ); // 4 5 6 20

//Присваивание значений по умолчанию можно скомбинировать с другими вариантами присваивания

let { x, y, z, w: WW = 20 } = bar();
console.log(x, y, z, WW);//4 5 6


//Использование деструктуризации массива для извлечения значений по любому индексу
const [, , website] = ["Oluwatobi", "Sofela", "codesweetly.com"];

console.log(website);// "codesweetly.com"

//В коде выше мы использовали запятые для пропуска переменных в первой и второй позициях деструктурирующего массива.


let firstName21 = "Oluwatobi";
let website2 = "CodeSweetly";

[firstName21, website] = [website, firstName21];

console.log(firstName21); // "CodeSweetly"
console.log(website); // "Oluwatobi"


//Использование деструктуризации массива для извлечения значений из массива в параметры

const profile = ["Oluwatobi", "Sofela"];

function getUserBio([firstName, lastName]) {
  return `My name is ${firstName} ${lastName}.`;
}
getUserBio(profile);

// The invocation above will return:
"My name is Oluwatobi Sofela."


//Тегированные шаблонные строки

function dollabillsyall(strings, ...values) {
 return strings.reduce( function(s,v,idx){
 if (idx > 0) {
 if (typeof values[idx-1] == "number") {
 // смотрите, здесь также используются
 // интерполированные строковые литералы!
 s += `$${values[idx-1].toFixed( 2 )}`;
 }
 else {
 s += values[idx-1];
 }
 }
 return s + v;
 }, "");
    }
var amt1 = 11.99,
 amt2 = amt1 * 1.08,
 name = "Кайл";
var text = dollabillsyall
`Спасибо за покупку, ${name}! Выбранный вами
Продукт стоил ${amt1}, что вместе с НДС
составляет ${amt2}.`
console.log( text );
// Спасибо за покупку, Кайл! Выбранный вами
// продукт стоил $11.99, что вместе с НДС
// составляет $12.95.


//Перепишем начало, через стрелочную функцию

let dollabillsyall = (strings, ...values) =>
  strings.reduce((s, v, idx) => {
    if (idx > 0) {
      if (typeof values[idx - 1] == "number") {
        
        s += `$${values[idx - 1].toFixed(2)}`;
      }
      else {
        s += values[idx - 1];
      }
    }
    return s + v;
  }, "");


//////////////////////////////////////////////////////
//Асинхронный код в JavaScript
  //Промисы

  let promise = new Promise(function (resolve, reject) {
    ///......
  });


  let promise2 = new Promise(function (resolve, reject) {
    resolve("done");

    reject(new Error("…")); // игнорируется
    setTimeout(() => resolve("…")); // игнорируется
  });



  // Запрос в компанию. Он синхронный
// Компания обещает мне выполнить работу
const angelMowersPromise = new Promise((resolve, reject) => {
    // Обещание разрешилось спустя несколько часов
    setTimeout(() => {
        resolve('We finished mowing the lawn')
    }, 100000) // разрешается спустя 100 000 мс
    reject("We couldn't mow the lawn")
})

const myPaymentPromise = new Promise((resolve, reject) => {
    // разрешившийся промис с объектом: платежом в 1000 евро
    // и большое спасибо
    setTimeout(() => {
        resolve({
            amount: 1000,
            note: 'Thank You',
        })
    }, 100000)
    // промис отклонен. 0 евро и отзыв «неудовлетворительно» 
    reject({
        amount: 0,
        note: 'Sorry Lawn was not properly Mowed',
    })
})


//////////////////////////////////////////////

//ад обртаных вызовов или ад callback

getDate(function (x) {
  console.log(x);
  getMoreData(x, function (y) {
    console.log(y);
    getSomeMoreData(y, function (z) {
      console.log(z);
    });
  });
});
//////////////////////////////////////////////
///Promise

getData()
  .then((x) => {
    console.log(x);
    return getMoreData(x);
  })
  .then((y) => {
    console.log(y);
    return getSomeMoreData(y);
  })
  .then((z) => {
    console.log(z);
  })

//////////////////////////////////////////////

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 выполнен");
  }, 2000);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 выполнен");
  }, 1500);
});
//////////////////////////////////////////////
//Promise.all(), который ждет успешное выполнение всех промисов, либо завершает свое выполнение при обнаружении первой неудачи в массиве промисов.
Promise.all([promise3, promise4])
  .then((data) => console.log(data[0], data[1]))
  .catch((error) => console.log(error));

//////////////////////////////////////////////
//промисификация функции с колбека на промис
// function calc(a, b, callback) {
//   let sum = a + b;
//   callback(sum);
// }

// calc(2, 2, (sum) => {
//   let double = sum ** 2;
//   console.log(double); // 16 -> (2 + 2)^2
// });

//////////////////////////////////////////////
function calc(a, b) {
  return new Promise(resolve => resolve(a + b));
}

calc(2, 2).then(sum => {
    return sum ** 2;
    
}).then(console.log) // 16 -> (2 + 2)^2


//////////////////////////////////////////////
// Микрозадачи
//Проходиться сначала по всех очереди, но выполняется сначала второй console.log, так как промисы попадают во внутрению очередь задач 
let promise5 = Promise.resolve();

promise.then(() => console.log("промис выполнен"));

console.log("код выполнен"); // этот console.log показывается первым

promise5.then(() => console.log("промис выполнен"));
//////////////////////////////////////////////

//Тут все вызывается по очереди 
Promise.resolve()
  .then(() => console.log("промис выполнен!"))
  .then(() => console.log("код выполнен"));

//////////////////////////////////////////////

let promise6 = Promise.reject(new Error("Ошибка в промисе!"));

setTimeout(() => promise6.catch(err => alert('поймана')), 1000);

// Ошибка в промисе! Затем уже идет (поймана)
window.addEventListener('unhandledrejection', event => alert(event.reason));

///Async/await

//У слова async один простой смысл: эта функция всегда возвращает промис
async function f() {
  return 1;
}

f().then(alert); // 1

//идентично 
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1


/////////////////////////
async function f() {
  try {
    let response = await fetch("/no-user-here");
    let user = await response.json();
  } catch (err) {
    // перехватит любую ошибку в блоке try: и в fetch, и в response.json
    alert(err);
  }
}

f();