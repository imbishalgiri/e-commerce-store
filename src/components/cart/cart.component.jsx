import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ToggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart.styles.scss';

const Cart = ({ toggleCartHidden, itemCount }) => {
	return(
		<div className="cart__icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping__icon" />
			<span className="item__count">{itemCount}</span>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(ToggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
})

export default connect(
	mapStateToProps,
	mapDispatchToProps 
	)(Cart);

