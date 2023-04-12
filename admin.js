import { ADATOK } from "./adatok.js";

$(function () {
    main();
})

function main() {
    const MTBODY = $("#maintableb");
    MTBODY.eq(0).html(tablaToltes());
}

function tablaToltes() {
    let szoveg = "";
    for (let index = 0; index < ADATOK.length; index++) {
        szoveg += `<tr><td>${ADATOK[index].nev}</td><td>${ADATOK[index].kor}</td><td>${ADATOK[index].fajta}</td></tr>`;
    }
    return szoveg;
}

