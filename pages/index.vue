<template>
  <div>
    <site-header class="header" 
    :bio="bio" 
    :projetSwitch="projetSwitch"
    :darkSwitch="darkSwitch"
    @listToggle="listToggle"
    @darkToggle="darkToggle"
     />
    <section class="main">
      <table v-if="!projetSwitch" id="table-main">
        <table-entry
          v-for="projet in Projets"
          :key="projet.id"
          :projet="projet"
          :to="`/projets/${projet.slug}`"
        />
      </table>
      <section v-if="projetSwitch">
        <projet-card
          class="projet"
          v-for="projet in Projets"
          :key="projet.id"
          :projet="projet"
          :to="`/projets/${projet.slug}`"
        />
      </section>
    </section>

    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import TableEntry from '~/components/TableEntry.vue'
import ProjetCard from '~/components/ProjetCard.vue'
import SiteFooter from '~/components/SiteFooter.vue'

import { pageMixinWithData } from '~/mixins/page.mixin'

export default {
  mixins: [pageMixinWithData],

  data() {
    return {
      projetSwitch: true,
      darkSwitch: true,
    }
  },
  methods:{
    listToggle : function(){
      this.projetSwitch = !this.projetSwitch
    },
    // { $colorMode }
    darkToggle : function(){
      this.darkSwitch = !this.darkSwitch

      // devrait marcher mais non 
      // this.darkSwitch ? this.$colorMode.preference = 'dark' : 'light'

      if(this.darkSwitch){
        this.$colorMode.preference = 'dark'
      }
      else {
        this.$colorMode.preference = 'light'
      }
      console.log(this.darkSwitch, this.$colorMode.preference)
    },
  },

  components: {
    SiteHeader,
    TableEntry,
    ProjetCard,
    SiteFooter,
  },

  

}
</script>

<style scoped>
#lettrage {
  width: 100%;
  image-rendering: crisp-edges;
}

.header {
  pointer-events: all;
  z-index: 10000;
}

.main {
  margin-top: 64px;
  min-height: 100vh;
}
.main:hover {
  pointer-events: all;
}
.uf-logo {
  display: inline;
}

table {
  width: calc(min(100%, 960px));
  border-collapse: collapse;
  height: fit-content;
  margin-bottom: 18px;
  margin-left: 50%;
  transform: translateX(-50%);
}

.debug {
  border: 1px solid red;
}

.in-enter-active,
.in-leave-active {
  transition: opacity 0.5s;
}

.in-enter,
.in-leave-active {
  opacity: 0;
}
body {
  background-color: black;
}
</style>
