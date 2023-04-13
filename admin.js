import { ADATOK } from "./adatok.js";

const MTBODY = $("#maintableb");
let szamrendezett = false;
let nevrendzett = false;


$(function () {
    main();
})

function main() {
    MTBODY.eq(0).html(tablaToltes());
    let nev = $("#nev");
    let kor = $("#kor");
    let faj = $("#faj");

    nev.on("click", function(){
        rendezes("n")
    });

    kor.on("click", function(){
        rendezes("k")
    });

    faj.on("click", function(){
        rendezes("f")
    });
}

function tablaToltes() {
    let szoveg = "";
    for (let index = 0; index < ADATOK.length; index++) {
        szoveg += `<tr><td>${ADATOK[index].nev}</td><td>${ADATOK[index].kor}</td><td>${ADATOK[index].fajta}</td><td>❌</td></tr>`;
    }
    return szoveg;
}

function korrendezes(){
    if (!szamrendezett) {
        ADATOK.sort(function(a, b){return a.kor - b.kor});
        szamrendezett = true;
        MTBODY.eq(0).html(tablaToltes());
    } else {
        ADATOK.reverse();
        szamrendezett = false;
        MTBODY.eq(0).html(tablaToltes());
    }
}

function nevrendzes(){
    if (!nevrendzett) {
        ADATOK.sort(function(a, b){return a.nev - b.nev});
        szamrendezett = true;
        MTBODY.eq(0).html(tablaToltes());
    } else {
        ADATOK.reverse();
        szamrendezett = false;
        MTBODY.eq(0).html(tablaToltes());
    }
}

function rendezes(rendezendo){
    if (rendezendo === "n") {
        ADATOK.sort(function(a, b){return a.nev < b.nev});
        nevrendzet
    } else if(rendezendo === "k"){
        
    }else{

    }
}
