import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/Button.component';
import './collectionitem.styles.scss';

const CollectionItem = ({ item, addItem }) => {
const { name, price, imageUrl } = item;
	return(
	<div className='collection__item'>
		<div 
			className='image'
			style={{
				backgroundImage:`url(${imageUrl})`
			}}
		 />
			<div className='collection__footer'>
				<span className="name">{ name }</span>
				<span className="price">{ price }</span>
			</div>
			<CustomButton inverted onClick={() => addItem(item)}>add cart</CustomButton>
	</div>
	)
};

const mapDispatchToProps = 	dispatch  => {
	return({
		addItem: item => dispatch(addItem(item))
	})
}


export default connect(null, mapDispatchToProps)(CollectionItem);