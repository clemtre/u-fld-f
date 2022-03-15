<template>
<div>

    <site-header :show="show" />
    

    <table v-if="show.flag" id="table-main">
        <table-entry v-for="projet in ProjetsData" :key="projet.id" :projet="projet" />
    </table>

    <section v-if="!show.flag">
        <projet-card class="projet" v-for="projet in ProjetsData" :key="projet.id" :projet="projet" />
    </section>
</div>
</template>

<script>
import {
    gql
} from 'graphql-tag'
import SiteHeader from '~/components/SiteHeader.vue'
import TableEntry from '~/components/TableEntry.vue'
import ProjetCard from '~/components/ProjetCard.vue'

export default {
    data() {
        return {
            show: {
                flag: true,
                list: 'list',
                feed: 'feed'

            }

        }

    },
    components: {
        SiteHeader,
        TableEntry,
        ProjetCard
    },
    async asyncData({
        $graphql
    }) {
        const query = gql `
query homeData{
	Projets {
      titre
      date
      id
      slug
      client {
          nom
        }
      entete {
          id
      }
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
  bio {
        descriptif
    }
}
    `
        const {
            Projets,
            bio
        } = await $graphql.default.request(query)
        bio.descriptif = bio.descriptif.replace(/(<\/([^>]+)>)/gi, "<br>").replace(/(<p>)/gi, "");
        return {
            ProjetsData: {
                ...Projets,
            },
            bio,

            url: `https://porte-secrete.unexploredfields.com/assets/`,

            // "ProjetsData.0.medias.0.item.images.0.directus_files_id.filename_disk"
        }
    },
}
</script>

<style scoped>
.uf-logo {
    display: inline;
}

table {
    width: 100%;
    border-collapse: collapse;
    height: fit-content;
    margin-bottom: 18px;

}

.debug {
    border: 1px solid red;

}

.in-enter-active,
.in-leave-active {
    transition: opacity .5s;
}

.in-enter,
.in-leave-active {
    opacity: 0;
}
</style>
