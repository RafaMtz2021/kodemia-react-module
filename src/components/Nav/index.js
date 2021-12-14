import React, { useState, useEffect } from "react";
// Styles
import "./Nav.css";

function Nav() {
	const [content, setContent] = useState([])

	useEffect(() => {
		const getUsers = async () => {
			const response = await fetch("users.json")
			console.table(response);
			const _content = await response.json()
			console.log(_content);
			setContent(_content)
		}
		getUsers()
	}, []);

	

	const [active, setActive] = useState(0);

	const handleClick = (itemID) => {
		setActive(itemID);
	};

	const checkActive = (itemID) => (active === itemID ? "li-active" : "");

	let message = "";
	switch (active) {
		case 1:
			message = content[0].tag;
			break;
		case 2:
			message = content[1].tag;
			break;
		case 3:
			message = content[2].tag;
			break;
		case 4:
			message = content[3].tag
			break;
		default:
			message = "No message"
			break;
	}

	return (
		<div>
			<ul>
				<li className={checkActive(1)} onClick={() => handleClick(1)}>
					Item 1
				</li>
				<li className={checkActive(2)} onClick={() => handleClick(2)}>
					Item 2
				</li>
				<li className={checkActive(3)} onClick={() => handleClick(3)}>
					Item 3
				</li>
				<li className={checkActive(4)} onClick={() => handleClick(4)}>
					Item 4
				</li>
			</ul>
			<div>
				<h1>{message}</h1>
			</div>

		</div>
	);
}

export default Nav;