import React, { useState } from "react";
import "../../styles/home.css";

export const Home = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");


	return (
		<>
			<div className="mb-3">
				<label htmlFor="fullName" className="form-label">Full Name</label>
				<input 
					onChange={(e) => setFullName(e.target.value)}
					value={fullName}
					type="text" 
					className="form-control" 
					id="fullName" 
					placeholder="Enter your full name" 
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">Email</label>
				<input 
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					type="email" 
					className="form-control" 
					id="email" 
					placeholder="Enter your email" 
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="address" className="form-label">Address</label>
				<input 
					onChange={(e) => setAddress(e.target.value)}
					value={address}
					type="text" 
					className="form-control" 
					id="address" 
					placeholder="Enter your address" 
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="phone" className="form-label">Phone</label>
				<input 
					onChange={(e) => setPhone(e.target.value)}
					value={phone}
					type="text" 
					className="form-control" 
					id="phone" 
					placeholder="Enter your phone number" 
				/>
			</div>
			<button 
				onClick={() => {
					store.actions.nuevoContacto();
				}} 
				type="button" 
				className="btn btn-primary"
			>
				Guardar contacto
			</button>
		</>
	);
};
