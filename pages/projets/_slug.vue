<template>
<!-- pages/projets/_slug.vue -->
<main>
    <site-header :show="show" />

    {{projet.titre}}


</main>
</template>

<script >
import {
    gql
} from 'graphql-tag'
import Vue from 'vue'

export default {
    async asyncData({
        $graphql, params
    }) {
        const query = gql `
 query detailData($filter: Projets_filter) {
        Projets(limit: 1, filter: $filter) {
          titre
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
      }}
}
      }
        `

        const { Projets } = await $graphql.default.request(query, {
          filter: {
            slug: {
              _eq: params.slug
            },
          },
        })

        const projet = {
          ...Projets[0]
        }


    
        return {
          projet,
        }
    }

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
