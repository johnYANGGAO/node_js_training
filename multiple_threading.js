function place_order(order_number) {
	console.log('order_number is : ',order_number);
	cook_deliver_food(function() {
		console.log('deliver food order : ',order_number)
	})
}

function cook_deliver_food(call_back) {
     setTimeout(call_back,5000)
     
}
/*
order_number is :  5
order_number is :  4
order_number is :  3
order_number is :  2
order_number is :  1
order_number is :  0
deliver food order :  5
deliver food order :  4
deliver food order :  3
deliver food order :  2
deliver food order :  1
deliver food order :  0
*/

for (var i = 5; i >= 0; i--) {
	place_order(i)
}