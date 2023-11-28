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


				// setStore({ contacts: [
				// 	{
				// 		full_name: "CAmbiado",
				// 		address: "CAmbiado",
				// 		phone: "CAmbiado",
				// 		email: "rwCAmbiadoe"
				// 	},
				// 	{
				// 		full_name: "nuevo cambio",
				// 		address: "nuevo cambio",
				// 		phone: "nuevo cambio",
				// 		email: "nuevo cambio"
				// 	},

				// ] })


				//Traer los contactos de la agenda
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/miagenda")
					.then((response) => response.json())
					.then((data) => setStore({ contacts: data }))

				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				// var requestOptions = {
				// 	method: 'GET',
				// 	redirect: 'follow'
				//   };

				//   fetch("https://playground.4geeks.com/apis/fake/contact/agenda/miagenda", requestOptions)
				// 	.then(response => response.json())
				// 	.then(data => setStore({ contacts: data }))
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



			// //Editar contacto
			// editUser: async (item, key) => {

			// 	try {

			// 		const store = getStore()

			// 		const data = {
			// 			address: store.inputs.addressInput,
			// 			agenda_slug: "miagenda",
			// 			email: store.inputs.emailInput,
			// 			full_name: store.inputs.nameInput,
			// 			phone: store.inputs.phoneInput
			// 		}

			// 		if (data.email.length == 0) {
			// 			let email = store.agenda[key].email
			// 			data.email = email

			// 		}
			// 		if (data.phone.length == 0) {
			// 			let phone = store.agenda[key].phone
			// 			data.phone = phone

			// 		}
			// 		if (data.full_name.length == 0) {
			// 			let name = store.agenda[key].full_name
			// 			data.full_name = name

			// 		}
			// 		if (data.address.length == 0) {
			// 			let address = store.agenda[key].address
			// 			data.address = address
			// 		}
			// 		let id = item.id

			// 		await fetch(`${apiUrl}/${id}`,
			// 			{

			// 				method: 'PUT',
			// 				headers: {
			// 					'Content-type': 'application/json'
			// 				},
			// 				body: JSON.stringify(data)
			// 			}
			// 		);



			// 	} catch (e) {
			// 		console.log("editUser Function Error ===", e)
			// 	}

			// }


			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
