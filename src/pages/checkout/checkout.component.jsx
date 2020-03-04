import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.styles.scss';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'; 


const CheckoutPage = ({ cartItems, total }) => (
	<div className="checkout__page">
		<div className="checkout__header">
			<div className="header__block">
				<span>Product</span>
			</div>
			<div className="header__block">
				<span>Description</span>
			</div>
			<div className="header__block">
				<span>Quantity</span>
			</div>
			<div className="header__block">
				<span>Price</span>
			</div>
			<div className="header__block">
				<span>Remove</span>
			</div>
			</div>
			{
				cartItems.map(cartItem => {
					return cartItem.name;
				})
			}
			<div className="total">
				<span>Total: ${total}</span>
			</div>
	</div>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);