import React from "react";
import { useState } from "react/cjs/react.development";

// CSS
import "./UsersNew.css";

// Input
import Input from "../../components/Input";

// Services
import { createUser } from "../../services/users";

export default function UsersNew() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [gender, setGender] = useState("");
	const [occupation, setOccupation] = useState("");
	const [birthdate, setBirthdate] = useState("");
	const [image, setImage] = useState("");

	const cleanForm = () => {
		setFirstName("");
		setLastName("");
		setGender("");
		setOccupation("");
		setBirthdate("");
		setImage("")
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if([firstName,lastName,gender,occupation,birthdate,image].includes('')){
			alert('Todos los campos son obligatorios')
		}else{
			console.log('todos los campos llenos')
			try {
				const data = {
					firstName,
					lastName,
					gender,
					occupation,
					birthdate,
					image,
				};
				await createUser(data);
				cleanForm();
				alert('user created!')
			} catch (error) {
				console.error(error.message);
			}
		}

	};

	return (
		<div className="container flex-col">
			<h1>Create new user</h1>
			<form onSubmit={handleSubmit}>
				<Input
					id="firstName"
					label="First Name"
					value={firstName}
					setValue={setFirstName}
				/>
				<Input
					id="lastName"
					label="Last Name"
					value={lastName}
					setValue={setLastName}
				/>
				<Input id="gender" label="Gender" value={gender} setValue={setGender} />
				<Input
					id="occupation"
					label="Occupation"
					value={occupation}
					setValue={setOccupation}
				/>
				<Input
					id="birthdate"
					type="date"
					label="Birthdate"
					value={birthdate}
					setValue={setBirthdate}
				/>
				<Input
					id="image"
					type="text"
					label="image"
					value={image}
					setValue={setImage}
				/>
				<button className="btn btn-primary ms-5 mt-3" type="submit">Create</button>
			</form>
		</div>
	);
}