import { ADATOK } from "./adatok.js";

let modalIndex = 0;
let kosarIndex = 0;
const KOSARTOMB = [];

$(function () {
  main();
});

function main() {
  const DIV = $("body main div");
  DIV.eq(0).html(kartyakDivbe());
  const GOMB = $(".mod");
  const MODAL = $("#modbod");
  console.log(GOMB);

  GOMB.on("click", function () {
    MODAL.html(modalFeltolt(this.id));
    modalIndex = this.id;
  });

  const BAL = $("#bal");

  BAL.on("click", function () {
    modalIndex--;
    if (modalIndex < 0) {
      modalIndex = ADATOK.length - 1;
    }
    MODAL.html(modalFeltolt(modalIndex));
  });

  const JOBB = $("#jobb");

  JOBB.on("click", function () {
    modalIndex++;
    if (modalIndex > ADATOK.length - 1) {
      modalIndex = 0;
    }
    MODAL.html(modalFeltolt(modalIndex));
  });

  const KOSARGOMB = $(".kosargomb");

    KOSARGOMB.on("click", function () {
      kosarIndex = this.id;
      KOSARTOMB.push(kosarIndex[0]);
    });
  
    const KOSARNAV = $("#kosarNav");
    const KOSARTARTALMA = $("#kosarTartalma");
    const VEGOSSZEGHELYE = $("#vegosszeg");
  
    KOSARNAV.on("click", function () {
      KOSARTARTALMA.html(kosarModalfeltolt());
      VEGOSSZEGHELYE.html("Végösszeg: " + vegosszegSzamitas() + "Ft.");
    });

    const FIZETESGOMB = $("#fizetes");

    FIZETESGOMB.on("click", function () {
      if (KOSARTOMB.length > 0) {
        KOSARTARTALMA.html("Köszönjük a vásárlást!");
        VEGOSSZEGHELYE.html("");
        KOSARTOMB.length = 0; 
      }
    });
}

function kartyakDivbe() {
  let szoveg = "";
  for (let index = 0; index < ADATOK.length; index++) {
    szoveg +=
      '<div class="card col-md-3"><div class="card-body"><h2 class="card-title">' +
      ADATOK[index].nev +
      "</h2><p><b>Kor:</b> " +
      ADATOK[index].kor +
      "<br><b>Fajta: </b>" +
      ADATOK[index].fajta + "<br><b>Ár: </b>" + ADATOK[index].ar + 
      '</p><button id= "' +
      index +
      '" type="button" class="btn btn-primary mod" data-bs-toggle="modal" data-bs-target="#myModal">Mutat</button><button type="button" class="kosargomb btn btn-primary ms-5" id ="' +
      index +
      'k">Kosárba</button></div></div>';
  }
  return szoveg;
}

function modalFeltolt(szam) {
  let szoveg = "";
  szoveg +=
    "<h2>" +
    ADATOK[szam].nev +
    "</h2><p><b>Kor:</b> " +
    ADATOK[szam].kor +
    "<br><b>Fajta: </b>" +
    ADATOK[szam].fajta + "<br><b>Ár: </b>" + ADATOK[szam].ar +
    "</p>";
  return szoveg;
}

function kosarModalfeltolt() {
  let szoveg = "";
  console.log(KOSARTOMB);
  for (let index = 0; index < KOSARTOMB.length; index++) {
    szoveg +=
      "<h2>" +
      ADATOK[KOSARTOMB[index]].nev +
      "</h2><p><b>Kor:</b> " +
      ADATOK[KOSARTOMB[index]].kor +
      "<br><b>Fajta: </b>" +
      ADATOK[KOSARTOMB[index]].fajta + "<br><b>Ár: </b>" + ADATOK[KOSARTOMB[index]].ar +
      "</p>";
  }
  if (KOSARTOMB.length == 0) {
    szoveg = "<b>A kosár üres</b>";
  }
  return szoveg;
}

function vegosszegSzamitas() {
  let vegosszeg = 0;
  for (let index = 0; index < KOSARTOMB.length; index++) {
    vegosszeg += ADATOK[KOSARTOMB[index]].ar;
  }
  return vegosszeg;
}