class House {
    constructor(numberOfRooms, roomLength, roomWidth, price) {
        this.name = "The name";
        this.numberOfRooms = numberOfRooms;
        this.price = price;
        this.length = roomLength;
        this.width = roomWidth;
    }
    sayName() {
        return this.name;
    }
    area(){
        return this.length*this.width;
    }
}




house1 = new House(3, 5, 5, 20000);
house1.table = 5;

console.log(JSON.stringify(house1));
console.log(house1.sayName());
console.log(house1.area());
console.log(house1.__proto__);

let house2 = Object.create(house1);

console.log(JSON.stringify(house2.__proto__));


function Books() { };
Books.prototype = {
    constructor: Books,
    sayName: function () {
        return this.name;
    }
}

function SciFi(name) {
    this.name = name;
}
function Islamic(name) {
    this.name = name;
}
SciFi.prototype = Object.create(Books.prototype);
Islamic.prototype = Object.create(Books.prototype);

SciFi.prototype.constructor = SciFi;
Islamic.prototype.constructor = Islamic;

let book1 = new Islamic("Al Makhtum");
let book2 = new SciFi("future");

console.log(book1.sayName());
console.log(book1.constructor);
console.log(Islamic.prototype);

Islamic.prototype.NumberOfHadith = function () {
    return "10";
}

console.log(book1.NumberOfHadith());



let mixin = function (obj) {
    obj.fly = function () {
        console.log("I am flying...tururut turu");
    }
}
mixin(SciFi);
SciFi.fly();


function properties(obj){
    let properties = [];
    for(property in obj){
        if(obj.hasOwnProperty(property))
            properties.push(property);
    }
    return properties;
}
//same thing
function properties1(obj) {
    return Object.keys(obj);
}

console.log(properties({name: "afds", "sdf": "sdft", say: function () {
    console.log("hiii");
}}));

console.log(properties1({name: "afds", "sdf": "sdft", say: function () {
    console.log("hiii");
}}))


var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

let objLength = Object.keys(student).length;
console.log(objLength)

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

for(let i = 0; i<library.length;i++){
    console.log(library[i].author + " " + library[i].title + " " + (library[i].readingStatus? "-already read": "-not read"));
}


class Volume{
    constructor(r, h){
        this.r = r;
        this.h = h;
    }
    getVolume() {
        return ((4/3)*Math.PI*Math.pow(this.r, 2)*this.h).toFixed(4);
    }
}
let vol = new Volume(1, 5).getVolume();
console.log(vol);


console.log(Array.prototype.constructor)

    