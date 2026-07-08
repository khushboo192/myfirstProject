//function in js
//hello function
 function hello(){
   console.log("hello")
 }
hello();

//add two numbers 
function add(a,b){
    return a+b;
}
console.log(10+20);

// subtract two numbers
function subtract(a,b){
    return a-b;
}
// console.log(9-2);

//multiply two numbers
function multiply(a,b){
    return a*b;
}
console.log(9*7);

// divide two numbers
function divide(a,b){
    return a/b
}
console.log(45/9);

// modulus of two no.

function modulus(a,b){
    return a%b

}
console.log(90%9);

// find square of a number
function square(b){
    return b*b
}
console.log(square(5));

// check even or odd
function evenodd(n) {
    if (n % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log(evenodd(7));

//find maximum of two numbers
function max(a,b){
if(a>b){
    return a;
} else{
    return b
}
}
console.log(max(14,5));

//find small of two numbers
function small(a,b){
    if(a<b){
        return a;
    }else{
        return b
    }
}
console.log(small(10,18));

//
// find the prime no.or not
function prime(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return "prime";
    } else {
        return "not prime";

    }

}
console.log(prime(13));

//find the factorial  of a number
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(5));
//reverse a number
function reverse(num) {
    let rev = 0;
    while (num > 0) {
        let rem = num % 10;
        rev = rev * 10 + rev;
        num = Math.floor(num / 10);
    }
    return rev;
}
console.log(reverse(1234));

//sum of digits
function sumdigits(num) {
    let sum = 0;
    while (num > 0) {

        sum += num%10;
        num=Math.floor(num/10)
    }
    return sum ;

}
console.log(sumdigits(1234)); 

// polindrome number
function polindrome(num){
    let original = num;
    let rev = 0;

    while(num>0){
                let rem = num % 10;
                   rev = rev * 10 + rev;
  num=Math.floor(num/10);
    }
    if( original== rev){
        return"polindrome";
    }else{
        return"not polindrome";
}
}
console.log(polindrome(121));

//game
let player1 = 0;
let player2 = 0;
let turn = 1;

while (player1 < 100 && player2 < 100) {

    if (turn === 1) {
        let dice = Math.floor(Math.random() * 6) + 1;

        console.log("Player 1 Dice =", dice);

        player1 = player1 + dice;

        if (player1 > 100) {
            player1 = 100;
        }

        console.log("Player 1 Position =", player1);

        turn = 2;
    }

    else {
        let dice = Math.floor(Math.random() * 6) + 1;

        console.log("Player 2 Dice =", dice);

        player2 = player2 + dice;

        if (player2 > 100) {
            player2 = 100;
        }

        console.log("Player 2 Position =", player2);

        turn = 1;
    }
}

if (player1 === 100) {
    console.log(" Player 1 Wins!");
} else {
    console.log(" Player 2 Wins!");
}
tudents);














































