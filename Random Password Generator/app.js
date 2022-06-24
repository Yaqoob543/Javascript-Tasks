function game() {

    var a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var b = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var d = ["!", "@", "#", "$", "%", "&"]
    var e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var f = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    document.getElementById('output').value;

    var a1 = Math.floor(Math.random() * a.length);
    var a2 = a[a1];
    var b1 = Math.floor(Math.random() * b.length);
    var b2 = b[b1];
    var c1 = Math.floor(Math.random() * c.length);
    var c2 = c[c1];
    var d1 = Math.floor(Math.random() * d.length);
    var d2 = d[d1];
    var e1 = Math.floor(Math.random() * e.length);
    var e2 = e[e1];
    var f1 = Math.floor(Math.random() * f.length);
    var f2 = f[f1];


    document.getElementById('output').innerHTML = (a2 + b2 + c2 + d2 + e2 + f2)
}