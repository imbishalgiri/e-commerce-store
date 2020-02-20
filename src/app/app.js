import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shoppage/Shop.component';
import './app.styles.scss';

const HatsPage = () =>(
	<h1>Hats Page</h1>
)

const App = () => {
	return (
		<div>
			<Route exact path='/' component={HomePage} />
			<Route exact path='/shop' component={ShopPage} />
		</div>
	)
}

export default App;