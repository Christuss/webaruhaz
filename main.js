import { ADATOK } from "./adatok.js";

$(function () {
    startUp();
})

function startUp() {
    let szoveg = "";
    const DIV = $("body main div");
    szoveg += kartyakDivbe();
    DIV.eq(0).html(szoveg);
}

function kartyakDivbe() {
    let szoveg = "";
    for (let index = 0; index < ADATOK.length; index++) {
        szoveg += '<div class="card col-md-3"><div class="card-body"><h2 class="card-title">' + ADATOK[index].nev + '</h2><p class="card-body"><b>Kor:</b> ' + ADATOK[index].kor + '<br><b>Fajta: </b>' + ADATOK[index].fajta + '</p></div></div>';
    }
    return szoveg;
}