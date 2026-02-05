//alert('meow');

//stuffzies

var banana = 0.79;
var apple = 1.25;
var bread = 2.49;
var milk = 3.49;
var eggs = 4.25;

//testing discounted milk price (10%):



var cartTotal = 0; // didn't put anything in cart
var itemSale = 0; //discount item


function addToCart (item) {
    //no return function
    cartTotal = item  + cartTotal; //doesn't matter what item b/c we have values
    //console.log(addToCart(banana)), leads to undefined because there's no return keyword. log cartTotal..
    //make a return statement
   // return item + cartTotal;
};

//console.log(addToCart(bread)); // this is for the return the key.

//this is for if there is no return.
addToCart(banana*5 + eggs + bread+ milk + apple*2); 
console.log(cartTotal);
// it logged

//second function

function removeFromCart (item) {
    cartTotal = cartTotal - item;
}

removeFromCart(apple); 
//console.log(cartTotal);

//correct; (milk + apple ) & (-apple)

function plusDiscount(item) {

    sale = item *.10;
}

plusDiscount(banana);
console.log(sale);

//console.log(plusDiscount);

function calcTotal (item) {
    cartTotal = cartTotal - item + (item - sale);
}

calcTotal(banana);
console.log(cartTotal.toFixed(2));


