let number = '532';
    number = +number;
console.log(number);
    number = number + '';
console.log(number);


const active = false;
let status = active ? 'active': 'inactive';

function messageUser(){return 'hi'};
function study(){return 'Math'};

let chat = active && messageUser();
console.log(chat);

let activity = chat || study();
console.log(activity);


