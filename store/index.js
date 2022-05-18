import axios from 'axios'
export const state = () => ({
	ui: [
		{nom : 'images', on : true, val : 100},
		{nom : 'bio', on : true},
		{nom : 'clients', on : true},
		{nom : 'darkmode', on : true},
		{nom : 'projets', on : true}
	]
	,
	Projets: [],
	Bio: [],

})

export const getters = {
	getName: (state) => (nom) => {
		return state.ui.find(thing => thing.nom === nom)
		
	},
}

const uiIncrSize = 10 

export const mutations = {
	INCR(state, data){
		data.val < 100 ? data.val += uiIncrSize : data.val = data.val
	},
	DECR(state, data){
		data.val > 0 ? data.val -= uiIncrSize : data.val = data.val

	},
	SWITCH(state, data){
		data.on = !data.on
	},
	DARKMODE_INIT(state,data){
		data = this.$colorMode.preference
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
		state.Bio = data.Bio.data
		state.Projets = data.Projets.data.reverse().filter(projet => projet.featured  === true)
	}

}
export const actions = {
	async nuxtServerInit({ commit }) {
		try {
			const Projets = await axios.get('https://porte-secrete.unexploredfields.com/items/Projets')
			const Clients = await axios.get('https://porte-secrete.unexploredfields.com/items/Clients')
			const Images = await axios.get('https://porte-secrete.unexploredfields.com/items/Images?fields=*.*')
			const Bio = await axios.get('https://porte-secrete.unexploredfields.com/items/bio')


			commit('SORT_FETCH', {Projets : Projets.data, Clients : Clients.data, Images: Images.data, Bio: Bio.data})
		}
		catch (error) {
			console.log('error', error)
		}
		console.log(this.$colorMode.preference)
		// commit('DARKMODE_INIT', state.ui.)

		
	}
}