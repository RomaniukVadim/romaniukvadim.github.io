// var Obj = {
// 	name: "Table"
// };

// var newObj = {
// 	name: "Sienduk",
// 	test: function() {
// 		console.log('Testing');
// 	}
// }

// var Foo = function(){
// 	//this.name = "Fuu";
// };

// var boo = new Foo();

// Foo.prototype = newObj;

// var boo2 = new Foo();
// boo2.test() 

var animal = {
	canRun:true
};

var Wolf = function(){
	this.name = "Wolf"
}

Wolf.prototype = animal;

var volfy = new Wolf();
console.log(volfy);