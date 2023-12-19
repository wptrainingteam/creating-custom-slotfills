/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, CheckboxControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';
import PremiumFeatures from './slotfills';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes: { makeItFaster },
		setAttributes,
	} = props;
	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Freemium Inc. Settings', 'developer-blog' ) }
				>
					<CheckboxControl
						checked={ makeItFaster }
						label={ __(
							'Make my site a little faster',
							'developer-blog'
						) }
						onChange={ () =>
							setAttributes( { makeItFaster: ! makeItFaster } )
						}
					/>
					<PremiumFeatures.Slot fillProps={ { ...props } } />
				</PanelBody>
			</InspectorControls>
			<p { ...useBlockProps() }>
				{ __( 'Freemium INC Example', 'developer-blog' ) }
			</p>
		</>
	);
}
