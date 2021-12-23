import React, { useEffect, useState } from "react";

// RR
import { useNavigate, useParams, Outlet } from "react-router-dom";
import { getUser } from "../../services/users";
import { deleteUser } from "../../services/users";


export default function UserDetail() {
	const [user, setUser] = useState({});
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const get = async () => {
			const response = await getUser(params.userID);
			setUser(response);
		};
		get();
	}, [params.userID]);


	async function handleDelete  () {
		try {
			await deleteUser(params.userID)
			navigate("/users")
		} catch (error) {
			console.error(error)
		}
}

	return (
		<div className="d-flex justify-content-center bk-color">
		<div  className="card" id={user?.id} style={{width: 25 + 'em'}}>
			<img src={user?.image} className="card-img-top" alt="..."></img>
			<div className="card-body">
				<h4  className="card-title">{user?.firstName} {user?.lastName}</h4>
				<h5 className="card-subtitle mb-2">Occupation: {user?.occupation}</h5>
				<h6 className="card-text">Gender: {user?.gender} </h6>
				<h6 className="card-text">Birthdate: {user?.birthdate} </h6>
				<span onClick={() => navigate("update")} title="edit" style={{cursor: 'pointer'}}>📝</span>
				<span onClick={() => handleDelete()} className="ms-3" title="delete" style={{cursor: 'pointer'}}>❌</span>
				<Outlet />
			</div>
		</div>
	</div>
	);
}