function kilometerToMeter(kilometer){
    if(kilometer>=0 && typeof kilometer === "number"){
        return kilometer * 1000;
    }
    else{
        return "Input a valid length!";
    }
    
}



function budgetCalculator(watch, phone, laptop){
    if (watch >= 0 && phone >= 0 && laptop >= 0 && typeof watch === "number" && typeof phone === "number" && typeof laptop === "number") {
        return watch * 50 + phone * 100 + laptop * 500;
    }
    else{
        return "Enter valid numbers!";
    }
}



function hotelCost(nights){
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

    if(friends.length > 0 && typeof friends === "object"){
        let longestName = friends[0];
        for (let i = 0; i < friends.length; i++) {
            if(friends[i].length >= longestName.length){
                longestName = friends[i];
            }
        }
        return longestName;    
    }
    else{
        return "Enter at least one friend's name!";
    }

}