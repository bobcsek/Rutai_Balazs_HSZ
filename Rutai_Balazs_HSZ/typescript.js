function osszesOszto(szam) {
    var tomb = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            tomb.push(i);
        }
    }
    return tomb;
}




function parosDarab(tomb) {
    var db = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0) {
            db++;
        }
    }
    return db;
}



function palindrome() {
    return "Indul a görög aludni";
}
function fuggvenyhivasPalindrom(palindrome) {
    var kisbetu = palindrome().toLowerCase().replaceAll(" ", "");
    var megfordit = kisbetu.split("").reverse().join("");
    return kisbetu === megfordit;
}
