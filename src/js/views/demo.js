import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	

	return (
		<div className="container">
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (

						<>
							<li
								key={index}
								className="list-group-item d-flex justify-content-between">
								<div >
									{item.full_name}
									<br />
									{item.address}
									<br />
									{item.phone}
									<br />
									{item.email}
								</div>
								<button className="btn btn-danger" onClick={() => {actions.borrarContacto(item.id)}}>Eliminar contacto</button>

							</li>
							
						</>
					);
				})}
			</ul>
			{/* <button className="btn btn-danger" onClick={()=> actions.borrarTodosLosContactos()}>Borrar todos los contactos</button> */}

			{/* <ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul> */}
			<br />
			<Link to="/">
				<button className="btn btn-primary">Añadir contacto</button>
			</Link>
		</div>
	);
};