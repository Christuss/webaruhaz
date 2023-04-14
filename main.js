import { ADATOK } from "./adatok.js";

let modalIndex = 0;

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
        modalIndex = this.id;
    })
    const BAL = $('#bal');
    BAL.on('click', function () {
       modalIndex--;
       if (modalIndex < 0) {
        modalIndex = ADATOK.length-1;
       }
       MODAL.html(modalfeltolt(modalIndex)); 
    });
    const JOBB = $("#jobb");
    JOBB.on('click', function () {
        modalIndex++;
        if (modalIndex > ADATOK.length - 1) {
         modalIndex = 0;
        }
        MODAL.html(modalfeltolt(modalIndex)); 
     });
}

function kartyakDivbe() {
    let szoveg = "";
    for (let index = 0; index < ADATOK.length; index++) {
        szoveg += '<div class="card col-md-3"><div class="card-body"><h2 class="card-title">' + ADATOK[index].nev + '</h2><p><b>Kor:</b> ' + ADATOK[index].kor + '<br><b>Fajta: </b>' + ADATOK[index].fajta + '</p><button id= "' + index + '" type="button" class="btn btn-primary mod" data-bs-toggle="modal" data-bs-target="#myModal">Mutat</button><button type="button" class="kosarGomb btn btn-primary ms-5" id"' + index + '">Kosárba</button></div></div>';
    }
    return szoveg;
}

function modalfeltolt(szam) {
    let szoveg = "";
    szoveg += '<h2>' + ADATOK[szam].nev + '</h2><p><b>Kor:</b> ' + ADATOK[szam].kor + '<br><b>Fajta: </b>' + ADATOK[szam].fajta + '</p>';
    return szoveg;
}