/**
 * WordPress dependencies
 */
import { createSlotFill } from '@wordpress/components';

/**
 * Create our Slot and Fill components
 */
const { Fill, Slot } = createSlotFill( 'AQLCommon' );

const CustomSlotFill = ( { children } ) => <Fill>{ children }</Fill>;

CustomSlotFill.Slot = ( { fillProps } ) => (
	<Slot fillProps={ fillProps }>
		{ ( fills ) => {
			return fills.length ? fills : null;
		} }
	</Slot>
);

export default CustomSlotFill;
