import "./App.css";

import { Component } from "react";

import { Outlet } from "react-router-dom";

// Components
import AppContainer from "./components/AppContainer";

// function App() {
// 	return (
// 		<AppContainer>
// 			<Outlet />
// 		</AppContainer>
// 	);
// }

class App extends Component {
	render() {
		return (
			<AppContainer>
				<Outlet />
			</AppContainer>
		);
	}
}

export default App;