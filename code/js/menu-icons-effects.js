/* =========================================================
   MENU PRINCIPAL - ICONOS Y EFECTO HOVER
   Anade iconos SVG al menu de WordPress/Astra y crea
   un brillo suave que sigue el movimiento del puntero.
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* Busca los enlaces reales del menu generados por Astra/WordPress. */
  const menuLinks = document.querySelectorAll(
    ".site-header .main-header-menu > .menu-item > .menu-link, " +
      ".ast-builder-menu .main-header-menu > .menu-item > .menu-link"
  );

  /* Si no encuentra menu, se detiene sin generar errores. */
  if (!menuLinks.length) return;

  /* Iconos SVG insertados directamente segun cada opcion del menu. */
  const icons = {
    inicio:
      '<svg class="ok-menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M3 10.8 12 3l9 7.8"/><path d="M5.5 9.5V21h13V9.5"/><path d="M9.5 21v-6h5v6"/></svg>',
    tienda:
      '<svg class="ok-menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M6 8h12l-1 13H7L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/><path d="M8 12h8"/></svg>',
    contacto:
      '<svg class="ok-menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 6.5h16v11H4z"/><path d="m4 7 8 6 8-6"/></svg>',
    cuenta:
      '<svg class="ok-menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></svg>',
    carrito:
      '<svg class="ok-menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 5h2l2.2 10.5h9.8L21 8H7"/><circle cx="10" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>',
    finalizar:
      '<svg class="ok-menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M6 10V8a6 6 0 0 1 12 0v2"/><path d="M5 10h14v11H5z"/><path d="m9 16 2 2 4-5"/></svg>'
  };

  /* Normaliza el texto para que acentos y mayusculas no afecten a la deteccion. */
  function normalizeText(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  /* Decide que icono corresponde a cada enlace del menu. */
  function getIconKey(text) {
    if (text.includes("inicio")) return "inicio";
    if (text.includes("tienda")) return "tienda";
    if (text.includes("contacto")) return "contacto";
    if (text.includes("mi cuenta") || text.includes("cuenta")) return "cuenta";
    if (text.includes("carrito")) return "carrito";
    if (text.includes("finalizar") || text.includes("compra")) return "finalizar";
    return "";
  }

  /* Activa la animacion de entrada escalonada controlada desde CSS. */
  document.body.classList.add("ok-menu-ready");

  menuLinks.forEach(function (link, index) {
    const item = link.closest(".menu-item");
    const cleanText = normalizeText(link.textContent);
    const iconKey = getIconKey(cleanText);

    /* Guarda el indice del elemento para retrasar su animacion de entrada. */
    if (item) item.style.setProperty("--ok-menu-index", index);

    /* Inserta el icono solo una vez, aunque el fragmento se ejecute de nuevo. */
    if (iconKey && !link.querySelector(".ok-menu-icon")) {
      link.insertAdjacentHTML("afterbegin", icons[iconKey]);
    }

    /* Anade clases auxiliares usadas por el CSS responsive del menu. */
    if (iconKey && item) {
      item.classList.add("ok-menu-" + iconKey);
    }

    /* Marca carrito y finalizar compra para aplicarles estilos especiales. */
    if (iconKey === "carrito" && item) {
      item.classList.add("ok-menu-cart");
    }

    if (iconKey === "finalizar" && item) {
      item.classList.add("ok-menu-checkout");
    }

    /* Actualiza variables CSS para que el brillo hover siga al puntero. */
    link.addEventListener("pointermove", function (event) {
      const rect = link.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      link.style.setProperty("--ok-menu-x", x + "%");
      link.style.setProperty("--ok-menu-y", y + "%");
    });
  });
});
