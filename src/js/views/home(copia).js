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
                setConfirmationMsg("Error saving contact");
            });
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Nombre completo</label>
                <input
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Edward Alexander Crowley"
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
                    placeholder="aleister@crowley.uk"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Dirección</label>
                <input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Inverness IV2 6XT, Reino Unido"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Número de teléfono</label>
                <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="666-66666666-66"
                />
            </div>
            {confirmationMsg && <p>{confirmationMsg}</p>}
            <button
                onClick={() => {
                    nuevoContacto();
                }}
                type="button"
                className="btn btn-primary"
            >
                Guardar contacto
            </button>
        </>
    );
};
