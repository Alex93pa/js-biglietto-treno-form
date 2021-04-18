// al click del bottone "genera"

var creaTicket = document.getElementById('crea-ticket');
var reset = document.getElementById('reset');

creaTicket.addEventListener('click', function () {

    // inserimento nome passeggero nel biglietto

    var UserNameElement = document.getElementById('input-nome');
    var userName = UserNameElement.value;
    console.log(userName);

    document.getElementById('nome-passeggero').innerHTML = userName;


    //calcolo del prezzi secondo l'età dell'utente
    var kmPercorsi = document.getElementById("kmUtente").value;

    var anni = document.getElementById("categoria").value;

    var prezzo = kmPercorsi * 0.21
       
    if ( anni === "Under18" ){
        var prezzoFinale = prezzo * 0.80
        console.log("prezzo scontato under 18 =" + " " + prezzoFinale.toFixed( 2 ) + "€");
        document.getElementById('costoBiglietto').innerHTML = prezzoFinale.toFixed( 2 ) + "€";
        document.getElementById("offerta").innerHTML = ("Under 18")
    } else if ( anni === "Over65") {
        var prezzoFinale = prezzo * 0.60
        console.log("prezzo scontato over 65 =" + " " + prezzoFinale.toFixed( 2 ) + "€");
        document.getElementById('costoBiglietto').innerHTML = prezzoFinale.toFixed( 2 ) + "€";
        document.getElementById("offerta").innerHTML = ("Over 65")
    } else {
        console.log(prezzo.toFixed( 2 ) + "€")
        document.getElementById('costoBiglietto').innerHTML = prezzo.toFixed( 2 ) + " " + "€";
        document.getElementById("offerta").innerHTML = ("Standard")
    } 

    //numero Carrozza
    function randomNumberCarrozza() {
        var randomNumber = Math.floor(Math.random() *10 + 1);
        return randomNumber;
    }
    var numeroCarrozza = randomNumberCarrozza(1, 10);
    console.log("carrozza: " + numeroCarrozza);
    document.getElementById('carrozza').innerHTML = numeroCarrozza;

    //codice CP
    function randomNumberCodiceCP() {
        var randomNumberCP = Math.floor(Math.random() *90000);
        return randomNumberCP;
    }
    var numeroCodiceCP = randomNumberCodiceCP(90000, 100000);
    console.log("codice CP: " + numeroCodiceCP);
    document.getElementById('codice-CP').innerHTML = numeroCodiceCP;

});

//al click del bottone annulla

function reset() {
    location.reload();
}