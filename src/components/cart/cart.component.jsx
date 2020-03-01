import React from 'react';
import { connect } from 'react-redux';

import { ToggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart.styles.scss';

const Cart = ({toggleCartHidden}) => {
	return(
		<div className="cart__icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping__icon" />
			<span className="item__count">0</span>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(ToggleCartHidden())
});

export default connect(
	null,
	mapDispatchToProps 
	)(Cart);