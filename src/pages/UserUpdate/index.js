import React from "react";
import { useState, useEffect } from "react/cjs/react.development";

// CSS
import "./UserUpdate.css";

// Input
import Input from "../../components/Input";

// Services
import { getUser, updateUser } from "../../services/users";

import { useParams } from "react-router-dom";

export default function UsersUpdate() {
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

	const params = useParams();

	useEffect(() => {
		const get = async () => {
			const { firstName, lastName, gender, occupation, birthdate, image } =
				await getUser(params.userID);
			setFirstName(firstName);
			setLastName(lastName);
			setGender(gender);
			setOccupation(occupation);
			setBirthdate(birthdate);
			setImage(image);
		};
		get();
	}, [params.userID]);


	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const data = {
				firstName,
				lastName,
				gender,
				occupation,
				birthdate,
				image,
			};
			await updateUser(params.userID, data);
			cleanForm();
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className="container flex-col">
			<h1>Update user</h1>
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
				<button className="btn btn-primary ms-5 mt-3" type="submit">Update</button>
			</form>
		</div>
	);
}