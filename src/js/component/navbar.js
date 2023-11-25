import React from "react";
import { Link } from "react-router-dom";
import  { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { actions } = useContext(Context);


	return (
		<nav className="navbar navbar-light bg-light mb-4 p-5">
			<Link to="/">
				<button className="btn btn-primary">Añadir contactos</button>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button onClick={() => {actions.loadSomeData()}} className="btn btn-primary">Ver contactos</button>
				</Link>
			</div>
		</nav>
	);
};
