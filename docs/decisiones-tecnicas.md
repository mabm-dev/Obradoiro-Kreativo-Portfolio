# Decisiones tecnicas del proyecto

Este documento explica algunas decisiones tomadas durante el desarrollo y personalizacion de la tienda Obradoiro Kreativo.

## No subir WordPress completo

El repositorio no incluye una copia completa de WordPress porque no es necesario para mostrar el trabajo realizado.

Subir todo WordPress aumentaria mucho el tamano del repositorio y podria exponer archivos sensibles. En su lugar, se documentan y separan las partes personalizadas:

- CSS propio.
- JavaScript propio.
- PHP personalizado.
- Capturas del resultado.
- Plugins utilizados.

## Uso de WordPress y WooCommerce

WordPress se uso como CMS base y WooCommerce como sistema de tienda online.

Esta decision permite gestionar productos, categorias, carrito, pedidos y usuarios sin desarrollar desde cero toda la logica de comercio electronico.

## Personalizacion con CSS

La mayor parte de la identidad visual se trabajo mediante CSS personalizado.

El CSS se organizo por secciones:

- Variables.
- Header.
- Body.
- WooCommerce.
- Footer.
- Responsive.

Esto facilita revisar el codigo, localizar problemas y mantener el proyecto.

## Uso de WPCode

WPCode se uso para insertar fragmentos CSS, JavaScript y PHP sin modificar directamente el tema.

Esto permite trabajar de forma mas segura en una web WordPress, especialmente cuando se usa un tema de terceros como Astra.

## JavaScript como mejora de interfaz

JavaScript se uso solo para mejorar la experiencia visual, no para sustituir funcionalidades criticas.

Los fragmentos JS anaden:

- Animacion de titulos.
- Iconos dinamicos en el menu.
- Efecto visual al pasar el puntero.

Si JavaScript fallara, la web seguiria siendo navegable.

## PHP mediante hooks de WooCommerce

El PHP personalizado se implemento usando hooks de WooCommerce. Esto evita modificar archivos internos del plugin o del tema.

El ejemplo incluido en este repositorio anade un boton "Volver a la Tienda" en categorias de producto.

## Responsive

El responsive fue uno de los puntos principales del trabajo.

Se ajustaron:

- Header y menu.
- Tarjetas de producto.
- Imagenes principales.
- Carrusel.
- Footer.
- Paginas de WooCommerce.

El objetivo fue mantener una experiencia coherente en escritorio, tablet y movil.

## Imagenes optimizadas

Las capturas del proyecto se redujeron de peso para que el repositorio cargue rapido en GitHub.

Se mantuvo formato PNG para conservar una buena visualizacion de textos, botones y detalles de interfaz.

## Seguridad

No se incluyen credenciales, claves API, datos SMTP, base de datos ni informacion privada de clientes.

El repositorio esta pensado para mostrar el trabajo tecnico sin comprometer informacion sensible.
