/* =========================================================
   TITULOS DE PAGINA - ANIMACION LETRA A LETRA
   Anima los titulos de WordPress, WooCommerce y archivos
   reconstruyendo cada titulo letra por letra.
========================================================= */

function okAnimatePageTitles() {
  /* Busca titulos de paginas normales, tienda WooCommerce y archivos. */
  const titles = document.querySelectorAll(
    ".page .entry-title, .woocommerce-products-header__title, .archive .page-title"
  );

  titles.forEach(function (title) {
    /* Evita procesar dos veces el mismo titulo. */
    if (title.classList.contains("ok-animated-title")) return;

    const text = title.textContent.trim();

    /* Si el titulo esta vacio, no hace nada. */
    if (!text) return;

    /* Vacia el texto original para reconstruirlo con etiquetas span. */
    title.textContent = "";
    title.classList.add("ok-animated-title");

    const textWrap = document.createElement("span");
    textWrap.className = "ok-title-text";

    /* Crea un span por cada caracter para poder animarlo de forma progresiva con CSS. */
    text.split("").forEach(function (char, index) {
      const letter = document.createElement("span");
      letter.className = "ok-letter";
      letter.textContent = char === " " ? "\u00A0" : char;
      letter.style.animationDelay = 0.2 + index * 0.06 + "s";
      textWrap.appendChild(letter);
    });

    title.appendChild(textWrap);
  });
}

/* Ejecuta la funcion cuando el DOM esta listo. */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", okAnimatePageTitles);
} else {
  okAnimatePageTitles();
}

/* Reintenta por si el tema, Elementor o WooCommerce insertan los titulos un poco mas tarde. */
setTimeout(okAnimatePageTitles, 500);
setTimeout(okAnimatePageTitles, 1200);
