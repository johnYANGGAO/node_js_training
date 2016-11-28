var fav = require('./import_modlue')


//this is from modlues_fun_a
// here add value is : BAT MAN

fav.favorite='BAT MAN'
fav.entity.entity.fuc_a();
console.log('here add value is : '+ fav.favorite)


module.exports = function export_fuction(argument) {

   	   console.log('here is the test exports fuction and argument is : '+ argument)
   	   return {

             key : '',
             default:"this is from return's value"
   	   }
   }
