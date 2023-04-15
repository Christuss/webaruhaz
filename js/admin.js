import { ADATOK } from "./adatok.js";

const MTBODY = $("#maintableb");
let lastsorted = "";
let kereses = "";

let nevfeltetel;
let korfeltetel;
let fajfeltetel;

let ujnyitva = false;

$(function () {
    main();
})

function main() {
    MTBODY.eq(0).html(tablaToltes(ADATOK));
    let fejlecelem = $("thead th");

    fejlecelem.on("click", function(){
        rendezes($(event.target).attr("id"))
    });

    let deleteelem = $(".delete");
    deleteelem.on("click", function(){
        deleteline($(event.target).attr("id"));
    });

    let keresok = $("form input");
    keresok.on("input" ,function(){
        kereso(event.target.value, $(event.target).attr("id"));
    })

    let ujelem = $("#ujelem");
    ujelem.on("click", function(){
       nyitvatext();
    });

    let hozzaad = $("#elemhozzaad button");
    hozzaad.on("click", function(){
       adathozzaadas();
    });

}

function tablaToltes(lista) {
    let szoveg = "";
    for (let index = 0; index < lista.length; index++) {
        szoveg += `<tr><td>${lista[index].nev}</td><td>${lista[index].kor}</td><td>${lista[index].fajta}</td><td id="t${index}" class="delete">❌</td></tr>`;
    }
    return szoveg;
}



function rendezes(id){
    if (id === lastsorted) {
        ADATOK.reverse();
        MTBODY.eq(0).html(tablaToltes());      
    } else {
        ADATOK.sort(function(a, b){
            if (a[id] < b[id]) {
                return -1;
            }else if(a[id] > b[id]){
                return 1;
            }
            return 0;
        });
        MTBODY.eq(0).html(tablaToltes());
        lastsorted = id;
    }
}

function deleteline(id){
    id = parseInt(id.substring(1));
    ADATOK.splice(id, 1);
    main();
}

function kereso(keresettszoveg, id){ /* kulcsot is adjunk at */
    id = id.slice(0,-5);
    let talalatlista = [];
    for (let index = 0; index < ADATOK.length; index++) {
        if (String(ADATOK[index][id]).toLowerCase().includes(keresettszoveg)) {
            talalatlista.push(ADATOK[index]);
        }
    }
    MTBODY.eq(0).html(tablaToltes(talalatlista));
}

function nyitvatext(){
    if (ujnyitva) {
        ujnyitva = false;
        $("#ujelem").eq(0).html("Új elem");
    } else {
        ujnyitva = true;
        $("#ujelem").eq(0).html("Bezár");
    }
}

function adathozzaadas(){
    let inputok = $("#elemhozzaad input");
    
    let ujelem = {
        id: ADATOK[ADATOK.length-1]["id"]+1,
        nev: inputok.eq(0).val(),
        kor: parseInt(inputok.eq(1).val()),
        fajta: inputok.eq(2).val()

    }
    ADATOK.push(ujelem);
    console.log(ADATOK);
    MTBODY.eq(0).html(tablaToltes(ADATOK));
}