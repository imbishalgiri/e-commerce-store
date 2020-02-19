import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/homepage/homepage.component';

const HatsPage = () =>(
	<h1>Hats Page</h1>
)

const App = () => {
	return (
		<div>
			<Route exact path='/' component={HomePage} />
		</div>
	)
}

export default App;