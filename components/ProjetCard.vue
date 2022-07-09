<template >
  <nuxt-link :to="projet.slug" v-if="projet.entete">
    <div
      class="ctn-projet"
      v-bind:class="{ projetIndex: isIndexCheck || !this.getName('images').on }"
    >
      <img
        v-bind:style="{ width: /* ${this.getName('images').val}% */ `unset` }"
        class="thumbnail"
        v-if="this.getName('images').on"
        :src="`${$config.CDN}image/fetch/w_2000,h_2000,c_limit/${url}${
          !isPortrait ? projet.entete : projet.entete_portrait
        }${qual}`"
        alt=""
      />

      <div
        class="texte"
        v-bind:class="{
          texteIndex: isIndexCheck || !this.getName('images').on,
        }"
      >
        <p class="titre">{{ projet.titre }}</p>

        <p
          class="sous-titre"
          v-html="/*projet.date + ' • ' + */ projet.client"
        ></p>
        <!-- <uf-logo class="uf-mono" size="32px" color="" /> -->
      </div>
      <div class="images-corps">
        <img v-for="image in projet.images" :key="image" :src="`${$config.CDN}image/fetch/w_500,h_500,c_limit/${image}`" alt="" />
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
      url: `${this.$config.apiUrl}assets/`,
      qual: '?quality=80&width=1920&withoutEnlargement',
    }
  },
  props: ['projet', 'isPortrait'],
  computed: {
    isIndexCheck: function () {
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
  margin: 40px 0;
  text-align: left;
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
  /* pointer-events: none; */
}
nuxt-link:hover * {
  pointer-events: all;
}

.titre {
  transition: all 1s;
}
.ctn-projet:hover .titre {
  color: var(--jaune);
  /* text-decoration: underline; */
}

.titre {
  margin: 0;
  width:100vw;
  text-align: left;
  font-size: var(--XXL);
  font-family: UnexploredFields;
  /* padding-bottom: 5px; */
}
.sous-titre {
  margin: 0;
  font-size: var(--L);
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
  /* align-self: center; */
  pointer-events: all;
}

.ctn-projet {
  pointer-events: all;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  flex-direction: row;
  /* padding: 60px 0; */
  /* margin: 60px auto; */
  box-sizing: border-box;
  transition: all 0.3s;

  /* border-top: 5px solid rgba(0, 0, 0, 0.3); */
}
a:hover .ctn-projet {
  height: 400px;
}
.ctn-projet:hover .thumbnail {
  box-sizing: border-box;
  /* background-color: var(--blanc); */
  /* border: 1px solid var(--jaune); */
}
.projetIndex {
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - var(--gutter) * 2);
  margin-left: var(--gutter);
}

img {
  /* padding-bottom: calc(var(--gutter) / 2); */
  /* padding-top: calc(var(--gutter) / 2); */
  /* order: 1; */
  object-fit: contain;
  /* max-height: 200px; */
  height: 200px;
  transition: all 0.2s;
}

.images-corps {
  width: 100%;
  /* max-width: 800px; */
  /* display: none; */
  position: absolute;
  transform: translateY(200px);
  transform-origin: bottom;
  right: 0;
  z-index: 999999999;
  pointer-events: none;
}
a:hover .images-corps {
  display: flex;
  /* flex-wrap: wrap; */
  z-index: 100000;
}
.images-corps img {
  pointer-events: none;
}

a:hover .images-corps img {
  /* position: absolute; */
  scale: 1;
  clip-path: inset(0 0 0% 0%);
}

.images-corps img {
  height: 200px;
  transition: all 0.2s;
  transform-origin: bottom;
  /* height: 0px; */
  /* scale: 0; */
  clip-path: inset(0 0 100% 100%);
}
a:hover .thumbnail {
  height: 600px;
  max-width: 100vw;
  /* width:100vw; */
  z-index: 999999999;
  transform-origin: bottom;
  transform: translateY(-600px);
  scale: 1;
}
.thumbnail {
  /* scale: .9; */
  /* height: 400px; */
  max-height: 100%;
  position: absolute;
  right: 0;
  /* position: absolute; */
  /* display: none; */
}
</style>
