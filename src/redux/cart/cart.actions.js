import CartActionTypes from './cart.types';

export const ToggleCartHidden = () => {
	return ({
		type: CartActionTypes.TOGGLE_CART_HIDDEN
	});
}