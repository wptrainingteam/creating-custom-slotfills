/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';
import CustomSlotFill from './slotfills';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Main Plugin Settings', 'developer-blog' ) }
				>
					<p>Inspector Controls</p>
					<CustomSlotFill.Slot fillProps={ { ...props } } />
				</PanelBody>
			</InspectorControls>
			<p { ...useBlockProps() }>
				{ __( 'Main – hello from the editor!', 'developer-blog' ) }
			</p>
		</>
	);
}
