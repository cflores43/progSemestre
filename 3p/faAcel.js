// this may be a class, object, module, or function

function convert() {
    let f = document.getElementById("temp").value
    let c = (f-32)/1.8
    document.getElementById("out").innerHTML = c.toFixed(2) + " F°"
}
