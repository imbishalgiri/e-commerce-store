import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cartItem.component';
import CustomButton from '../custom-button/Button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => {
	return(
		<div className="cart__dropdown">
			<div className="cart__items">
			{
				cartItems.length ? 
				cartItems.map(	cartItem => <CartItem key={cartItem.id} item={cartItem} />)
				:
				<span className="empty__message">empty cart</span>
			}
			</div>
			<CustomButton onClick={() => history.push('/checkout') }>Checkout</CustomButton>
		</div>
	);
}

const mapStateToProps = createStructuredSelector ({
		cartItems: selectCartItems
	})


export default withRouter(connect(mapStateToProps)(CartDropdown));