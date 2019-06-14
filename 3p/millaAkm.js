function convert() {
    let k = document.getElementById("medida").value
    let m = k*1.609; 
    document.getElementById("out").innerHTML = m.toFixed(2) + " Kilometros"
    }