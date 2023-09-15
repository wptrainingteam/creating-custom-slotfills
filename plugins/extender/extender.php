<?php
/**
 * Plugin Name:       Extender
 * Description:       Example block scaffolded with Create Block tool.
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
function developer_blog_extender_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'developer_blog_extender_block_init' );
