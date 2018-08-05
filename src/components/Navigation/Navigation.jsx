import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from '../../components/App/App.jsx';
import Timer from '../../components/Timer/Timer.jsx';

const history = createBrowserHistory();

class Navigation extends React.Component {
	render(){
		return (
			<Router history={history} >
				<div className="site">
					<nav className="navigation">
						<Link className='navigation__link' to='/'>Home</Link>
						<Link className='navigation__link' to='/news'>News</Link>
						<Link className='navigation__link' to='/timer'>Timer</Link>
					</nav>

					<hr/>

					<Route exact path='/' />
					<Route exact path='/news' component={App} />
					<Route exact path='/timer' component={Timer}/>
				</div>
			</Router>
		)
	}
}

module.exports = Navigation;