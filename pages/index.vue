
<template>
  <div>
    <div id="placeholder-bottom"></div>
    <header-scroll></header-scroll>
    <user-interface></user-interface>
    <section class="intro" v-if="this.getName('bio').on">
      <section class="ctn-main">
        <!-- <p class="pre">about</p> -->
        <div class="paragraph" v-html="$store.state.Bio.descriptif"></div>
      </section>
      <section>
        <p>
          {{ $store.state.Bio.contact_us }}
          <span class="mail">
            {{ $store.state.Bio.mail }}
          </span>
        </p>
      </section>
      <section class="ctn-main ctn-small">
        <p class="pre">list of in-house skills :</p>
        <div class="clients-liste" v-html="$store.state.Bio.competences"></div>
      </section>
      <section class="ctn-main ctn-small">
        <p class="pre">clients</p>
        <!-- <div
          class="paragraph clients-liste"
          v-html="$store.state.Bio.clients"
        ></div> -->
        <div class="logo ctn-small" v-if="this.getName('bio').on">
          <img
            v-for="logo in $store.state.Bio.logos_clients"
            :key="logo.id"
            :src="`${$config.CDN}image/fetch/w_200,h_200,c_limit/${$config.apiUrl}assets/${logo.directus_files_id}`"
            alt=""
          />
        </div>
      </section>
    </section>
    <!-- <hr /> -->
    <section class="main-projet-ctn" v-if="this.getName('projets').on">
      <div v-for="projet in $store.state.Projets" :key="projet.id">
        <nuxt-link class="projet" :to="projet.slug">
          <section class="entete">
            <p>

              <span v-html="projet.titre"></span> 
            <span v-html="projet.client"></span>
            </p>
            <p class="date" v-html="projet.date"></p>
          </section>
            <p class="credits" v-html="projet.credits"></p>
          <img
            class="thumbnail"
            :src="`${$config.CDN}image/fetch/w_2000,h_2000,c_limit/${
              $config.apiUrl
            }assets/${!isPortrait ? projet.entete : projet.entete_portrait}`"
            alt=""
          />
          <div class="images-corps">
            <img
              v-for="image in projet.images"
              :key="image"
              :src="`${$config.CDN}image/fetch/w_500,h_500,c_limit/${image}`"
              alt=""
            />
          </div>
        </nuxt-link>
      </div>
    </section>

    <site-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isPortrait: false,
      // projet
    }
  },
  mounted(){
  },
  created() {
    if (process.client) {
      this.isPortrait = window.innerWidth < window.innerHeight
      // this.$colorMode.preference = 'dark'
    }
  },
  methods: {
    listToggle: function () {
      this.projetSwitch = !this.projetSwitch
    },
  },
  computed: {
    ...mapGetters({
      getName: 'getName',
    }),
  },
}
</script>

<style scoped>
p >>> strong {
  color: red !important;
  font-weight: normal !important;
  opacity: var(--o) !important;
}
#lettrage {
  width: 100%;
  image-rendering: crisp-edges;
}

.header {
  pointer-events: all;
  z-index: 10000;
}

.main {
  margin-top: 128px;
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
.projet {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-content: flex-start;
  box-sizing: border-box;
  /* border: 0px solid var(--jaune); */
  transition: 0.1s all;
  transition-delay: 1s;
  /* pointer-events: none; */
}
.projet:hover {
  /* border: 1px solid var(--A); */
  border-left: none;
  border-right: none;
}
.intro {
  width: calc(100%);
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.intro * {
  padding: 0 10px;
}
.intro section:last-of-type {
  border-bottom: none;
  /* margin-bottom: 24px !important; */
}
.intro section {
  border-top: 1px solid var(--A);
  padding: 0;
  margin: 0;
  width: 100%;
}
.clients-liste >>> p {
  margin: 0;
  border-top: 1px solid var(--A)
}

.clients-liste >>> span::before {
  content: '';
}
p {
  /* text-indent: 10px !important; */
}
/* chxrry22 */
.clients-liste {
  column-gap:20px;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin:10px 0;
  justify-content: space-between;
}
.clients-liste >>> p {
  /* padding-left: 50px; */
  padding-top: 10px;
  padding-bottom: 10px;
  flex-basis:49%;
  min-width: min(400px, 100%);
}

.clients-liste >>> span {
  /* margin: -50px; */
  text-decoration: none !important;
  list-style: circle;

  display: inline-block;
  opacity: 1 !important;

  text-indent: 0;
}
.p-small {
  min-width: 100px;
  /* font-style: italic; */
  margin: 0;
  /* font-size: 12px; */
  /* text-indent: var(--gutter); */
}
.paragraph {
   columns: 2;
   column-width: 400px;
  orphans: 3
}
.paragraph .pre {
  margin: 0 !important;
  transform: translateY(40px);
  opacity: var(--o);
}
.ctn-small {
  width: 100%;
}
.logo {
  mix-blend-mode: difference;
  /* border : 1px dotted var(--A); */
  border-left: none;
  border-right: none;
  padding: calc(var(--gutter) * 1.5) 0px !important;
  padding-bottom: 24px !important;
  display: flex;
  flex-wrap: wrap;
  /* height: fit-content; */
  /* transform: translateX(-5px); */
  width: 100%;
  max-width: 715px;
  justify-content: space-between;
  gap: 15px;

  overflow: visible !important;

  /* margin-top: 40px; */
}

.logo img:hover {
  transform: scale(1.2);
  opacity: 1;
  z-index: 10000;
}
img {
  max-width: 100vw;
  object-fit: cover !important;
}
.logo img {
  opacity: var(--o);
  overflow: hidden !important;
  transform: scale(1);
  transition: all 0.2s;
  /* border:1px solid blue; */

  width: 70px;
}
.main-projet-ctn {
  display: flex;
  flex-wrap: wrap;
  /* max-width: 600px; */
  /* gap: 10px; */
  align-content: flex-start;
  flex-direction: column-reverse;
}
/* .main-projet-ctn *:nth-of-type(2n) {
  background-color: rgba(255,255,255,.05);
} */
.main-projet-ctn * {
  width: 100%;
  /* border-top: 1px solid rgba(255,255,255,var(--o)); */
  /* flex-basis: 100%; */
}
#placeholder-bottom {
  position: absolute;
  top: 100vh;
  width: 100vw;
  height:50vh;
  pointer-events: none;
}
.projet:hover .thumbnail {
  height: 400px;
}
.thumbnail {
  transition: all 0.2s;
  align-self: flex-start;
  height: 200px;
  object-fit: contain;
  width: auto;
  border-right: 1px solid var(--A);
}
.images-corps {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: top;
}
.projet:hover .images-corps img {
  height: 200px;
}
.images-corps img:hover {
  height: 300px !important;
}
.images-corps img {
  object-fit: contain;
  height: 0px;
  width: auto;
  border-right: 1px solid var(--A);
  transition: all 0.2s;
}
.entete {
  padding: calc(var(--gutter) * 1);
  border-bottom: 1px solid var(--A);
  border-top: 1px solid var(--A);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 10px;
  width: calc(100% - var(--gutter) * 2);
  /* background-color: var(--jaune); */
}
.entete p span:nth-of-type(2){
  /* color:red */
  height: 100%;
  padding-left: 10px;
  margin-left: 5px;
  border-left: 1px solid var(--A);
}
.entete p {
  transition: all 0.2s;
  text-indent: 0 !important;
  margin: 0;
  /* color: var(--noir); */
  background-color: transparent;
  /* margin-right:10px; */

  width: fit-content;
}
.credits {
  line-height: 0;
  /* opacity:0; */
  opacity: var(--o);
  display: none;
  width: 100%;
  padding:0 10px
}
.projet:hover .credits {
    margin: 10px 0;
  display: block;
  float:left;
  line-height: 24px;

  /* width: calc(fit-content); */
}
.date {
    opacity: var(--o);
  width: fit-content;
  float: right;
  text-align: right;
  flex-shrink: 10;
}
* {
  text-decoration: none;
}
.mail {
  display: inline;
  word-wrap: break-word;
  padding: 0 2px;
  text-decoration: underline;
  text-decoration-thickness: px;
  /* color: var(--B); */
  /* background-color: var(--A); */
}

</style>
