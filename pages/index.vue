
<template>
  <main>    
    <site-header />
    <section class="site-section projets-section pt-8">
      <div class="wrapper overflow-x-hidden">
        
        <ul v-if="projets" class="projets">
          <projet-card v-for="projet in projets" :key="projet.id" :projet="projet.attributes" />
        </ul>
        
      </div>
    </section>
    <site-footer />
    
  </main>
</template>

<script>
import SiteFooter from '../components/SiteFooter.vue'
  export default {
  components: { SiteFooter },
    async asyncData({ store }) {
      try {
        const projets = await (await fetch(`${store.state.apiUrl}/projets?populate=*`)).json()
        
        return { projets: projets.data }
      } catch (error) {
        console.log(error)
      }
    },
  }
</script>