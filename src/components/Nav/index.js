import React, { useState } from "react";

// Styles
import "./Nav.css";

function Nav() {
	const [active, setActive] = useState(0);

	const handleClick = (itemID) => {
		setActive(itemID);
	};

	const checkActive = (itemID) => (active === itemID ? "li-active"  : "");

	const msgActive1 = (itemID) => (active === itemID ? "Kodemia"  : "");
	const msgActive2 = (itemID) => (active === itemID ? "Bootcamp JS"  : "");
	const msgActive3 = (itemID) => (active === itemID ? "Rafael Martínez"  : "");

	return (
		<div>
			<ul>
				<li className={checkActive(1)} onClick={() => handleClick(1)}>
					Item 1 		{msgActive1(1)} 
				</li>
				<li className={checkActive(2)} onClick={() => handleClick(2)}>
					Item 2 		{msgActive2(2)} 
				</li>
				<li className={checkActive(3)} onClick={() => handleClick(3)}>
					Item 3		{msgActive3(3)} 
				</li>
			</ul>
		</div>
	);
}

export default Nav;