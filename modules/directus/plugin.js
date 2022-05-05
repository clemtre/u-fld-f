import { Directus } from '@directus/sdk'

const directusPlugin = async (context, inject) => {
  // const {url} = process.env.DIRECTUS_URL 

  const directus = new Directus('https://porte-secrete.unexploredfields.com')
  

  inject('directus', directus)
}

export default directusPlugin
