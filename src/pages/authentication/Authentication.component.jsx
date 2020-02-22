import React from 'react';

import SignIn from '../../components/signin/SignIn.component';
import Signup from '../../components/signup/Signup.component';
import './authentication.styles.scss'

const Authentication = () => {
	return(
		<div className="authentication">
			<SignIn />
			<Signup />
		</div>
	)
}

export default Authentication;