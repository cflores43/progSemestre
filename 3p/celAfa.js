// de Celcius a Farenheit

function convert() {
    let c = document.getElementById("temp").value
    let f = (c-32)/1.8
    document.getElementById("out").innerHTML = f.toFixed(2) + " F°"
}