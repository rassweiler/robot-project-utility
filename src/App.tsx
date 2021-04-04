import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import '@fortawesome/fontawesome-free/js/all';
import Home from './Containers/Home';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="" exact component={Home} />
			</Switch>
		</Router>
	);
}
