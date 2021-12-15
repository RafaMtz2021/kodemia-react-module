import "./App.css";
import { useState } from "react";
import chip from './chip.JPG'
import visa from './visa.JPG'

function App() {
	const [creditCardNumber, setCreditCardNumber] = useState('');
	const [name, setName] = useState('');
  const [valid, setValid] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);
	};

	return (
		<div className="container">
			<form className="form" onSubmit={handleSubmit}>
				<div className="flex">
					<input
						id="creditCardNumber"
						placeholder={'Credit Card Number'}
						onChange={(e) => setCreditCardNumber(e.target.value)}
						value={creditCardNumber}
					/>
				<div>
					<input
						type={"text"}
						id="name"
						placeholder={'Name'}
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</div>
          <input
						type={"text"}
						id="valid"
						placeholder={'Valid thru: mm/yy'}
						onChange={(e) => setValid(e.target.value)}
						value={valid}
					/>
				</div>
			</form>
      <div className="card ms-4 bk rounded-3" style={{width: 22 + 'em' , height: 13 + 'em'}} >
				<div className="d-flex justify-content-between">
					<img src={chip} width="40" height="40" className="img-thumbnail m-2" alt='chip'></img>
					<img src={visa} width="80" height="50" className="img-thumbnail m-2" alt='visa'></img>
				</div>
      	<div className="card-body">
        	<h5 className="card-title text-white mb-4">Number: {creditCardNumber}</h5>
        	<h5 className="card-title text-white mb-4">Name: {name.toUpperCase()}</h5>
        	<p className="card-title  text-white">Valid thru: {valid}</p>
      	</div>
			</div>
		</div>
	);
}

export default App;