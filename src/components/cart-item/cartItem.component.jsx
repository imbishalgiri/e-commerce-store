import React from 'react';

import './cartItem.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
	return(
		<div className="cart__item">
			<img src={imageUrl} alt="item" />
			<div className="item__details">
				<span className="name">{name}</span>
				<span className="price">{quantity} x ${price}</span>
			</div>
		</div>
	);
}

export default CartItem;