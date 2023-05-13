function cambiarTema() {
    const tema = document.body;
    const temaReferencia = document.querySelectorAll("a");
    tema.classList.toggle("modoClaro");
    temaReferencia.classList.toggle("modoClaro");
 }