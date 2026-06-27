<?php
/**
 * WooCommerce - Boton volver a tienda para categorias de producto.
 *
 * Anade un boton de marca "Volver a la Tienda" despues del listado
 * de productos en las paginas de categorias de WooCommerce.
 *
 * Nota:
 * Si este codigo se pega en WPCode como fragmento PHP, puede que WPCode
 * no necesite la etiqueta inicial <?php.
 */

add_action('woocommerce_after_shop_loop', 'ok_boton_volver_tienda_final_categoria', 30);

function ok_boton_volver_tienda_final_categoria() {
  /* Solo muestra el boton en paginas de categorias de producto. */
  if (!is_product_category()) {
    return;
  }

  /* Evita duplicados si WooCommerce ejecuta el hook mas de una vez. */
  static $boton_mostrado = false;

  if ($boton_mostrado) {
    return;
  }

  $boton_mostrado = true;

  /* Obtiene la URL real de la pagina tienda de WooCommerce. */
  $url_tienda = wc_get_page_permalink('shop');

  /* Si la tienda no esta disponible, usa la pagina de inicio como respaldo. */
  if (!$url_tienda) {
    $url_tienda = home_url('/');
  }

  echo '<div class="ok-volver-tienda-wrap">';
  echo '<a class="ok-volver-tienda-btn" href="' . esc_url($url_tienda) . '">Volver a la Tienda</a>';
  echo '</div>';
}
