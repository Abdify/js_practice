//Falsy values:
    //false
    //0
    //""
    //undefined
    //null
    //NaN
    
//Truthy values:
    //'0', ' ', [], {}

    let n = NaN;
if(n) console.log('True!');
else console.log('False!');


const students = [
    {id: 1, name: 'Omar'},
    {id: 2, name: 'Khalid'},
    {id: 3, name: 'Saad'}
]

const names = students.map(obj => obj.name);
console.log(names);
filtered = students.filter(obj => obj.id >= 2).find(obj => obj.id > 2);
console.log(filtered)


//closures
function outer(){
    let outerVariable = 5;
    (function anotherFunction(){
        const anotherVariable = 10;
    })();
    return function inner(){
        console.log(outerVariable);//anotherVariable = error
    }
}

const newFunction = outer();
newFunction();

let a = 7;
function functionAgain(){
    for(let i=0;i<10;i++){
        console.log("a=", a);
    }
    if(true){
        a = 8;
    }


}
functionAgain();
