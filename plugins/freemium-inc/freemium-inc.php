<?php
/**
 * Plugin Name:       Freemium Inc.
 * Description:       An example of using SlotFill to add premium features to a plugin.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0
 * Author:            Ryan Welcher, WordPress Developer Blog
 * Author URI:        https://developer.wordpress.org/news/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       developer-blog
 *
 * @package           developer-blog
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function developer_blog_freemium_inc_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'developer_blog_freemium_inc_block_init' );


/**
 * Determine if the plugin has been upgraded and enqueue the assets if so.
 */
function maybe_add_premium_features() {

	// This can be any number of ways.
	$user_has_upgraded = true;

	$premium_assets_file = plugin_dir_path( __FILE__ ) . 'build/premium.asset.php';
	if ( $user_has_upgraded && file_exists( $premium_assets_file ) ) {
		$assets = include $premium_assets_file;
		wp_enqueue_script(
			'freemium-inc-premium',
			plugin_dir_url( __FILE__ ) . 'build/premium.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);

		// This is hack, ignore it.
		\wp_localize_script(
			'freemium-inc-premium',
			'FREEMIUM',
			array(
				'pluginAssetPath' => plugin_dir_url( __FILE__ ),
			)
		);
	}
}
add_action( 'enqueue_block_editor_assets', 'maybe_add_premium_features' );
