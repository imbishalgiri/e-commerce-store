import React from 'react';
import './MenuItem.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
	<div className={`menu__item ${size}`}>
	 <div style={{
		backgroundImage: `url(${imageUrl})`
	}} 
	 className="background__image"></div>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">shop now </span>
		</div>
	</div>
)


export default MenuItem;