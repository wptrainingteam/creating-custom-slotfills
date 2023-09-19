/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import PremiumFeatures from '../src/slotfills';

registerPlugin( 'freemium-inc-premium-items', {
	render: () => {
		const { pluginAssetPath } = window.FREEMIUM;
		return (
			<PremiumFeatures>
				{ ( props ) => {
					return (
						<>
							<h2>
								{ __( 'Premium Feature', 'developer-blog' ) }
							</h2>
							<img
								src={ `${ pluginAssetPath }/img/beardy.gif` }
								style={ {
									border: '1px solid #c3c4c7',
								} }
								alt={ __(
									'Man blowing kisses at the camera',
									'developer-blog'
								) }
								width="100%"
							/>
						</>
					);
				} }
			</PremiumFeatures>
		);
	},
} );
