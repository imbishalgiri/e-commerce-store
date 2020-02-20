import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
	return (
	<div className={`menu__item ${size}`}
	onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
	 <div style={{
		backgroundImage: `url(${imageUrl})`
	}} 
	 className="background__image"></div>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">shop now </span>
		</div>
	</div>
)}

export default withRouter(MenuItem);