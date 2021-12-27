import React from "react";
import image from '../../utils/image.jpg'
import Greet from "../../components/Greet";
import Counter from "../../components/Counter";
import List from "../../components/List";

export default function Home() {
	return (
	<>
		<div className="container d-flex">
			<img src={image} alt="..."></img>
			<Greet firstName="Rafa" />
			<Counter />
			<List />
		</div>
	</>
	)}