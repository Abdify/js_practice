let name = 'boss';
const name2 = 'boss';
console.log(name2)


for(var i=0; i<100;i++){

}
console.log(i);

for(let i=200; i<300;i++){

}
console.log(i);

for(var i=300; i<400;i++){

}
console.log(i);

let str = `hi ${name}
you can write multiline here without \\n`;
console.log(str);


const addFive = n => n+5;
const sum = (x, y) => x+y;

const b = (function () {return 'I am boss'})();

console.log(b, addFive(8))
console.log(sum(3,4))
