/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';
import { CheckboxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import PremiumFeatures from '../src/slotfills';

registerPlugin( 'freemium-inc-premium-items', {
	render: () => {
		return (
			<PremiumFeatures>
				{ ( { attributes, setAttributes } ) => {
					const { tenXMode } = attributes;
					return (
						<>
							<h2>
								{ __( 'Premium Features', 'developer-blog' ) }
							</h2>
							<CheckboxControl
								label={ __(
									'🔥🔥Enable 10x mode🔥🔥',
									'developer-blog'
								) }
								help={ __(
									'10x mode will make your site 10x faster.',
									'developer-blog'
								) }
								checked={ tenXMode }
								onChange={ () =>
									setAttributes( { tenXMode: ! tenXMode } )
								}
							/>
						</>
					);
				} }
			</PremiumFeatures>
		);
	},
} );
