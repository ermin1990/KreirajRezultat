
function autoClick() {
    $("#download").click();
}

function kreiranjePripreme(){
    $(document).ready(function () {
        var element = $("#htmlContent");
    
        $("#download").on('click', function () {
    
            html2canvas(element, {
                onrendered: function (canvas) {
                    var imageData = canvas.toDataURL("image/png");
                    var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
                    $("#download").attr("download", "Rezultat.png").attr("href", newData);
                }
            });
    
        });
    });
}


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
    autoClick()

    /* Ubacivanje lige i informacija o vremenu */

    let nazivLige = document.getElementById('nazivLige').value;
    if(!nazivLige){
        document.getElementById('nazivLige').placeholder = "Morate upisati naziv lige";
        document.getElementById('nazivLige').style.border = "1px solid red";
        return;
    }
    let kolo = document.getElementById('koloLige').value;
    if(!kolo){
        document.getElementById('koloLige').style.border = "1px solid red";
        return;
    }
    let datum = document.getElementById('datum').value;
    if(!datum){
        document.getElementById('datum').style.border = "1px solid red";
        return;
    }
    let vrijeme = document.getElementById('vrijeme').value;
    if(!vrijeme){
        document.getElementById('vrijeme').style.border = "1px solid red";
        return;
    }

    
    
    let datumFormat = datum.split("-");
    datum = `${datumFormat[2]}-${datumFormat[1]}-${datumFormat[0]}`



    liga.innerText = nazivLige;
    koloLige.innerText = kolo+' Kolo';
    datumIVrijeme.innerHTML = `${datum} .god - ${vrijeme}`;


    /*PRIKAZIVANJE OBJAVE*/
    forma.style.display = "none";
    priprema.style.display = 'block';
    downloadPripreme.style.visibility = 'visible';



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



    let domaciStrijelci = document.querySelector('.domaciStrijelci');
    let getDomaciStrijelci = '';
    for(let i=0;i<domaciGoloviInp;i++){
        let minuta = document.getElementById('minutaStrijelacDomaci'+i).value;
        let strijelac = document.getElementById('strijelacDomaci'+i).value;

        if(!minuta && !strijelac){
            continue
        }else if(!minuta && strijelac){
             getDomaciStrijelci += `<p>${strijelac}</p>`;
        }else{
            getDomaciStrijelci += `<p>${minuta}' ${strijelac}</p>`;
        }
    }

    domaciStrijelci.innerHTML = getDomaciStrijelci;



    let gostiStrijelci = document.querySelector('.gostiStrijelci');
    let getGostiStrijelci = '';
    for(let i=0;i<gostiGoloviInp;i++){
        let minuta = document.getElementById('minutaStrijelacGosti'+i).value;
        let strijelac = document.getElementById('strijelacGosti'+i).value;

        if(!minuta && !strijelac){
            continue
        }else if(!minuta && strijelac){
            getGostiStrijelci += `<p>${strijelac}</p>`;
        }else{
            getGostiStrijelci += `<p>${minuta}' ${strijelac}</p>`;
        }
        
    }

    gostiStrijelci.innerHTML = getGostiStrijelci;

    
    kreiranjePripreme()

    
    
    

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
        <div class="poravajUnos">
        <input type="number" class="strijelacMin" id="minutaStrijelacDomaci${i}" placeholder="Min." style="width: 60px">
            <input type="text" class="strijelacIme" id="strijelacDomaci${i}" placeholder="Ime igrača"></div>
        `
    }
    
    strijelciDomaciKlub.innerHTML = strijelciDomaciKlubHTML;
}

function gostiGoloviCreate(){
    let gostiGoloviInp = document.getElementById('goloviGostKlub').value;
    let strijelciGostiKlubHTML = ``;

    for(let i=0; i<gostiGoloviInp;i++){
        strijelciGostiKlubHTML += `
        <div class="poravajUnos">
        <input type="number" class="strijelacMin" id="minutaStrijelacGosti${i}" placeholder="Min." style="width: 100px">
            <input type="text" class="strijelacIme" id="strijelacGosti${i}" placeholder="Ime igrača"></div>
        `
    }
    
    
    strijelciGostiKlub.innerHTML = strijelciGostiKlubHTML;
}