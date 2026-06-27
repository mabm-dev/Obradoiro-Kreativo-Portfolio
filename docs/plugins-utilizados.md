# Plugins utilizados en Obradoiro Kreativo

Este documento recoge los plugins activos utilizados en el proyecto WordPress/WooCommerce de Obradoiro Kreativo. No se incluyen las carpetas originales de los plugins, solo una descripcion de su uso dentro del proyecto para mantener el repositorio limpio y seguro.

## Plugins principales

### WooCommerce

Plugin base para convertir WordPress en una tienda online.

Se utilizo para:

- Crear el catalogo de productos.
- Gestionar categorias de producto.
- Configurar carrito y checkout.
- Crear la pagina de mi cuenta.
- Gestionar pedidos y datos de compra.

Este plugin es la base funcional de la tienda.

### Elementor

Constructor visual utilizado para maquetar partes de la web.

Se utilizo para:

- Crear secciones visuales de la pagina de inicio.
- Organizar imagenes, botones y bloques de contenido.
- Ajustar composiciones visuales sin tocar directamente plantillas PHP.

Sobre Elementor se aplico una capa de CSS personalizado para adaptar la web a la identidad visual de Obradoiro Kreativo.

### WPCode Lite

Plugin usado para insertar fragmentos personalizados de codigo sin modificar directamente el tema.

Se utilizo para:

- Insertar CSS adicional.
- Insertar JavaScript personalizado.
- Insertar fragmentos PHP relacionados con WooCommerce.

Ejemplos de personalizacion:

- Animacion de titulos de pagina.
- Iconos y efectos visuales en el menu.
- Boton "Volver a la Tienda" en categorias de producto.

## Plugins de pagos, correo y analitica

### WooCommerce PayPal Payments

Plugin de integracion de pagos para WooCommerce.

Se utilizo para preparar la tienda para pagos mediante PayPal y otros metodos compatibles.

### WP Mail SMTP

Plugin usado para mejorar la fiabilidad del envio de correos desde WordPress.

Se utilizo para:

- Configurar el envio SMTP.
- Mejorar la entrega de correos de recuperacion de contrasena.
- Preparar los correos transaccionales de WooCommerce.

### Google Analytics for WordPress by MonsterInsights

Plugin utilizado para conectar la web con analitica.

Se utilizo para:

- Preparar seguimiento de visitas.
- Analizar comportamiento de usuarios.
- Obtener informacion util sobre trafico y uso del sitio.

## Plugins de SEO y mantenimiento

### All in One SEO

Plugin utilizado para la configuracion SEO de la web.

Se utilizo para:

- Gestionar ajustes basicos de SEO.
- Preparar metadatos.
- Mejorar la indexacion y estructura SEO del sitio.

### Broken Link Checker by AIOSEO

Plugin utilizado para revisar enlaces rotos.

Se utilizo como herramienta de mantenimiento para detectar enlaces internos o externos que pudieran fallar.

### Regenerar miniaturas

Plugin auxiliar para regenerar tamanos de imagen en WordPress.

Se utilizo especialmente tras modificar tamanos, estilos o proporciones de imagenes de productos y categorias.

## Plugins de soporte/desarrollo

### One Time Login

Plugin auxiliar para generar accesos temporales de un solo uso.

Se considera una herramienta de soporte/desarrollo, no una parte esencial de la tienda final. En un entorno de produccion real, su uso deberia estar limitado y controlado.

## Resumen tecnico

El proyecto combina plugins habituales del ecosistema WordPress con una capa personalizada de CSS, JavaScript y PHP. La personalizacion no se limita a instalar plugins, sino que adapta el comportamiento y la apariencia de WooCommerce, Astra y Elementor a una marca concreta.

Stack principal:

- WordPress.
- WooCommerce.
- Elementor.
- WPCode Lite.
- CSS personalizado.
- JavaScript personalizado.
- PHP snippets para WooCommerce.

## Nota de seguridad

En este repositorio no se incluyen:

- Carpetas completas de plugins.
- Licencias.
- Claves API.
- Datos SMTP.
- Credenciales.
- Exportaciones de base de datos con datos reales.

Solo se documenta el uso de cada plugin para mostrar el contexto tecnico del proyecto.
