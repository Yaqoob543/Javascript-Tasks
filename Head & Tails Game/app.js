function game() {
    document.getElementById("input").value;

    var a = prompt("Enter Player 1 Name")
    var select = prompt("Please Select Head or Tail ??   H/T").toUpperCase();
    var b = prompt("Enter Player 2 Name")
    var arr = ["H", "T"]

    var random = Math.floor(Math.random() * arr.length);

    var final = arr[random];
    if (select === final) {
        document.getElementById("input").innerHTML = ("Congratulations it's " + final + " " + a + " Won !")

    } else if (select != final) {
        document.getElementById("input").innerHTML = ("Congratulations it's" + final + " " + b + " Won !")
    }
}