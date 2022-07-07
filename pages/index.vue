
<template>
  <div>
    <header-scroll></header-scroll>
    <user-interface></user-interface>

    <section class="intro">
      <section class="ctn-main" v-if="this.getName('bio').on">
        <!-- <p class="pre">about</p> -->
        <div class="paragraph" v-html="$store.state.Bio.descriptif"></div>
      </section>
      <section class="ctn-main ctn-small" v-if="this.getName('bio').on">
        <p class="pre">list of in-house skills :</p>
        <div
          class=" clients-liste"
          v-html="$store.state.Bio.competences"
        ></div>
      </section>
      <section class="ctn-main ctn-small" v-if="this.getName('bio').on">
        <p class="pre">clients</p>
        <!-- <div
          class="paragraph clients-liste"
          v-html="$store.state.Bio.clients"
        ></div> -->
        <section class="logo ctn-small ctn-main" v-if="this.getName('bio').on">
          <img
            v-for="logo in $store.state.Bio.logos_clients"
            :key="logo.id"
            :src="`${$config.apiUrl}assets/${logo.directus_files_id}`"
            alt=""
          />
        </section>
      </section>
    </section>
    <!-- <hr /> -->
    <section class="main-projet-ctn" v-if="this.getName('projets').on">
      <projet-card
        class="projet"
        v-for="projet in $store.state.Projets"
        :key="projet.id"
        :projet="projet"
        :isPortrait="isPortrait"
      >
      </projet-card>
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
  color:red !important;
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
  box-sizing: border-box;
  border: 0px solid var(--jaune);
  transition: 0.1s;
  pointer-events: none;
}
.projet:hover {
  /* border: var(--gutter) solid var(--jaune); */
}
.intro {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.intro section {
  padding: 0;
  width: 100%;
}
.clients-liste >>> p {
  color: rgba(255, 255, 255, var(--o));
}

.clients-liste >>> span::before {
  content: '';
}
p {
  text-indent: 10px !important;
}

.clients-liste >>> p {
  margin-left: 50px;
}

.clients-liste >>> span {
  margin: -50px;
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
.paragraph .pre {
  margin: 0 !important;
  transform: translateY(40px);
  opacity: var(--o);
}
.ctn-small {
  width: 100%;
}
.logo {
  /* border : 1px dotted var(--blanc); */
  border-left: none;
  border-right: none;
  padding: calc(var(--gutter) * 1.5) 0px !important;
  padding-right: 0 !important;
  display: flex;
  flex-wrap: wrap;
  /* height: fit-content; */
  transform: translateX(-5px);
  width: 100%;
  justify-content: space-between;
  gap: 15px;
  overflow: visible !important;

  margin-top: 40px;
}

.logo img:hover {
  transform: scale(1.2);
  z-index: 10000;
}

.logo img {
  overflow: hidden !important;
  transform: scale(1);
  transition: all 0.2s;
  /* border:1px solid blue; */

  width: 90px;
}
.main-projet-ctn {
  display: flex;
  flex-wrap: wrap;
  /* max-width: 600px; */
  /* gap: 10px; */
  align-content: flex-start;
  flex-direction: row;
}
.main-projet-ctn *:nth-of-type(2n) {
  background-color: rgba(255,255,255,.05);
}
.main-projet-ctn * {
  width: 100%;
  /* border-top: 2px solid var(--blanc); */
  /* flex-basis: 100%; */
}
</style>
