import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shoppage/Shop.component';
import Authentication from '../pages/authentication/Authentication.component';
import Header from '../components/header/Header.component';
import './app.styles.scss';
import { auth } from '../components/firebase/firebase.utils';


class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			currentUser: null
		} 
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		// the parameter user of the anonymous function is
		// given by the firebase to see the users 
	    // on the firebase database 
		this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
			this.setState({currentUser: user})
			console.log(user);
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render(){
		return (
			<div>
			<Header currentUser={this.state.currentUser} />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/authentication' component={Authentication} />
			</Switch>
			</div>
		)
	}
}

export default App;