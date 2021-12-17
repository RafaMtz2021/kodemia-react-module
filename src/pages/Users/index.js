import React, {useEffect,useState} from 'react';
import { getUsers } from "../../services/users";
import ShowUser from "../../components/ShowUser/";
import { Link, Outlet } from "react-router-dom";

function Users() {

  const [user, setUser] = useState([])

  useEffect(() => {  
    const fetchData = async () => {    
      const data = await getUsers()
      console.log(data);
      const arrayUsers = Object.entries(data)
      setUser(arrayUsers)
  }  
    fetchData();
  },[])

  return (
    <>
      <div className="content">
				<h1>Users screen</h1>
				<Outlet />
			</div>
      <div>
        {user.map(users=>{
          console.table(users[1])
          return(
          <ShowUser  
            id={users[0]}
            firstName={users[1].firstName}
            lastName={users[1].lastName}
            occupation={users[1].occupation}
            gender={users[1].gender}
            birthdate={users[1].birthdate}
            image={users[1].image}
          />)
        })}
      </div>
      			<div className="aside">
				<nav className="side-nav">
					<Link className="link" to="">
						List users
					</Link>
					<Link className="link" to="new">
						Create user
					</Link>
				</nav>
			</div>
    </>
  )
}

export default Users;
