import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";



import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Agenda = () => {
	const { store, actions } = useContext(Context);


	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");


	return (
		<div className="container">
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					console.log(item)
					return (

						<div key={index} >
							<div className=" col-lg-1 col-md-3 col-sm-6 d-flex iconsContainer " >

								<button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#editUser${index}`}>
									<svg data-bs-target={`#editUser${index}`} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
										<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
									</svg>

								</button>

							</div>


							<div className="modal fade" id={`editUser${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<h1 className="modal-title fs-5" id="staticBackdropLabel">Edita tu contacto</h1>
											<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => location.reload(true)}></button>
										</div>


										<div className="modal-body">


											<div className="mb-3">
												<label className="form-label">Full eName</label>
												<input type="text" placeholder="Full Name" className="form-control editModal" defaultValue={item.full_name} onChange={(event) => setFullName(event.target.value)} required />
											</div>

											<div className="mb-3">
												<label className="form-label">Email</label>
												<input type="text" placeholder="Email" className="form-control editModal" defaultValue={item.email} onChange={(event) => setEmail(event.target.value)} required />
											</div>

											<div className="mb-3">
												<label className="form-label">Phone</label>
												<input type="text" placeholder="Phone" className="form-control editModal" defaultValue={item.phone} onChange={(event) => setPhone(event.target.value)} required />
											</div>

											<div className="mb-3">
												<label className="form-label">Address</label>
												<input type="text" placeholder="Address" className="form-control editModal" defaultValue={item.address} onChange={(event) => setAddress(event.target.value)} required />
											</div>

											<div className="d-flex">
												<button style={{ margin: "1rem" }} type="button" className="btn btn-secondary w-50" data-bs-dismiss="modal" onClick={() => location.reload(true)}>Cancelar</button>
												<button style={{ margin: "1rem" }} onClick={() => actions.editUser(item.id, fullName, phone, address, email)} className="btn btn-primary w-50">Guardar</button>
											</div>


										</div>
									</div>
								</div>
							</div>







							<li
								key={index}
								className="list-group-item d-flex ">





								<div><svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" className="mx-5 mt-2 bi bi-person-lines-fill" viewBox="0 0 16 16">
									<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
								</svg></div>

								<div className="ml-5" >

									<p className="h4">{item.full_name}</p>

									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
										<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
									</svg><span className="mx-2">{item.address}</span>

									<br />

									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
										<path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
									</svg><span className="mx-2">{item.phone}</span>

									<br />

									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
										<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
									</svg><span className="mx-2">{item.email}</span>
								</div>

								<button style={{ marginLeft: "auto" }} className="btn btn-danger" onClick={() => { actions.borrarContacto(item.id) }}>Eliminar contacto</button>

							</li>

						</div>
					);
				})}
			</ul>
			<button
				style={{ marginTop: "3rem", width: "14rem", height: "5rem", marginBottom: "3rem" }}
				className="btn btn-danger"
				onClick={() => actions.borrarTodosLosContactos()}>
				<span><svg style={{ marginBottom: "0.5rem" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
					<path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
					<path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
				</svg>
				</span>
				<h6>Borrar todos los contactos</h6>
			</button>
		</div>
	);
};