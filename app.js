// FUNCTION DECLERATION

function greet(firstName='kshitiz' , lastName='goel'){
    // console.log('hello');
    return 'hello' +' '+ firstName + ' ' + lastName;

}

console.log(greet('rajendra','gupta'));

const square = function(x=1){
    return x*x;
}

console.log(square(4));