import { Directus } from '@directus/sdk';
import Projets from '~/assets/Projets.json'
import Images from '~/assets/Images.json'
import Clients from '~/assets/Clients.json'


//export const pageMixinWithData = (pageSlug = '') => {
export const pageMixinWithData = {
  data() {
    return {
      Projets : Projets.data,
      images: [],
      bio:[]
    }
  },
  mounted() {
    // const clientsRes = Clients.data
    const images = Images.data
    for (const projet of Projets.data) {
      // const client = clientsRes.find(client => projet.client === client.id)
      // projet.nomClient = client.nom

      if (projet.medias.length) {
        for (let media = 0; media < projet.medias.length; media++) {
          const imageRes = images.find(x => x.id === projet.medias[media])
          if (imageRes) {
            projet.medias[media] = imageRes.images.map(x => x.directus_files_id)
          }
        }
      }
    }

    // console.log(Projets.data)

    return {
      Projets: Projets.data
    }
  },
  async fetch() {
    const response = new Directus('https://porte-secrete.unexploredfields.com');

    const projetsRes = await response.items('Projets').readMany()
    // console.log(projetsRes.data)
    const imagesRes = await response.items('Images?fields=*.*').readMany()
    const bioRes = await response.items('bio').readMany()


    const clientsRes = await response.items('Clients').readMany()
    for (const projet of projetsRes.data) {
      const client = clientsRes.data.find(client => projet.client === client.id)
      projet.nomClient = client.nom
      // console.log(projet.medias)

    }
    this.bio = {
      ...bioRes.data
    }
    // this.projets = {
    //   ...projetsRes.data
    
    // }
    // this.images = {
    //   ...imagesRes.data
    // }
    // this.clients = {
    //   ...clientsRes.data
    // }


  }
}