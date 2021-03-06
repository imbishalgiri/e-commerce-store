import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './app.styles.scss';
import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shoppage/Shop.component';
import Authentication from '../pages/authentication/Authentication.component';
import Header from '../components/header/Header.component';
import CheckoutPage from '../pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from '../components/firebase/firebase.utils';
import store from '../redux/store';
import { setCurrentUser } from '../redux/user/user.actions';
import { selectCurrentUser } from '../redux/user/user.selectors';


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
		console.log('i am a prop in this app')
		console.log(this.props)
		return (
			<div>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/checkout' component={CheckoutPage} />
				<Route exact path='/authentication' render={ () => this.props.currentUser ?  (<Redirect to='/' />) : (<Authentication />)} 
				/>
			</Switch>
			</div>
		)
	}
}
const mapStateToProps =createStructuredSelector({
	currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect( mapStateToProps, mapDispatchToProps )(App);