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
		return (
			<PremiumFeatures>
				{ ( props ) => {
					return <div>This is a premium feature!</div>;
				} }
			</PremiumFeatures>
		);
	},
} );
