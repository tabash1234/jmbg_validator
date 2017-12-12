	var dan;
    var mesec;
    var godina;
    var regija;
    var jedinstveniBroj;
	var kontrolna; 
	var kontrolnaValid;
	
function provera() {
	var jmbgbroj=document.getElementById("jmbgunos");
	var jmbg=jmbgbroj.value.split("");
	dan = Number(jmbg[0] + jmbg[1]);
    mesec = Number(jmbg[2] + jmbg[3]);
    godina = Number(jmbg[4] + jmbg[5] + jmbg[6]);
    regija = Number(jmbg[7] + jmbg[8]);
    jedinstveniBroj = Number(jmbg[9] + jmbg[10] + jmbg[11]);
    kontrolna = Number(jmbg[12]);
	kontrolnaValid =
                11 -
                (7 * (Number(jmbg[0]) + Number(jmbg[6])) +
                    6 * (Number(jmbg[1]) + Number(jmbg[7])) +
                    5 * (Number(jmbg[2]) + Number(jmbg[8])) +
                    4 * (Number(jmbg[3]) + Number(jmbg[9])) +
                    3 * (Number(jmbg[4]) + Number(jmbg[10])) +
                    2 * (Number(jmbg[5]) + Number(jmbg[11]))) %
                    11;
					if (kontrolnaValid > 9) kontrolnaValid = 0;
					proverajmbg();
					
	
alert (dan);}

function proverajmbg () {
	var info = document.getElementById("podaci");
	if (dan < 1 || dan > 31) {
		info.innerHTML="Neipsravan dan";} 
		else if (mesec < 1 || mesec > 12) {
	info.innerHTML="Neipsravan mesec";}
	else if ((regija > 50 && regija < 70) || regija > 96) {
            info.innerHTML = "Neispravna regija";
        }
		else if (kontrolna !== kontrolnaValid) {
            info.innerHTML = "Neispravan kontrolni broj";
        } else {
            info.innerHTML = "Ispravan JMBG";
            ispisati();
        }	
}

function ispisati () {
	var tekst = document.getElementById("ispisano");
	ispisano.innerHTML="Datum rodjenja: " + dan +"." + mesec + ".1" + godina; 
	var tekst1 = document.getElementById("region");
	tekst1.innerHTML="Broj regije: " + regija +" za vise informacija pogledajte link: https://sh.wikipedia.org/wiki/Jedinstveni_mati%C4%8Dni_broj_gra%C4%91ana"; 
	var polovi = document.getElementById("pol");
	if (jedinstveniBroj <499) {
	polovi.innerHTML="Pol muski"}
	else {
		polovi.innerHTML="Pol zenski"}
		
	
}
