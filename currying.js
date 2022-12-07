//.............................curring using bind.............................

let multiply = function(x,y){
    return x*y;
}

let multiplyByThree = multiply.bind(this,3);
console.log(multiplyByThree(2));

let multiplyByFive = multiply.bind(this,5);
console.log(multiplyByFive(7));

//.............................curring using bind.............................
function outer(x) {
    return function multiply(y) {return x*y;}
}

let multiplyBySix = outer(6);
console.log(multiplyBySix(10));