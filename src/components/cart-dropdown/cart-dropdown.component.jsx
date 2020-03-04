import React from 'react';
import { connect } from 'react-redux';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cartItem.component';
import CustomButton from '../custom-button/Button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => {
	return(
		<div className="cart__dropdown">
			<div className="cart__items">
			{
				cartItems.map(	cartItem => <CartItem key={cartItem.id} item={cartItem} />)
			}
			</div>
			<CustomButton>Checkout</CustomButton>
		</div>
	);
}

const mapStateToProps = state => {
	return({
		cartItems: selectCartItemsCount(state)
	})
}

export default connect(mapStateToProps)(CartDropdown);