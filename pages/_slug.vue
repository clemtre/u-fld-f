<template>
  <div>
    <section class="prevnext">
      <nuxt-link to="/"><button>x</button></nuxt-link>
      <button @click="scrollToTop()">↑</button>
      <nuxt-link :to="prev"><button>←</button></nuxt-link>
      <nuxt-link :to="next"><button>→</button></nuxt-link>
    </section>
    <section class="flotaison">
      <div class="meta-wrapper">
        <p class="titre">{{ projet.titre }} &mdash; {{ projet.client }}</p>
        <p class="client"></p>
      </div>
      <img
        class="entete"
        :src="`${$config.CDN}image/fetch/w_2000,h_2000,c_limit/${url}${
          !isPortrait ? projet.entete : projet.entete_portrait
        }${qual}`"
        alt=""
      />
    </section>
    <section class="info">
      <p class="meta" v-html="projet.credits"></p>
      <p class="meta" v-html="projet.date"></p>
    </section>
    <section class="centre"></section>
    <p class="corps" v-html="projet.corps"></p>
    <!-- <div
      class="serie-ctn"
      v-for="(mediaArr, i) in projet.medias_CLEAN"
      :key="i"
    >
      <img
        v-for="(media, j) in mediaArr"
        :key="j"
        v-bind:class="`serie-${mediaArr.length}`"
        :src="`${url}${media.disk}${qual}`"
      />
    </div> -->
    <site-footer></site-footer>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      projet: {},
      prev: '',
      next: '',
      isPortrait: true,
      url: `${this.$config.apiUrl}assets/`,
      qual: '?quality=80&width=1920&withoutEnlargement',
    }
  },
  mounted() {
    this.isPortrait = window.innerWidth < window.innerHeight

    window.addEventListener('resize', this.isPortraitCheck)
    this.projet = this.$store.state.Projets.find(
      (x) => x.slug === this.$route.params.slug
    )
    // this.prev = this.$store.state.Projets[this.projet.id - 2].slug
    if (this.$store.state.Projets[this.projet.id -2]) {
      this.prev = this.$store.state.Projets[this.projet.id -2].slug
    } else {
      this.prev = this.$store.state.Projets[this.$store.state.Projets.length-1].slug
    }
    
    if (this.$store.state.Projets[this.projet.id]) {
      this.next = this.$store.state.Projets[this.projet.id].slug
    } else {
      this.next = this.$store.state.Projets[0].slug
    }
  },
  unmounted() {
    window.removeEventListener('resize', this.isPortraitCheck)
  },
  methods: {
    scrollToTop(){
      document.body.scrollTop = 0
       document.documentElement.scrollTop = 0
      console.log('aa')
    },
    isPortraitCheck() {
      this.isPortrait = window.innerWidth < window.innerHeight
    },
  },
}
</script>

<style scoped>
.client {
  margin-top: 0;
  /* font-size: var(--L); */

  /* text-align: center; */
}
.entete {
  box-sizing: border-box;
  /* padding: var(--gutter); */
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  /* padding: 30px 0; */
  flex-shrink: 2;
}

img {
  /* max-height: 100vh; */
  object-fit:cover !important;
}

.meta,
.meta >>> p {
  font-size: var(--M);
}
.meta {
  /* text-align: left; */
  margin-top: 0;
  margin-bottom: 0;
  /* width: 50%; */
  opacity: var(--o);

  /* max-width: 800px; */
}
.corps >>> * {
  box-sizing: border-box;
  border: none;
}
.corps >>> tr {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: baseline !important;
  gap: 0 var(--gutter);
  width: 100% !important;
}
.corps >>> tr td {
  /* width: unset !important; */
}

.corps >>> td {
  width: 100% !important;
}
.corps >>> tr td div {
  width: auto !important;
}
.corps >>> tr,
.corps >>> td {
  /* height: fit-content !important; */
  /* border: 1px solid blue; */
  box-sizing: content-box !important;
  padding: 0 !important;
}

.corps >>> * {
border-collapse: collapse !important;
}
.corps >>> p:first-of-type {
  /* padding-top: 10px; */

}

.corps >>> p:last-of-type {
  padding-bottom: 20px;
}
.corps >>> p:not(:first-of-type){
  text-indent: 24px;
}
.corps >>> p {
  width: 100%;
  margin: 0 10px;
  max-width: 800px !important;
}

.corps >>> tr td * {
  width: 100% !important;
}
.corps >>> iframe {
  display: inline !important
}
.corps >>> img {
  min-width: 100% !important;
  max-height: 100vh !important;
  object-fit: contain !important;
  margin: 0 auto !important;
}
.corps >>> tbody tr td img{
  display: inline !important;
}
.corps >>> blockquote {
  margin:0 !important
}

.corps >>> tbody {
  display: flex;
  flex-direction: column;
  gap: 5px 0;
}
.corps >>> table {
  border-spacing: 0 !important;
  height: auto !important;
  border: none !important;
}

.titre {
  margin: 0;
  /* margin-bottom: calc(var(--gutter) * 2); */
  /* text-align: center; */
  /* font-size: var(--XXL); */
  /* font-family: UnexploredFields; */
}
.info {
  border-bottom: 1px solid var(--A);

  padding: 10px;
  height: fit-content;
  z-index: 1000000;
  /* margin-top: 200px; */
}
.flotaison {
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  height: 100vh;
}
.centre {
  width: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
}
.meta-wrapper {
  display: flex;
  border-top: 1px solid var(--A);
  padding: var(--gutter) 0;
  width: 100vw;
  align-content: space-between;
  position: absolute;
  bottom: 0;
  background-color: var(--B);
  z-index: 99999;
}
.meta-wrapper p {
  padding: 0 10px;
  /* width: fit-content; */
  margin: 0 !important;
}
.meta >>> p {
  margin: 0;
}
.meta-wrapper p:nth-of-type(2) {
  text-align: right;
  float: right;
}
.centre p {
  /* padding: 0 40px; */
}
.prevnext {
  position: fixed;
  bottom: 0px;
  right: 10px;
  z-index: 99999999999;
}
button:hover {
  opacity: 1;
}
.prevnext nuxt-link {
  opacity: var(--o);
  letter-spacing: -10px;
  text-align: left;
  text-decoration: none !important;
  font-family: 'IBM Plex Mono', monospace !important;
}
button {
  opacity: var(--o);
  color: var(--A);
  border: none;
  font-size: var(--L);
  /* line-height: 0; */
}
</style>