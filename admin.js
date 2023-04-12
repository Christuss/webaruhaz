import { ADATOK } from "./adatok.js";

const MTBODY = $("#maintableb");

$(function () {
    main();
})

function main() {
    MTBODY.eq(0).html(tablaToltes());
    $("#kor").click(korrendezes());
}

function tablaToltes() {
    let szoveg = "";
    for (let index = 0; index < ADATOK.length; index++) {
        szoveg += `<tr><td>${ADATOK[index].nev}</td><td>${ADATOK[index].kor}</td><td>${ADATOK[index].fajta}</td></tr>`;
    }
    return szoveg;
}

function korrendezes(){
    let korrendezes = false;
    if (!korrendezes) {
        ADATOK.sort(function(a, b){return a-b});
        korrendezes = true;
        MTBODY.eq(0).html(tablaToltes());
    } else {
        ADATOK.sort(function(a, b){return b-a});
        korrendezes = false;
    } 
}
