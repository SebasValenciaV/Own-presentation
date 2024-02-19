document.getElementById("showDetails").addEventListener("click", function() {
    document.getElementById("experiencia").classList.remove("hidden");
    this.parentElement.parentElement.style.marginBottom = "40px"; // Ajustar el margen inferior del contenedor
    this.parentElement.style.display = "none";
});

document.getElementById("showContact").addEventListener("click", function() {
    alert("¡Gracias por tu interés! Puedes contactarme en Sebastian.valencia252@pascualbravo.edu.co o llamarme al 3168859466.");
});

document.getElementById("backToTop").addEventListener("click", function() {
    document.getElementById("experiencia").classList.add("hidden");
    document.getElementById("showDetails").parentElement.parentElement.style.marginBottom = "20px"; // Restaurar el margen inferior del contenedor
    document.getElementById("showDetails").parentElement.style.display = "flex"; // Restaurar la visualización del contenedor
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
