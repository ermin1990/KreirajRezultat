function autoClick() {
    $("#download").click();
}

$(document).ready(function () {
    var element = $("#htmlContent");

    $("#download").on('click', function () {

        html2canvas(element, {
            onrendered: function (canvas) {
                var imageData = canvas.toDataURL("image/jpg");
                var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
                $("#download").attr("download", "Rezultat.jpg").attr("href", newData);
            }
        });

    });
});



/* INICIJALIZACIJA SVIH ELEMENATA */

let liga = document.getElementById('liga');
let koloLige = document.getElementById('kolo');
let datumIVrijeme = document.getElementById('datumIvrijeme');


let domaciKlub = document.querySelector('.domaciKlub .imekluba');
let domaciMjesto = document.querySelector('.domaciKlub .mjesto');
let gostiKlub = document.querySelector('.gostiKlub .imekluba');
let gostiMjesto = document.querySelector('.gostiKlub .mjesto');

let domaciGolovi = document.querySelector('.rezultatHolder .domaciRez');
let gostiGolovi = document.querySelector('.rezultatHolder .gostiRez');

let priprema = document.getElementById('htmlContent');
let downloadPripreme = document.querySelector('.download');
let forma = document.querySelector('.forma');




let strijelciDomaciKlub = document.querySelector('.strijelciDomaciKlub');
let strijelciGostiKlub = document.querySelector('.strijelciGostiKlub');

function kreirajObjavu() {

    /* Ubacivanje lige i informacija o vremenu */

    let nazivLige = document.getElementById('nazivLige').value;
    let kolo = document.getElementById('koloLige').value;
    let datum = document.getElementById('datum').value;
    let vrijeme = document.getElementById('vrijeme').value;


    liga.innerText = nazivLige;
    koloLige.innerText = kolo+' Kolo';
    datumIVrijeme.innerHTML = `${datum} .god - ${vrijeme}`;


    /*PRIKAZIVANJE OBJAVE*/
    forma.style.display = "none";
    priprema.style.display = 'block';
    downloadPripreme.style.display = 'block';



    /* Ubacivanje klubova */
    let domaciKlubInp = document.getElementById('nazivDomacegKluba').value;
    domaciKlub.innerText = domaciKlubInp;
    let domaciMjestoInp = document.getElementById('mjestoDomacegKluba').value;
    domaciMjesto.innerText = domaciMjestoInp;
    let domaciGoloviInp = document.getElementById('goloviDomaciKlub').value;
    domaciGolovi.innerText = domaciGoloviInp;


    let gostiKlubInp = document.getElementById('nazivGostKluba').value;
    gostiKlub.innerText = gostiKlubInp;
    let gostiMjestoInp = document.getElementById('mjestoGostKluba').value;
    gostiMjesto.innerText = gostiMjestoInp;
    let gostiGoloviInp = document.getElementById('goloviGostKlub').value;
    gostiGolovi.innerText = gostiGoloviInp;


}

function nazad(){
    forma.style.display = "block";
    priprema.style.display = 'none';
    downloadPripreme.style.display = 'none';
}


function domaciGoloviCreate(){
    let domaciGoloviInp = document.getElementById('goloviDomaciKlub').value;
    let strijelciDomaciKlubHTML = ``;

    for(let i=0; i<domaciGoloviInp;i++){
        strijelciDomaciKlubHTML += `
        <input type="number" id="minutaStrijelacDomaci${i}" placeholder="Min." style="width: 100px">
            <input type="text" name="" id="strijelacDomaci${i}" placeholder="Ime igrača"><br>
        `
    }
    console.log(domaciGoloviInp);
    
    strijelciDomaciKlub.innerHTML = strijelciDomaciKlubHTML;
}

function gostiGoloviCreate(){
    let gostiGoloviInp = document.getElementById('goloviGostKlub').value;
    let strijelciGostiKlubHTML = ``;

    for(let i=0; i<gostiGoloviInp;i++){
        strijelciGostiKlubHTML += `
        <input type="number" id="minutaStrijelacGosti${i}" placeholder="Min." style="width: 100px">
            <input type="text" name="" id="strijelacGosti${i}" placeholder="Ime igrača"><br>
        `
    }
    
    
    strijelciGostiKlub.innerHTML = strijelciGostiKlubHTML;
}