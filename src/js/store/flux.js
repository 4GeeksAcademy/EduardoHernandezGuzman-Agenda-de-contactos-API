const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}

			// ],
			contacts: [
				{
					full_name: "",
					address: "",
					phone: "",
					email: ""
				},
				{
					full_name: "",
					address: "",
					phone: "",
					email: ""
				},

			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			loadSomeData: () => {





			//Traer los contactos de la agenda
			fetch("https://playground.4geeks.com/apis/fake/contact/agenda/miagenda")
				.then((response) => response.json())
				.then((data) => setStore({ contacts: data }))


			},

			//Borrar un contacto de la agenda
			borrarContacto: (indexABorrar) => {

				var requestOptions = {
					method: 'DELETE',
					redirect: 'follow'
				};

				fetch("https://playground.4geeks.com/apis/fake/contact/" + indexABorrar, requestOptions)
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))

				setTimeout(() => { location.reload(); }, 1000); //Tengo que buscar solución para este mal arreglo



			},

			//Borrar TODOS los contactos de la agenda
			borrarTodosLosContactos: () => {

				var requestOptions = {
					method: 'DELETE',
					redirect: 'follow'
				};

				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/miagenda", requestOptions)
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
				setTimeout(() => { location.reload(); }, 1000); //Tengo que buscar solución para este mal arreglo
			},

			//Editar contacto de la agenda
			editUser: (contact_id, fullName, phone, address, email) => {
				console.log("Editando desde flux");

				// Obtener los valores actualizados del formulario
				const updatedItem = {
					address: address,
					agenda_slug: "miagenda",
					email: email,
					full_name: fullName,
					phone: phone,

				};

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify(updatedItem);

				var requestOptions = {
					method: 'PUT',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://playground.4geeks.com/apis/fake/contact/" + contact_id, requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));
			},


		}
	};
};

export default getState;
