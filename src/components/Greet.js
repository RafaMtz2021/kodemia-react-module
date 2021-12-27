import React, { Component } from "react";

class Greet extends Component {
	render() {
		console.log(this.props);
		return <div>Hola {this.props?.firstName}</div>;
	}
}

export default Greet;