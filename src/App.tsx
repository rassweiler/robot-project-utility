import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import '@fortawesome/fontawesome-free/js/all';
import Nav from './Components/Nav';
import Home from './Containers/Home';
import Robot from './Containers/Robot';
import Project from './Containers/Project';
import Compare from './Containers/Compare';

export default function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route path="/robot" component={Robot} />
				<Route path="/project" component={Project} />
				<Route path="/compare" component={Compare} />
				<Route path="/" exact component={Home} />
				<Route path="" exact component={Home} />
			</Switch>
		</Router>
	);
}
