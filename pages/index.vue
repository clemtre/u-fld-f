<template>
<div>
    <section class="site-section projets-section pt-8">

        <!--<img :src="url" alt="">-->

        <ul v-for="projet in ProjetsData" :key="projet">
            <li v-for="media in projet.medias" :key="media">
                <div v-for="image in media.item.images" :key="image">
                    <img :src="url+image.directus_files_id.filename_disk" alt="">
                    <hr> <br>

                </div>
            </li>

        </ul>

    </section>
</div>
</template>

<script>
import {
    gql
} from 'graphql-tag'

export default {
    async asyncData({
        $graphql
    }) {
        const query = gql `
query homeData{
	Projets {
      titre
      date
      id
      medias {
      item{
        ...on Images {
          ordre
          images{
            directus_files_id{
              filename_disk
              }
            }            
        }
      }
    }
    
  }
}
    `
        const uri = '3b3d21a6-153e-45f0-9ad7-eb527f99f81a.png'
        const {
            Projets
        } = await $graphql.default.request(query)

        return {
            ProjetsData: {
                ...Projets,

            },
            url: `https://porte-secrete.unexploredfields.com/assets/`

            // "ProjetsData.0.medias.0.item.images.0.directus_files_id.filename_disk"
        }
    },
}
</script>
