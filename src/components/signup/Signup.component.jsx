import React from 'react';

import './signup.styles.scss';
import FormInput from '../form-input/FormInput.component';
import Button from '../custom-button/Button.component';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

class Signup extends React.Component {
	constructor(){
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if( password !== confirmPassword ) {
			alert("password didn't match")
			return
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password)
			await createUserProfileDocument(user, { displayName })
			this.setState({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
			})
		} catch (error) {
			console.log(error)
		}
	}

	handleChange = event => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="signup">
				<h2 className="title">I don't have Account</h2>
				<span>Sign Up with your email and password</span>
				<form className='sign__up--form' onSubmit={this.handleSubmit}> 
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='Display Name'
						required

					/>
				<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required

					/>
				<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Password'
						required

					/>
				<FormInput
						type='Password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label='Confirm Password'
						required

					/>
					<Button type='submit'>SIGN UP</Button>
				</form>
			</div>
		)
	}
}

export default Signup;