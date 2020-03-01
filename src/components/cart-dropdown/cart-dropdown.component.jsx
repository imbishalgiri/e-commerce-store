import React from 'react';

import CustomButton from '../custom-button/Button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	return(
		<div className="cart__dropdown">
			<div className="cart__items"></div>
			<CustomButton>Checkout</CustomButton>
		</div>
	);
}

export default CartDropdown;