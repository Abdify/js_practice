

function factorial(number){
    // let fact = 1;
    if(number < 1){
        return 1;
    }
    number = number * factorial(number - 1);

    return number;
}
console.log(factorial(5));


function fibonacci(n){
    if( n == 0) return 0;
    if(n == 1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
    
}
console.log(fibonacci(5));

let arr = [];
function fibArray(n){
    if(n == 1) return [0];
    if(n == 2) return [0, 1];
    arr = fibArray(n-1);
    console.log(arr);
    arr.push(arr[n-2] + arr[n-3]);
    return arr;
}

console.log(fibArray(6));

// fibArray 6
//     fibArray 5
//         fibArray 4
//             fibArray 3
//                 fibArray 2
//                 [0,1]
//             [0,1,1]
//         [0,1,1,2]
//     [0,1,1,2,3]
// [0,1,1,2,3,5]
                
function isPrime(n){
    if(n<=1) return "not prime";
    for(let i = 2; i <= Math.sqrt(n);i++){
        if(n%i == 0) return "not prime";
    }
    return "Prime";
}
console.log(isPrime(45));

function isPrimeRecursive(n){
    if(n < 2) return true;

    let x = (n % isPrimeRecursive(n-1));
    if(x == 0) return false;
    return true;

//incomplete
    

}

console.log(isPrimeRecursive(9));
