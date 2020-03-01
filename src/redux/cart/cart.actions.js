import CartActionTypes from './cart.types';

export const ToggleCartHidden = () => {
	return ({
		type: CartActionTypes.TOGGLE_CART_HIDDEN
	});
}


export const addItem = item => {
	return({
			type: CartActionTypes.ADD_ITEM,
			payload: item
		});
}