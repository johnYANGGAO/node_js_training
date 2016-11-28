
function modlues_fun_a() {
	console.log('this is from modlues_fun_a');
}


function modlues_fun_b(argument) {
	return 'this is from modlues_fun_b \n hello '+ argument;
}


// module.exports.func_a = modlues_fun_a; we also can exports without varible entity

module.exports.entity = {
       
       fuc_a : modlues_fun_a,
       fuc_b : function (name) {
	                 console.log('this is from anonymous function \n hello : '+ name );
               },
       function_argumen: modlues_fun_b

}
