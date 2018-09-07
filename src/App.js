import React, { Component } from "react";
import "./styles/app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" />
						<Route exact path="/auth" />
						<Route exact path="/:user" />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
