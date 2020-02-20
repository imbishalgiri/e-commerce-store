import React from 'react';

import SignIn from '../../components/signin/SignIn.component';
import './authentication.styles.scss'

const Authentication = () => {
	return(
		<div className="authentication">
			<SignIn />
		</div>
	)
}

export default Authentication;