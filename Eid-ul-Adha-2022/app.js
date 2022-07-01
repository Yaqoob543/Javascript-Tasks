var today = new Date()
var eid = new Date("July 10, 2022")

var mstoday = today.getTime()
var mseid = eid.getTime()
var diff = mseid - mstoday
var diff2 = (Math.floor(diff / (1000 * 60 * 60 * 24)))
console.log(diff2)


var eid2 = new Date("July 11, 2022")
var mseid2 = eid2.getTime()
var second = mseid2 - mstoday
var final = (Math.floor(second / (1000 * 60 * 60 * 24)));

var eid3 = new Date("July 12, 2022")
var mseid3 = eid3.getTime()
var third = mseid3 - mstoday;
var final3 = (Math.floor(third / (1000 * 60 * 60 * 24)))



document.getElementById("date").innerHTML = "Only " + diff2 + " Days are left on Eid-ul-Adha - 10th July 2022";
document.getElementById("day1").innerHTML = diff2 + " Days are left on 1st Day of Eid-ul-Adha   - 10th July 2022";
document.getElementById("day2").innerHTML = final + " Days are left on 2nd Day of Eid-ul-Adha  - 11th July 2022";
document.getElementById("day3").innerHTML = final3 + " Days are left on 3rd Day of Eid-ul-Adha  - 12th July 2022";

if (diff2 === 0) {
    document.getElementById("date").innerHTML = "Tomorrow will be 1st Day of Eid-ul-Adha - 10th July 2022"
    document.getElementById("day1").innerHTML = "Tomorrow will be 1st Day of Eid-ul-Adha - 10th July 2022"

}
if (diff2 === -1) {
    document.getElementById("date").innerHTML = "Congratulation ! Today is the First Day of Eid-ul-Adha - 10th July 2022"
    document.getElementById("day1").innerHTML = "Today is the First Day of Eid-ul-Adha 2022 - 10th July 2022"
    document.getElementById("day2").innerHTML = "Tomorrow will be 2nd Day of Eid-ul-Adha  - 11th July 2022";

}

if (diff2 === -2) {
    document.getElementById("date").innerHTML = "Today is the Second Day of Eid-ul-Adha 2022 - 11th July 2022"
    document.getElementById("day1").innerHTML = "Yesterday was First Day of Eid-ul-Adha 2022 - 10th July 2022"
    document.getElementById("day2").innerHTML = "Today is the Second Day of Eid-ul-Adha 2022 - 11th July 2022";
    document.getElementById("day3").innerHTML = "Tomorrow will be 3rd Day of Eid-ul-Adha  - 12th July 2022";

}
if (diff2 === -3) {
    document.getElementById("date").innerHTML = "Today is the Third Day of Eid-ul-Adha 2022 - 12th July 2022"
    document.getElementById("day1").innerHTML = "Day before Yesterday was First Day of Eid-ul-Adha 2022 - 10th July 2022"
    document.getElementById("day2").innerHTML = "Yesterday was the Second Day of Eid-ul-Adha 2022 - 11th July 2022";
    document.getElementById("day3").innerHTML = "Today is the 3rd Day of Eid-ul-Adha  - 12th July 2022";

}

if (diff2 < -3) {
    document.getElementById("date").innerHTML = "Eid-ul-Adha Season 2022 Gone ! See You Next Year"
    document.getElementById("day1").innerHTML = "Eid-ul-Adha Season 2022 Gone ! See You Next Year"

}



if (diff2 <= -4) {
    document.getElementById("date").style.display = "none";
    document.getElementById("day1").style.display = "none";
    document.getElementById("day2").style.display = "none";
    document.getElementById("day3").style.display = "none";
    document.getElementById("day4").style.display = "none";
    document.getElementById("trigger").style.display = "none";
    document.getElementById("gone").style.display = "block"


} else {

    document.getElementById("gone").style.display = "none"
}