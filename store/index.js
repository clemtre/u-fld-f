import axios from 'axios'
export const state = () => ({
	tasks: [],
	db: []
})

export const mutations = {
	ADD_TASK(state, task) {
		state.tasks = [{ content: task, done: false }, ...state.tasks]
	},
	REMOVE_TASK(state, task) {
		state.tasks.splice(state.tasks.indexOf(task), 1)
	},
	TOGGLE_TASK(state, task) {
		task.done = !task.done
	},
	SET_USERS(state, data) {
		state.db = data
	},
	SORT_FETCH(state, data){
		for (const projet of data.Projets.data) {
				const nomClient = data.Clients.data.find((x) => x.id === projet.client);
				projet.nomClient = nomClient.nom;
				if (projet.medias.length) {
					for (let media = 0; media < projet.medias.length; media++) {
						const imageRes = data.Images.data.find((x) => x.id === projet.medias[media]);
						if (imageRes) {
							projet.medias[media] = imageRes.images.map(
								(x) => x.directus_files_id
							);
						}
					}
				}
		}
		state.db = data.Projets.data
	}

}
export const actions = {
	async nuxtServerInit({ commit }) {
		try {
			const Projets = await axios.get('https://porte-secrete.unexploredfields.com/items/Projets')
			const Clients = await axios.get('https://porte-secrete.unexploredfields.com/items/Clients')
			const Images = await axios.get('https://porte-secrete.unexploredfields.com/items/Images?fields=*.*')

			commit('SET_USERS', Projets.data)
			commit('SORT_FETCH', {Projets : Projets.data, Clients : Clients.data, Images: Images.data})
		}
		catch (error) {
			console.log('error', error)
		}
	}
}