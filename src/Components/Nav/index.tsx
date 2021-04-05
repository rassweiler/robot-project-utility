import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.global.css';

export default function Nav() {
	return (
		<nav>
			<div className="nav-header">Robot Project Utility</div>
			<ul>
				<NavLink exact activeClassName="active" to="/">
					<li>
						<i className="fa fa-home" />
						Home
					</li>
				</NavLink>
				<NavLink activeClassName="active" to="/robot">
					<li>
						<i className="fa fa-robot" />
						Robot
					</li>
				</NavLink>
				<NavLink activeClassName="active" to="/project">
					<li>
						<i className="fa fa-project-diagram" />
						Project
					</li>
				</NavLink>
				<NavLink activeClassName="active" to="/compare">
					<li>
						<i className="fa fa-not-equal" />
						Compare
					</li>
				</NavLink>
			</ul>
		</nav>
	);
}
