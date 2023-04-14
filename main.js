import { ADATOK } from "./adatok.js";

$(function () {
    startUp();
})

function startUp() {
    const DIV = $("body main div");
    DIV.eq(0).html(kartyakDivbe());
    const GOMB = $(".mod");
    const MODAL = $("#modbod");
    console.log(GOMB);
    GOMB.on("click",function () {
        MODAL.html(modalfeltolt(this.id));
    })
}

function kartyakDivbe() {
    let szoveg = "";
    for (let index = 0; index < ADATOK.length; index++) {
        szoveg += '<div class="card col-md-3"><div class="card-body"><h2 class="card-title">' + ADATOK[index].nev + '</h2><p><b>Kor:</b> ' + ADATOK[index].kor + '<br><b>Fajta: </b>' + ADATOK[index].fajta + '</p><button id= "' + index + '" type="button" class="btn btn-primary mod" data-bs-toggle="modal" data-bs-target="#myModal">Mutat</button></div></div>';
    }
    return szoveg;
}

function modalfeltolt(szam) {
    let szoveg = "";
    szoveg += '<h2>' + ADATOK[szam].nev + '</h2><p><b>Kor:</b> ' + ADATOK[szam].kor + '<br><b>Fajta: </b>' + ADATOK[szam].fajta + '</p>';
    return szoveg;
}