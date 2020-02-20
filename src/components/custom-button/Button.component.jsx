import React from 'react';

import './button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
	return(
		<button className={` ${isGoogleSignIn? 'google__sign--in': ''} custom__button`} {...otherProps}>
			{children}
		</button>
	)
}

export default CustomButton;