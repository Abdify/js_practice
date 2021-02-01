let a = 5;
let b = 7;
let temp = a;
a = b;
b = temp;
console.log("a = ",a,", b = ",b);

a = a + b;
b = a - b;
a = a - b;
console.log("a = ",a,", b = ",b);

[a, b] = [b, a];
console.log("a = ",a,", b = ",b);


let randomNumber = 100 + Math.random() * 100;
let result = Math.round(randomNumber);
console.log(result);


// let c = [0,0,0,0,0,0,0,0,0,0];
// for(let i = 0; i < 5000; i++){
//     let randomNumber = Math.random() * 10;
//     let result = Math.round(randomNumber);
//     switch(result){
//         case 0:
//             c[0]++;
//             break;
//         case 1:
//             c[1]++;
//             break;
//         case 2:
//             c[2]++;
//             break;
//         case 3:
//             c[3]++;
//             break;
//         case 4:
//             c[4]++;
//             break;
//         case 5:
//             c[5]++;
//             break;
//         case 6:
//             c[6]++;
//             break;
//         case 7:
//             c[7]++;
//             break;
//         case 8:
//             c[8]++;
//             break;
//         case 9:
//             c[9]++;
//             break;
//     }
// }
// for(let i = 0; i<10;i++){
//     console.log("Number of " + i + " = " + c[i]);
// }

function randomBetweenTwo(min, max){
    return min + Math.round(Math.random()*(max-min));
}
for(let i = 0; i<2;i++){
    console.log(randomBetweenTwo(100, 300));
}
// console.log(window.crypto.getRandomValues());

console.log(Math.max(2,3,4,5,4,7,5,1));

let array = [3,1,2,4,3,5,3,3,5,9,6,2,6,3,6,9,7,0,7,7,4,3];
let max = Math.max(...array);
arrayReverse = [...array];
arrayReverse.reverse();
console.log(arrayReverse.indexOf(max), max);

let large = array[0];
let index = 0;
for(let i = 0; i<array.length;i++){
    if(array[i] >= large) {large = array[i]; index = i;}
}
console.log(index, large);

let sum = 0;
for(let i = 0;i<array.length;i++){
    sum+=array[i];
}
console.log(sum);

console.log(array.reduce((a, b) => a+b));

sentence = '    hi there,    let\'s count     the number   of words ';

let count = 0;
    for(let i=0;i<sentence.length;i++){
        if(sentence[i] === " " && sentence[i-1] != " " && sentence[i-1] != undefined && sentence[i+1] != undefined){
            count++;
        }
    }
    count++;
console.log(count);

const sentenceReverse = "Can you reverse me";
let newS = "";
//console.log((sentenceReverse.split('').reverse()).join(''));

for (let i = 1; i <= sentenceReverse.length; i++){
    newS += sentenceReverse[sentenceReverse.length - i];
    //newS = sentenceReverse[i] + newS;
}
console.log(newS);


function truncateString(str, num) {

    if (str.length > num) {
        return str.slice(0, num) + "...";
     }   
    if (num >= str.length) {
        return str;
        }
    
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8),
truncateString("Peter Piper picked a peck of pickled peppers", 11),
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));