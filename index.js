let price1 = document.querySelector('.price1');
console.log(price1.innerHTML);
price1.innerHTML = '100 руб.';

let price2 = document.querySelector('.price2');
console.log(price2.innerHTML);
price2.innerHTML = '110 руб.';

let price3 = document.querySelector('.price3');
console.log(price3.innerHTML);
price3.innerHTML = '90 руб.';

let price4 = document.querySelector('.price4');
console.log(price4.innerHTML);
price4.innerHTML = '105 руб.';

let price5 = document.querySelector('.price5');
console.log(price5.innerHTML);
price5.innerHTML = '95 руб.';

let x = 100;
let y = 110;
let a = 90;
let b = 105;
let c = 95;
let sum = x + y + a + b + c;

console.log(x + y + a + b + c + ' руб.');

let totalPrice = document.getElementById('totalPrice');
console.log(totalPrice.textContent);
totalPrice.textContent = ' ' + sum + ' руб.';

let buttonDiscount = document.querySelector('.button');
buttonDiscount.addEventListener('click', function calculateDiscount () {
    let discountPrice = sum * 0.8;
    totalPrice.textContent = ' ' + discountPrice + ' руб.';
});
