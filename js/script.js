
let home = $(".home");
let timeOfDay = ["6 AM","7 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", '5 PM', '6 PM']
let currentTime = moment()



for (i = 0; i < timeOfDay.length; i++){
    let timeArray = [];
    let dayDiv = home.append("<div class=\"time\">");

    timeArray.push(timeOfDay[i]);
    dayDiv.append(timeArray);


}


function storeLocal(input) {
    let emptyString ="A"
    let userInput = $(".Submitform-control-md")
    let submitButton = $(".btn")
    userInput.val(45)
    console.log(userInput.val())

console.log(emptyString)
}


console.log(currentTime)
console.log(currentTime.toString())
console.log(currentTime._locale._months)
console.log(currentTime._locale._weekdays)
