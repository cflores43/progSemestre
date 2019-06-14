function convert() {
    let m = document.getElementById("medida").value
    let k = m/1.609; 
    document.getElementById("out").innerHTML = k.toFixed(2) + " Millas"
    }