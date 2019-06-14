function convert() {
    let a = document.getElementById("cambio").value
    let b = a*1.13;
    document.getElementById("out").innerHTML = b.toFixed() + " dollars"
    }