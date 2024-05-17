/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function mostrarHamburguesa() {
    var x = document.getElementById("botoneraPrincipal");
    if (x.className === "botonera") {
        x.className += "responsive";
    } else {
        x.className = "botonera";
    }
}