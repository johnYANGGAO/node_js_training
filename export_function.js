// var foo = require('./share_state_module')


// here is the test exports fuction and argument is : i am argument
// yes , here we are 
// this is from return's value


// var dic = foo('i am argument')
// dic.key = 'yes , here we are '

// console.log(dic.key + "\n"+ dic.default)

//===============================================REQUIRE LOCAL LIBRARY==================================================
// var file_name = require('fs')

// file_name.writeFileSync('file_name.txt','hello , we  use the local library fs to write these codes')


// console.log(file_name.readFileSync('file_name.txt').toString())

var path = require('path')

var a = '/Users/johnsmac//for_node_a.html'

/*
for_node_b.html
.
.html

*/
var b = './for_node_b.html'  
/*
/Users/johnsmac/for_node_a.html ----> just adjust the slash correct
for_node_a.html      ------>basename   
/Users/johnsmac/     ------>dirname
.html                ------>extra name

*/
console.log(path.normalize(a))
console.log(path.basename(a))
console.log(path.dirname(a))
console.log(path.extname(a))