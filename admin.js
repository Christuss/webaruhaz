import { ADATOK } from "./adatok.js";

const MTBODY = $("#maintableb");
let lastsorted = "";
let kereses = "";

$(function () {
    main();
})

function main() {
    MTBODY.eq(0).html(tablaToltes());
    let fejlecelem = $("thead th");

    fejlecelem.on("click", function(){
        rendezes($(event.target).attr("id"))
    });

    let deleteelem = $(".delete");
    deleteelem.on("click", function(){
        deleteline($(event.target).attr("id"));
    });

    let keresok = $("form input");
    keresok.on("input", function(){
        kereso(event.data);
    });

}

function tablaToltes() {
    let szoveg = "";
    for (let index = 0; index < ADATOK.length; index++) {
        szoveg += `<tr><td>${ADATOK[index].nev}</td><td>${ADATOK[index].kor}</td><td>${ADATOK[index].fajta}</td><td id="t${index}" class="delete">❌</td></tr>`;
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
    main()
}

function kereso(keresettszoveg){ /* kulcsot is adjunk at */
    kereses += keresettszoveg;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}
