function osszesOszto(szam: number): number[] {
    var tomb: number[] = [];
    for (var i: number = 1; i <= szam; i++) {
        if (szam % i === 0) {
            tomb.push(i);
        }
    }
    return tomb;
}
////////////////////////////////////////////////////////

function parosDarab(tomb: number[]): number {
    var db: number = 0;
    for (var i: number = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 === 0) {
            db++;
        }
    }
    return db;
}


/////////////////////////////////////////////////////////

function palindrome():string {
        return "Indul a görög aludni"
    }

function fuggvenyhivasPalindrom(palindrome):boolean {

    
    var kisbetu:string = palindrome().toLowerCase().replaceAll(" ", "");
    var megfordit:string = kisbetu.split("").reverse().join("");

    return kisbetu === megfordit;
}
