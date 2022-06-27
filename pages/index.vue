<template>
  <div>
    <header-scroll></header-scroll>
    <user-interface></user-interface>

    <section class="intro">
      <section class="ctn-main" v-if="this.getName('bio').on">
        <p class="p-small">about</p>
        <div class="paragraph" v-html="$store.state.Bio.descriptif"></div>
      </section>
      <section class="ctn-main ctn-small" v-if="this.getName('clients').on">
        <p class="p-small">competences</p>
        <div class="paragraph clients-liste" v-html="$store.state.Bio.competences"></div>
      </section>
      <section class="ctn-main ctn-small" v-if="this.getName('clients').on">
        <p class="p-small">clients</p>
        <div class="paragraph clients-liste" v-html="$store.state.Bio.clients"></div>
      </section>
    </section>
    <hr />
    <section class="main-projet-ctn" v-if="this.getName('projets').on">
      <projet-card
        class="projet"
        v-for="projet in $store.state.Projets"
        :key="projet.id"
        :projet="projet"
        :isPortrait="isPortrait"
      ></projet-card>
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
  justify-content: space-between;
}
.intro section {
  padding: 0 50px;

}
.clients-liste >>> p {
  margin: 0;
  text-indent: 0;
}
.p-small{
  font-style: italic;
  margin: 0;
  /* font-size: 12px; */
  /* text-indent: var(--gutter); */
}
.ctn-small {
  max-width: 600px;
}
</style>
