# Fragmentos personalizados WordPress - Obradoiro Kreativo

Esta carpeta contiene los fragmentos personalizados de JavaScript y PHP usados para mejorar la experiencia de la tienda WordPress/WooCommerce de Obradoiro Kreativo.

Estos fragmentos se implementaron originalmente mediante el plugin WPCode y se incluyen aqui como codigo de portfolio para reclutadores y revisores tecnicos.

## JavaScript

### `js/page-title-animation.js`

Anade un efecto animado personalizado a los titulos de pagina. Detecta titulos de WordPress, titulos de tienda WooCommerce y titulos de archivo, y despues reconstruye cada titulo letra por letra para que el CSS pueda animar cada caracter de forma independiente.

Que demuestra:

- Manipulacion del DOM.
- Ejecucion defensiva para evitar procesados duplicados.
- Compatibilidad con renderizados tardios de WooCommerce, Astra o Elementor.
- Coordinacion entre clases generadas con JavaScript y animaciones CSS.

### `js/menu-icons-effects.js`

Mejora el menu de navegacion de WordPress/Astra insertando iconos SVG, anadiendo clases auxiliares y creando un brillo suave al pasar el raton que sigue el movimiento del puntero.

Que demuestra:

- Mejora dinamica de un menu generado por un CMS.
- Uso de SVG decorativos con `aria-hidden`.
- Normalizacion de texto para detectar opciones del menu de forma fiable.
- Actualizacion de variables CSS desde JavaScript para efectos visuales interactivos.
- Soporte responsive mediante clases auxiliares como `ok-menu-cart` y `ok-menu-checkout`.

## PHP

### `php/woocommerce-back-to-shop-button.php`

Anade un boton de marca "Volver a la Tienda" despues del listado de productos en las paginas de categoria de WooCommerce.

Que demuestra:

- Uso de hooks de WooCommerce.
- Renderizado condicional con `is_product_category()`.
- Salida segura de URLs con `esc_url()`.
- Control de respaldo si la pagina de tienda no esta disponible.
- Prevencion de duplicados cuando un hook se ejecuta mas de una vez.

## Notas

Estos fragmentos no incluyen credenciales, datos privados ni informacion de base de datos. Son seguros para publicarlos como parte de un repositorio de portfolio.

En un proyecto en produccion, estos fragmentos podrian moverse desde WPCode a un tema hijo o a un pequeno plugin personalizado para mejorar el control de versiones y el despliegue.
