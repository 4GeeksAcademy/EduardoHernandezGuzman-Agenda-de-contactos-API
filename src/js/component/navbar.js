import React from "react";
import { Link } from "react-router-dom";
import  { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { actions } = useContext(Context);


	return (

		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<p className="h1 mt-2 mx-2 p-3">AGENDA</p>
					
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav p-2 mx-5">

							<Link to="/">
								<a className="nav-link active" 
								style={{ textDecoration:"none", fontWeight: 'bold', fontSize: 'larger' }}>Añadir contactos</a>
							</Link>

							<Link to="/agenda">
								<a onClick={() => { actions.loadSomeData() }} 
								className="nav-link active" 
								style={{ textDecoration: 'none', fontWeight: 'bold', fontSize: 'larger' }}>Ver contactos</a>
							</Link>

						</div>
					</div>
				</div>
			</nav>
			<hr />
		</>




		// <nav className="navbar  bg-light mb-4 p-5">
		// 	<Link to="/">
		// 		<button className="btn btn-primary">Añadir contactos</button>
		// 	</Link>
		// 	<div className="ml-auto">
		// 		<Link to="/demo">
		// 			<button onClick={() => {actions.loadSomeData()}} className="btn btn-primary">Ver contactos</button>
		// 		</Link>
		// 	</div>
		// </nav>
	);
};
