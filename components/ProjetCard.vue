<template >
  <nuxt-link :to="`/projets/${projet.slug}`" v-if="projet.entete">
    <div class="ctn-projet" v-bind:class="{ 'projetIndex' : isIndexCheck || !this.getName('images').on}">
    <img
      v-bind:style="{ width: `${this.getName('images').val}%` }"
      v-if="this.getName('images').on"
      :src="url + projet.entete + qual"
      alt=""
    />
    <div class="texte" v-bind:class="{ 'texteIndex' : isIndexCheck || !this.getName('images').on }">
      <p class="titre">{{ projet.titre | stripHTML }}</p>

      <p class="sous-titre" v-html="projet.date + ' • ' + projet.nomClient"></p>
      <!-- <uf-logo class="uf-mono" size="32px" color="" /> -->
    </div>
    </div>
    <hr v-if="isIndexCheck || !this.getName('images').on" />
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isIndex: false,
      thresholdIndex: 50,
      url: 'https://porte-secrete.unexploredfields.com/assets/',
      qual: '?quality=80&width=1920&withoutEnlargement',
    }
  },
  props: ['projet'],
  computed: {
    isIndexCheck : function() {
      return this.getName('images').val < this.thresholdIndex
    },
    ...mapGetters({
      getName: 'getName',
    }),
  },
}
</script>
<style scoped>
.texteIndex p {
}
.uf-mono {
  margin-top: calc(var(--gutter) * 2 - 2px);
  transform: translateY(2px);
}
.texte {
  margin-top: var(--gutter);
  margin-bottom: calc(var(--gutter) * 4);
  text-align: center;
  z-index: 1000;
  left: var(--gutter);
  position: static;
}


nuxt-link,
a {
  text-decoration: none;
  padding: 0;
  margin: 0;
}

nuxt-link:hover {
  cursor: pointer;
  pointer-events: none;
}
nuxt-link:hover * {
  pointer-events: all;
}

a:hover .titre {
  text-decoration: underline;
}

.titre {
  margin: 0;
  text-align: center;
  font-size: 32px;
  font-family: UnexploredFields;
  padding-bottom: 5px;
}
.sous-titre {
  margin: 0;
  font-size: 18px;
}

.texteIndex .titre {
  
  text-align: left;
}

.texteIndex {
  /* position: absolute; */
  text-align: left;
  order: 0;
  margin-top: var(--gutter);
  margin-bottom: var(--gutter);
}

.projet * {
  align-self: center;
  pointer-events: all;
}

.ctn-projet {
  pointer-events: all;
  display: flex;
  justify-content: center;
  width: 100%;
  pointer-events: none;
  flex-direction: column-reverse;
  margin-top: 0;
  margin-bottom: 0;
  /* margin-left: 50%;
  transform: translateX(-50%); */
}
.projetIndex {
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - var(--gutter)*2);
  margin-left: var(--gutter);

}

img {
  padding-bottom: calc(var(--gutter)/2);
  padding-top: calc(var(--gutter)/2);
  max-height: 100vh;
  max-width: 100%;
  order: 1;
}
</style>
