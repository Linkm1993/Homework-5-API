
let home = $(".home");
let timeOfDay = ["6 AM","7 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", '5 PM', '6 PM']
let currentTime = moment()


for (i = 0; i < timeOfDay.length; i++){
    let timeArray = []
    let dayDiv = home.append("<div class=\"time\">")
    let brkDiv = home.append("<br>")

    timeArray.push(timeOfDay[i])
    dayDiv.append(timeArray)


}
console.log(currentTime)
console.log(currentTime.toString())
console.log(currentTime._locale._months)
console.log(currentTime._locale._weekdays)
