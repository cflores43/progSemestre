function convert() {
    let g = document.getElementById("volumen").value
    let l = g*3.785;
    document.getElementById("out").innerHTML = l.toFixed(2) + " litros"
    }