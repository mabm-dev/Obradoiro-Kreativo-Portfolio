# Estructura del repositorio

Este repositorio esta organizado para que cualquier persona pueda entender rapidamente que partes del proyecto son visuales, que partes son codigo y que partes son documentacion.

## Carpeta principal

```text
Obradoiro-Kreativo-GitHub/
```

Contiene el README principal, la configuracion de Git y las carpetas del proyecto.

## `code/`

Contiene los fragmentos de codigo personalizados.

### `code/css/`

Incluye el CSS principal de personalizacion:

```text
obradoiro-kreativo.css
```

Este archivo recoge la capa visual aplicada sobre WordPress, Astra, Elementor y WooCommerce.

### `code/js/`

Incluye los fragmentos JavaScript:

```text
menu-icons-effects.js
page-title-animation.js
```

Estos archivos mejoran la experiencia visual y la interaccion de la web.

### `code/php/`

Incluye fragmentos PHP relacionados con WooCommerce:

```text
woocommerce-back-to-shop-button.php
```

Este archivo muestra una personalizacion mediante hooks de WooCommerce.

## `docs/`

Contiene documentacion del proyecto.

Archivos principales:

- `plugins-utilizados.md`
- `decisiones-tecnicas.md`
- `css-organizacion-notas.md`
- `seguridad-y-privacidad.md`

Esta carpeta ayuda a explicar el contexto del trabajo, no solo el codigo.

## `screenshots/`

Contiene capturas optimizadas de la web.

Sirven para mostrar el resultado visual sin necesidad de instalar WordPress.

## `.gitignore`

Evita subir archivos que no deben formar parte del repositorio, como:

- Configuraciones privadas.
- Bases de datos.
- Backups.
- Archivos temporales.
- Carpetas completas de WordPress.

## Enfoque del repositorio

Este repositorio funciona como portfolio tecnico. Su objetivo es mostrar el trabajo de personalizacion, documentacion y adaptacion de una tienda WordPress/WooCommerce, no distribuir una instalacion completa de WordPress.
