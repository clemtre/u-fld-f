<template>
  <li class="projet">
      <nuxt-link :to="`/projets/${projet.slug}`">

    

    <div
      class="w-screen h-[50vh] relative group">
      <img class="w-full object-cover h-full" v-if="coverImageUrl" :src="coverImageUrl" alt="">

      <header class="absolute bottom-0 bg-white w-full p-2 opacity-0 group-hover:opacity-100 group-hover:transition-all">
      <h1 class="text-xl md:text-3xl font-regular">{{projet.titre}}</h1>
      <h1 v-html="$md.render(projet.intro)"></h1>

      <!--<p class="text-gray-600 text-sm mb-2">{{ projetCategories }}</p>-->
    </header>
    </div>
      </nuxt-link>

  </li>
</template>

<script>
  export default {
    props: ['projet'],
    computed: {
      coverImageUrl(){
        const url = this.$store.state.url
        const imagePath = this.projet.couverture.data[0].attributes.formats.large.url
        return url + imagePath
      }
      
    }
  }
</script>

<style scoped>

</style>