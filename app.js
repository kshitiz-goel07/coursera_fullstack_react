const person = {
    firstName : 'Kshitiz',
    lastName : 'Goel',
     age : 20,
     hobbies : ['cricket', 'games','guitar'],
     address : {
         city : 'Saharanpur',
         state : 'UP'
     },
     getBirthYear : function(){
         return 2000;
     }
}
let val;

val = person;
val = person.firstName;
val = person['lastName'];
val = person.getBirthYear();
console.log(val);