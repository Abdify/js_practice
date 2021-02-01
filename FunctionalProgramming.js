let name = "abc";

function combinations(str) {
    let combo = [];
    for(let i = 0; i < str.length; i++){
        let x = "";
        for(let j = i; j < str.length; j++){
            x += str[j];
            combo.push(x);
        }
        
    }
    return combo;
}

console.log(combinations(name));

//---------Callback-------------Function as argument
function routine(name, time, task) {
  return `hi ${name}, ${task()} at ${time}`;
}
function eat() {
  return "eat";
}
function exercise() {
  return "exercise";
}

console.log(routine("boss", 10, eat));
console.log(routine("moti", 7, exercise));

//--------Arguments-----------

function sum() {
  console.log(arguments);
  let s = 0;
  for (let i = 0; i < arguments.length; i++) {
    const n = arguments[i];
    s += n;
  }
  return s;
}
console.log(sum(1,2,3,4,5));

//-------------------Map------------------
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

let userKeys = users.map(user => Object.keys(user)[0] + ": " + user.name);
console.log(userKeys);



Array.prototype.myMap = function(callbackFunction) {
    let resultArray = [];
    console.log(this);
    for (let i = 0; i < this.length; i++) {
        const callBackParameterValue = this[i];
        const callBackParameterIndex = i;
        const callBackParameterArray = this;
        resultArray.push(callbackFunction(callBackParameterValue, callBackParameterIndex, callBackParameterArray));
    }
    return resultArray;
}

const arr = [1,2,3,4,5];
let sqrtArr = arr.myMap((number, i, arr) => (number*arr[i]));
console.log(sqrtArr);

let sqrtArr2 = arr.map((number, i, arr) => (number*number));
console.log(sqrtArr2);

//Using map generically
// let map = Array.prototype.map;
let asciiValues = Array.prototype.map.call("hello world", (letter) => {
    return letter.charCodeAt(0);
});
console.log(asciiValues);

//querySelectorAll returns a list of "h1" object. these objects have properties like innerHTML, style, id... and methods
// let elementList = document.querySelectorAll("h1");
// let elementValue = elementList.map((object) => {
//     return object.innerHTML;
// })



//-----------------Filter---------------------

var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // for(let i = 0; i < this.length; i++){
  //   if(callback(this[i])){
  //     newArray.push(this[i]);
  //   }    
  // }
  this.map((value) => {
    if(callback(value)){
      newArray.push(value);
    }
  });
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
console.log(new_s);


let unfilteredList = [3,52,23,5,63,3,34,4];

let filteredList = unfilteredList.filter(number => number % 2 === 0);
console.log("filtered list:", filteredList);

//Slice instead of Splice
//concat instead of push



//-------------------Reduce-------------------

// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

let sumOfAge = users.reduce((sum, user) => sum+=user.age, 0);
console.log("Sum of age: ", sumOfAge);

let personObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(personObj);


// Only change code below this line
function urlSlug(title) {
  return title.toLowerCase().split(" ").join("-");

}
// Only change code above this line

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))


let x = 32423;
console.log(x.toString().length)

var addDigits = function(num) {
    num = Math.abs(num).toString();
    let i = 0;
    let sum = 0;
    while(i < num.length){
        sum += Number(num[i]);
        i++;
        if(i === num.length){
            num = sum.toString();
            if(num.length === 1) return Number(sum);
            sum = 0;
            i = 0;
        }

    
    }

};
console.log(addDigits(-1))


var addDigits2 = function(num) {
    num = Math.abs(num).toString().split("");
    console.log(num)

    return num.reduce((sum, digit) => {
      sum += Number(digit);
      
    }, 0)
        // if(i === num.length){
        //     num = sum.toString();
        //     if(num.length === 1) return Number(sum);
        //     sum = 0;
        //     i = 0;}

};

console.log(addDigits2(-1456))




var addBinary = function(a, b) {
    //return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    console.log(convertToBinary(convertToDecimal(a) + convertToDecimal(b)));
    
};

function convertToDecimal(binary){
    let arr = binary.split("");
    let decimal = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '1'){
            decimal += Math.pow(2, arr.length - 1 - i);
        }
    }
    console.log("DEC = ", decimal);
     //console.log(parseInt(binary, 2));

    return decimal;
}

function convertToBinary(decimal) {
  let binary = "";
  
  while(decimal>0){
  binary += decimal%2;
  decimal = Math.floor(decimal/2);
}
return binary;
}



// console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
// "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));


function sum(){
  let sum = 0;
  for(let i = 1 ; i  < 1000000000; i++){
    sum += (1/i);
  }
  return sum;
}
console.log(sum());