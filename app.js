const color = 'red';
switch(color){
   case 'red' : console.log('color is red');
   break;
   case 'yellow' : console.log('color is yellow');
   break;
   default : console.log('color isn\'t red nor yellow ' );
   break;
}

let  day;
day = new Date().getDay();

switch(day){
    case 0 : console.log('mon');
    break;
    case 1 : console.log('t');
    break;
    case 2 : console.log('w');
    break;
    case 3 : console.log('thur');
    break;
    case 4 : console.log('fri');
    break;
    case 5 : console.log('sat');
    break;
    case 6 : console.log('sun');
    break;
}