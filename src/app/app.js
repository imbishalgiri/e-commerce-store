import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shoppage/Shop.component';
import Authentication from '../pages/authentication/Authentication.component';
import Header from '../components/header/Header.component';
import './app.styles.scss';
import { auth, createUserProfileDocument } from '../components/firebase/firebase.utils';
import store from '../redux/store';
import { setCurrentUser } from '../redux/user/user.actions';


class App extends React.Component{

	unsubscribeFromAuth = null

	componentDidMount() {
		// the parameter user of the anonymous function is
		// given by the firebase to see the users 
	    // on the firebase database 
	    const { setCurrentUser } = this.props
		this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
			if (userAuth){
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapshot => {
					setCurrentUser({
							id: snapshot.id,
							...snapshot.data()
						})
				})
				
			}
			setCurrentUser(userAuth)
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render(){
		return (
			<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/authentication' component={Authentication} />
			</Switch>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect( null, mapDispatchToProps )(App);