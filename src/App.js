import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes/routes'
//import logo from './logo.svg';
//import './App.css';

const App = ({route}) => {
    return (
			<div>
				<ul>
					<Link to='/'>Index</Link>
					<Link to='/counter'>Counter</Link>
				</ul>
				<hr/>
					{renderRoutes(route.routes)}
			</div>
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
    );
}

export default App;
