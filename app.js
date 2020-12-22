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

const todo = {
    add : function(){
        console.log("add todo");
    },
    edit : function(id){
        console.log(`edit todo ${id}`);
    }
}

todo.delete=function(){
    console.log("delete it");
}

todo.add();
todo.edit(12);
todo.delete();