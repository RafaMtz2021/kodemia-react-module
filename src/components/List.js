import React, { Component } from "react";
import "./List.css";

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 1,
		};

		this.handleClick = this.handleClick.bind(this);
    this.checkActive = this.checkActive.bind(this);
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


  handleClick (itemID) {
		this.setState({
      active: itemID
    });
	};

  checkActive (itemID) {
    if(this.state.active === itemID){
			return "li-active"
		}else{
			return ""
		}
  }

	render() {
		return (
      <div>
			<ul>
				<li className={this.checkActive(1)} onClick={() => this.handleClick(1)}>
					Item 1
				</li>
				<li className={this.checkActive(2)} onClick={() => this.handleClick(2)}>
					Item 2
				</li>
				<li className={this.checkActive(3)} onClick={() => this.handleClick(3)}>
					Item 3
				</li>
				<li className={this.checkActive(4)} onClick={() => this.handleClick(4)}>
					Item 4
				</li>
			</ul>
		</div>
		);
	}
}
export default List;