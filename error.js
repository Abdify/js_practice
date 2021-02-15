//throw Error
function convert(n) {
    try{
        const number = Number.parseInt(n);
        if(!number){
            throw new Error('This is not a number!');
        }
        return number;
    } catch(e){
        console.error(e.name + ':' + e.message);
    }
}
console.log(convert("lol"))


const n = 101;
if(n>= 10){
    const e = new Error('Number must be less than 10');
    console.error(e.message);
    //throw new RangeError('out of range');
}


//type of error
const error = new SyntaxError;
if(error instanceof RangeError){
    console.error('this is range error: ' + error.name);
}
else if(error instanceof TypeError){

}
else if(error instanceof SyntaxError){
    console.error('this is syntax error at line: ' + error.name);
}




