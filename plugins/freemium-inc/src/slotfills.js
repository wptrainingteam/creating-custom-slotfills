/**
 * WordPress dependencies
 */
import { createSlotFill } from '@wordpress/components';

/**
 * Create our Slot and Fill components
 */
const { Fill, Slot } = createSlotFill( 'PremiumFeatures' );

const PremiumFeatures = ( { children } ) => <Fill>{ children }</Fill>;

PremiumFeatures.Slot = ( { fillProps } ) => (
	<Slot fillProps={ fillProps }>
		{ ( fills ) => {
			return fills.length ? fills : null;
		} }
	</Slot>
);

export default PremiumFeatures;
