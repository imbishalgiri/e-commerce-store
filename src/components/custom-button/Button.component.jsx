import React from 'react';

import './button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted,  ...otherProps }) => {
	return(
		<button
			 className={`${inverted? 'inverted': ''} ${isGoogleSignIn? 'google__sign--in': ''} custom__button`} 
			 {...otherProps}
		>
			{children}
		</button>
	)
}

export default CustomButton;