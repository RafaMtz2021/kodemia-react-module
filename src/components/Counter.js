import React, { Component } from "react";

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		console.log("Se ejecuta la primera vez");
	}

	componentDidUpdate() {
		console.log("Se ejecuta cuando se actualiza");
	}

	componentWillUnmount() {
		console.log("Se ejecuta cuando se desmota");
	}

	handleClick(event) {
		// console.log(this, "click");x
		this.setState({
			counter: this.state.counter + 1,
		});
	}

	render() {
		// console.log(this, "render");
		return (
			<div>
				<p>{this.state.counter}</p>
				<button onClick={this.handleClick}>Increase</button>
			</div>
		);
	}
}
export default Counter;