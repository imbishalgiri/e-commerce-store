import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Cart from '../cart/cart.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../firebase/firebase.utils';

const Header = ({ currentUser, hidden }) => {
	return (
		<div className='header'>
			<Link className='logo__container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className="options">
				<Link className='option' to='/shop'>
					SHOP
				</Link>
			<Link className='option' to='/contact'>
					CONTACT
				</Link>
				{
					currentUser ? 
					<div className="option" onClick={() => auth.signOut() }> Sign Out</div>
					:
					<Link className="option" to='/authentication'>
						Sign In
					</Link>
				}
				<Cart />
			</div>{
			 hidden ? null : <CartDropdown />
			}
		</div>
	)
}

const mapStateToProps = ({ user: {currentUser}, cart: {hidden}}) => ({
	currentUser,
	hidden

})

export default connect(mapStateToProps)(Header);