import axios from 'axios'
export const state = () => ({
  ui: [
    { nom: 'images', on: true, val: 100 },
    { nom: 'bio', on: false },
    { nom: 'clients', on: true },
    { nom: 'darkmode', on: true },
    { nom: 'projets', on: true },
  ],
  // isPortrait: window.innerWidth < window.innerHeight || false,
  Projets: [],
  Bio: [],
})

export const getters = {
  getName: (state) => (nom) => {
    return state.ui.find((thing) => thing.nom === nom)
  },
}

const uiIncrSize = 10
function clamp(val, min, max) {
  return val > max ? max : val < min ? min : val
}
export const mutations = {
  INCR(state, data) {
    const val = uiIncrSize * data[1]
    data[0].val = clamp(data[0].val + val, 10, 100)
  },
  SWITCH(state, data) {
    data.on = !data.on
  },
  DARKMODE_INIT(state, data) {
    data = this.$colorMode.preference
  },
  SORT_FETCH(state, data) {
    for (const projet of data.Projets.data) {
      
      projet.client = data.Clients.data.find((x) => x.id === projet.client).nom
      const regex = /https:\/\/u-.*?(?=\?)/gm



      if (projet.corps) {
        projet.corps = projet.corps.replaceAll(
          this.$config.apiUrl,
          `${this.$config.CDN}image/fetch/w_500,h_500,c_limit/${this.$config.apiUrl}`
        )
      }
      projet.images = []
      const str = projet.corps
      let m

      while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
          regex.lastIndex++
        }

        m.forEach((match, groupIndex) => {
          //console.log(`Found match, group ${groupIndex}: ${match}`)
          projet.images = [...projet.images, match]
        })
      }

      projet.titre = projet.titre.replace('<p>', '').replace('</p>', '')
    }
    state.Bio = data.Bio.data
    state.Projets = data.Projets.data
      .filter((projet) => projet.featured === true)
      .reverse()
  },
}
export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const Projets = await axios.get(`${this.$config.apiUrl}items/Projets`)
      const Clients = await axios.get(`${this.$config.apiUrl}items/Clients`)
      // const Images = await axios.get(`${this.$config.apiUrl}items/Images?fields=*.*`)
      const Bio = await axios.get(`${this.$config.apiUrl}items/Bio?fields=*.*`)
      const Files = await axios.get(`${this.$config.apiUrl}files`)

      commit('SORT_FETCH', {
        Projets: Projets.data,
        Clients: Clients.data,
        Bio: Bio.data,
        Files: Files.data,
      })
    } catch (error) {
      console.log('error', error)
    }
    // console.log(this.$colorMode.preference)

    // commit('DARKMODE_INIT', state.ui.)
  },
}
