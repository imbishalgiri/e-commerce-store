import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import { auth } from '../firebase/firebase.utils';

const Header = ({ currentUser }) => {
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
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);