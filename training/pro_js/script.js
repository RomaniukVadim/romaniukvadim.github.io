// var MYAPP = (function(){
// 	var funcPrivate = function(){  			//Шаблон вызова функции
// 		return "funcPrivate";
// 	};

// 	return{
// 		func: function(a,b){				 //Шаблон вызова метода
// 			console.log(this);
// 			return a+b;
// 			},
// 		funcPubl: funcPrivate
// 		}
// } ) ();

// console.log( MYAPP.func(1,3) );

// console.log( MYAPP.funcPubl() );

// var arr = [2,4],
// 	add = function(a,b){
// 		console.log(this.func(2,5));
// 		return a*b;
// };

// console.log( add.apply(MYAPP, arr));

var Man = function(name){
	this.name = name;
	this.canSpeak = true;

	//var age = 34;

	// this.sayHello = function() {
	// 	return "Hello, my name is " + this.name + ". My age " + age + ".";
	// };
};

	Man.prototype.sayHello = function(){
		return "Hello, my name is " + this.name + ". My age " + 34 + ".";
	};
 var Vasiliy = new Man("Vasia");
// console.log(Vasiliy);
// console.log(Vasiliy.sayHello());
// console.log(Vasiliy.name);
// console.log(Vasiliy.canSpeak);

var MyAPP = {
	 Man:function(name){
		this.name = name;
		this.canSpeak = true;
	}
};

var gena = new MyAPP.Man("Gena");
console.log(gena instanceof MyAPP.Man);
console.log(Vasiliy instanceof Man);
console.log( gena.constructor );
