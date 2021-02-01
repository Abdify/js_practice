function sorting(arr) {
    //arr.sort((a, b) => (a-b));
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
    }

console.log(sorting([6,4,0, 3,-2,1]))


var cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
]; 

cars.sort((a, b) => a.year - b.year);
console.log(cars);

cars.sort((a, b) => {
    if(a.type.toLowerCase() < b.type.toLowerCase()) return -1;
    if(a.type.toLowerCase() > b.type.toLowerCase()) return 1;
})
console.log(cars)

let arr = ["আ", "ইই", "z", "অন", "ইদ"];
arr.sort((a, b) => {
    return a.localeCompare(b);
})
console.log(arr);