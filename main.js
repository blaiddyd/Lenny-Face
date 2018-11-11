function generator() {
    var ear = document.getElementById("ears").value;
    var face = document.getElementById("face").value;
    var result = ear.replace(" ", face);
    document.getElementById("result").innerHTML = result;
}