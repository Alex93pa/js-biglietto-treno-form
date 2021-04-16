var prezzo = kmPercorsi * 0.21
            
    if ( anni < 18){
        var prezzoFinale = prezzo * 0.80
        console.log("prezzo scontato under 18 =" + " " + prezzoFinale.toFixed( 2 ) + "€");
        document.getElementById('costo').innerHTML = "prezzo scontato under 18 =" + " " + prezzoFinale.toFixed( 2 ) + "€";
    } else if ( anni > 65) {
        var prezzoFinale = prezzo * 0.60
        console.log("prezzo scontato over 65 =" + " " + prezzoFinale.toFixed( 2 ) + "€");
        document.getElementById('costo').innerHTML = "prezzo scontato over 65 =" + " " + prezzoFinale.toFixed( 2 ) + "€";
    } else {
        console.log(prezzo.toFixed( 2 ) + "€")
        document.getElementById('costo').innerHTML = prezzo.toFixed( 2 ) + " " + "€";
    } 