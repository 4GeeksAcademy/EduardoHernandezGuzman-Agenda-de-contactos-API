import React, { useState } from "react";
import "../../styles/home.css";

export const Home = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmationMsg, setConfirmationMsg] = useState("");


    // Creación de un nuevo contacto
    function nuevoContacto() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "full_name": fullName,
            "email": email,
            "agenda_slug": "miagenda",
            "address": address,
            "phone": phone
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://playground.4geeks.com/apis/fake/contact/", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setConfirmationMsg("Tu contacto ha sido guardado correctamente");
                // Limpiar los campos después de 2 segundos
                setTimeout(() => {
                    setFullName("");
                    setEmail("");
                    setAddress("");
                    setPhone("");
                    setConfirmationMsg("");
                }, 2000);
            })
            .catch(error => {
                console.error('Error saving contact:', error);
                setConfirmationMsg("Error al guardar el contacto");
            });
    }


    return (
		<>
			<div className="m-5 p-3 bg-body-tertiary rounded-3 col-8">

				<h1 className="text-body-emphasis mb-5 display-6">Formulario para añadir contactos</h1>
				<div className="mb-4 col-6">
					<label htmlFor="fullName" className="form-label h6">Nombre completo</label>
					<input
						onChange={(e) => setFullName(e.target.value)}
						value={fullName}
						type="text"
						className="form-control"
						id="fullName"
						placeholder="Edward Alexander Crowley" />
				</div>

				<div className="mb-4 col-6">
					<label htmlFor="email" className="form-label h6">Email</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						type="email"
						className="form-control"
						id="email"
						placeholder="aleister@crowley.uk" />
				</div>

				<div className="mb-4 col-6">
					<label htmlFor="address" className="form-label h6">Dirección</label>
					<input
						onChange={(e) => setAddress(e.target.value)}
						value={address}
						type="text"
						className="form-control"
						id="address"
						placeholder="Inverness IV2 6XT, Reino Unido"/>
				</div>

				<div className="mb-4 col-6">
					<label htmlFor="phone" className="form-label h6">Número de teléfono</label>
					<input
						onChange={(e) => setPhone(e.target.value)}
						value={phone}
						type="text"
						className="form-control"
						id="phone"
						placeholder="666-66666666-66" />
				</div>

				<div className="d-inline-flex gap-2">
					<button
						style={{marginTop:"3rem"}}
						onClick={() => { nuevoContacto(); }}
						className="btn btn-outline-secondary btn-lg px-4 rounded-3"
						type="button">
						Guardar contacto
					</button>

				</div>
				<div className="container text-center">
					<div className="row align-items-start">
						<div className="col-3">
							{confirmationMsg && <div style={{ height: "5rem", marginTop:"3rem" }} className="alert alert-success d-flex align-items-center" role="alert">
								<div>
									{confirmationMsg}
								</div>
							</div>}
						</div>
					</div>
				</div>
			</div>
		</>
    );
};
