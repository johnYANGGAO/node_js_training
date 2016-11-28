// console.log('hello ,this is my first node js script');
var person = {
	first_name :'Yang',
	last_name:'Gao',
	age:30
}

// console.log(person)

function add(arg1,arg2) {

    return arg2+arg1
}

// console.log(add(3,6.5))

function worthless() {
	// body...
}
//[Function: worthless]
// console.log(worthless)

var foo = function(){
	console.log('hello ,this is amazing')
}
//hello ,this is amazing
// foo()
//"callback" argument must be a function(just name)
// setTimeout(foo,3000)


var another_person = person ;

another_person.last_name='Ciney'
// //Yang
// console.log(another_person.first_name)
// //Ciney why person's var also changed ! getting reference to person not copy
// console.log(person.last_name)
  
// true  just use value
// false  use value and type
// console.log(19=='19')
// console.log(19==='19')


var bukey = {

   print_name : function(){

      console.log("hello ,start print bukey's name")
      console.log('my name is bukey')
      console.log(this===bukey) //this it represent who is calling him

   }

}
/*
hello ,start print bukey's name
my name is bukey
true
*/

// bukey.print_name()

function same_thing(){

   console.log('my name is bukey same ? ')
   console.log(this===bukey) //false
   console.log(this===global) //true
}

// same_thing()

// =======================prototype=========================

function role() {
	this.name = 'monster'
	this.life_value = 100
	this.give_life = function give_life(target_player) {
		 target_player.life_value+=1
		 console.log(this.name + '  give life to  ' + target_player.name)
	}
    
}

var Wendy = new role()
var Olivia =new role()
Olivia.name = 'Olivia Thrilby '

//monster  give life to  Olivia Thrilby 
Wendy.give_life(Olivia)

//Wendy life value is 100 
// Olivia life value is 101 
console.log('Wendy life value is ' + Wendy.life_value +' \n Olivia life value is ' + Olivia.life_value)

// prototype (原型) you can add functions to all objects 
role.prototype.upper_cut = function upper_cut(target_player) {
	     target_player.life_value-=2
		 console.log(this.name + '  upper cutted  ' + target_player.name)

}

Wendy.upper_cut(Olivia)

console.log('Wendy life value is ' + Wendy.life_value +' \n Olivia life value is ' + Olivia.life_value)


//you can add properties to all objects
role.prototype.age = 120 ;

console.log(Wendy.age)
console.log(Olivia.age)







