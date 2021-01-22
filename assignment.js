// https://github.com/Abdify/js_practice
function kilometerToMeter(kilometer){
    //Checks if the input is a non-negative number
    if(kilometer>=0 && typeof kilometer === "number"){
        return kilometer * 1000;
    }
    else{
        return "Input a valid length!";
    }
    
}



function budgetCalculator(watch, phone, laptop){
    //Checks if the inputs are  non-negative integers
    if (watch >= 0 && phone >= 0 && laptop >= 0 && Number.isInteger(watch) && Number.isInteger(phone) && Number.isInteger(laptop)) {
        return watch * 50 + phone * 100 + laptop * 500;
    }
    else{
        return "Enter valid integers!";
    }
}



function hotelCost(nights){
    //Checks if input is non-negative
    if(nights < 0){
        return "Enter a valid number!";
    }
    else if(nights <= 10){
        return nights * 100;
    }
    else if(nights <=20){
        return 1000 + (nights - 10) * 80;
    }
    else{
        return 1800 + (nights - 20) * 50;
    }
}



function megaFriend(friends) {
    //return friends.sort((a, b) => {return b.length - a.length;})[0];
    //Checks if input is an array containig at least one value
    if(friends.length > 0 && Array.isArray(friends)){
        let longestName = friends[0];
        for (let i = 0; i < friends.length; i++) {
            if(friends[i].length > longestName.length){
                longestName = friends[i];
            }
        }
        return longestName;    
    }
    else{
        return "Enter an array with at least one friend's name!";
    }

}
