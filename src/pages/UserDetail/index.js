import React, { useEffect, useState } from "react";

// RR
import { useParams } from "react-router-dom";
import { getUser } from "../../services/users";

export default function UserDetail() {
	const [user, setUser] = useState({});
	const params = useParams();

	useEffect(() => {
		const get = async () => {
			const response = await getUser(params.userID);
			console.log(response);
			setUser(response);
		};
		get();
	}, [params.userID]);

	return (
		<div className="d-flex justify-content-center bk-color">
		<div  className="card" id={user?.id} style={{width: 25 + 'em'}}>
			<img src={user?.image} className="card-img-top" alt="..."></img>
			<div className="card-body">
				<h4  className="card-title">{user?.firstName} {user?.lastName}</h4>
				<h5 className="card-subtitle mb-2">Occupation: {user?.occupation}</h5>
				<h6 className="card-text">Gender: {user?.gender} </h6>
				<h6 className="card-text">Birthdate: {user?.birthdate} </h6>
			</div>
		</div>
	</div>
	);
}