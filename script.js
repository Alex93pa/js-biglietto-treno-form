// al click del bottone "genera"
// var UserNameElement = undefined;
// var userName = undefined;
var creaTicket = document.getElementById('crea-ticket');
var reset = document.getElementById('reset');
// reset.addEventListener('click', function (){
//     console.log('PROVA RESET');
// });
creaTicket.addEventListener('click', function () {
    // prezzoKm = 0.21;

    var UserNameElement = document.getElementById('input-nome');
    var userName = UserNameElement.value;
    console.log(userName);

    document.getElementById('nome-passeggero').innerHTML = userName;

    var kmPercorsi = document.getElementById("kmUtente").value;

    var anni = document.getElementById("categoria").value;

    var prezzo = kmPercorsi * 0.21
       
    if ( anni === "Under18" ){
        var prezzoFinale = prezzo * 0.80
        console.log("prezzo scontato under 18 =" + " " + prezzoFinale.toFixed( 2 ) + "€");
        document.getElementById('costoBiglietto').innerHTML = prezzoFinale.toFixed( 2 ) + "€";
    } else if ( anni === "Over65") {
        var prezzoFinale = prezzo * 0.60
        console.log("prezzo scontato over 65 =" + " " + prezzoFinale.toFixed( 2 ) + "€");
        document.getElementById('costoBiglietto').innerHTML = prezzoFinale.toFixed( 2 ) + "€";
    } else {
        console.log(prezzo.toFixed( 2 ) + "€")
        document.getElementById('costoBiglietto').innerHTML = prezzo.toFixed( 2 ) + " " + "€";
    } 



    function randomNumberCarrozza() {
        var randomNumber = Math.floor(Math.random() *10);
        return randomNumber;
    }
    var numeroCarrozza = randomNumberCarrozza(1, 10);
    console.log(numeroCarrozza);
    document.getElementById('carrozza').innerHTML = numeroCarrozza;




});