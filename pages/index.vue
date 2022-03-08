<template>
<div>
    <transition name="in" mode="out-in">
        <p class="paragraph" v-html="bio.descriptif"></p>
    </transition>
    <section class="site-section projets-section pt-8">

        <!--<img :src="url" alt="">-->

        <ul>
            <nuxt-link v-for="projet in ProjetsData" :key="projet" :to="`/projets/${projet.slug}`">
            <span class="titre" v-html="projet.slug"></span>
                    <span class="titre" v-html="projet.titre"></span>
                        <img :src="url+projet.entete.id+'?height=1280&format=jpg'" alt="">

                <div v-for="media in projet.medias" :key="media" >
                    
                    <img class="uf-mono" src="../static/uf-mono.png">
                    
                    <div class="ctn" v-for="image in media.item.images" :key="image">
                        <img :src="url+image.directus_files_id.filename_disk+'?height=1280&format=jpg'" alt="">
                        <hr> <br>

                    </div>
                </div>
            </nuxt-link>
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
      slug
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

            url: `https://porte-secrete.unexploredfields.com/assets/`

            // "ProjetsData.0.medias.0.item.images.0.directus_files_id.filename_disk"
        }
    },
}
</script>

<style scoped>
.uf-mono {
    display: inline-block;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 64px;
}

.in-enter-active,
.in-leave-active {
    transition: opacity .5s;
}

.in-enter,
.in-leave-active {
    opacity: 0;
}

.titre {
    text-align: center;
    font-size: 32px;
}

.ctn {
    display: flex;
    justify-content: center;
    height: auto;
}

img {

    max-height: 80vh;
    padding-bottom: 32px;
    padding-top: 32px;
}
</style>
