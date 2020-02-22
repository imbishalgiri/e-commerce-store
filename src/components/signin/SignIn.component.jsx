import React from 'react';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';

import FormInput from '../form-input/FormInput.component';
import Button from '../custom-button/Button.component';
import './signin.styles.scss';

class SignIn extends React.Component {
	constructor(props){
		super(props);

		this.state =  {
			email: '',
			password: ''
		}
	}

	handleSubmit = async e => {
		e.preventDefault()
		const { email, password } = this.state

		try {
			await auth.signInWithEmailAndPassword( email, password );
			this.setState({ email: '', password: '' })
		} catch (err) {
			console.log( `error occured is ${err}` )
		}
	}

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value })
	}

	render(){
		return(
			<div className="sign__in">
				<h2>I already have an account</h2>
				<span>sign in with your email and password</span>
				<form onSubmit={ this.handleSubmit }>
					<FormInput
					  id="email"
					  type="email" 
					  name="email" 
					  value={this.state.email}
					  handleChange={ this.handleChange } 
					  label="email"
					  required
					 />
					<FormInput 
					  id="password" 
					  type="password" 
					  name="password" 
					  value={this.state.password} 
					  handleChange={this.handleChange}
					  label="password"
					  required
					 />
					 <div className="button__container">					 	
						<Button type="submit">Sign In</Button>
						<Button onClick={signInWithGoogle} isGoogleSignIn>google</Button>
					 </div>
				</form>
			</div>
		)
	}
}

export default SignIn;