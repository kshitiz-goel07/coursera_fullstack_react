// const firstName = 'kshitiZs';
// const lastName = 'GoeL' ;


// let val;
// val  = firstName  + ' ' + lastName ;
// val = 'rajenDRA';
// val += ' GUPta';

// val = val.concat(' ', ',Hi ');
// val = firstName.toLowerCase();
// val = firstName.toUpperCase();
// val = lastName.length;
// val = "hi , that's my hobbie";
// val = 'hi , friend\'s'

// val = firstName.charAt(2);
// val = firstName.indexOf('s');
// val = firstName.lastIndexOf('s');

// val = lastName.slice(0,2);
// val = lastName.slice(-2);

// // console.log(val);

const name = 'kshitiz goel';
const age = '20';
const job = 'web developer';
const city = 'sre';

let html;
function hello(){
    return 'hi there !!' ;
}
//with template strings
html =
`
<ul>
<li>Name : ${name}</li>
<li>Age : ${age}</li>
<li>Job : ${job}</li>
<li>City : ${city}</li>
<li>${2+2}</li>
<li>${hello()}</li>
<li>${age >18 ? 'you\'re big' : 'Go to home boy'}</li>
</ul>
`
document.body.innerHTML = html;