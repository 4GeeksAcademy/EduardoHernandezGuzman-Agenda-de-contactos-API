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
					full_name: "rew",
					address: "rew",
					phone: "rwe",
					email: "rwe"
				},
				{
					full_name: "rew",
					address: "rew",
					phone: "rwe",
					email: "rwe"
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
				setStore({ contacts: [
					{
						full_name: "CAmbiado",
						address: "CAmbiado",
						phone: "CAmbiado",
						email: "rwCAmbiadoe"
					},
					{
						full_name: "nuevo cambio",
						address: "nuevo cambio",
						phone: "nuevo cambio",
						email: "nuevo cambio"
					},
	
				] })

				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/miagenda")
				.then((response)=> response.json())
				.then((data)=>setStore({ contacts: data }))

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

			//Crear un nuevo contacto
			nuevoContacto:() => {
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
					.then(result => console.log(result))
			}

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
