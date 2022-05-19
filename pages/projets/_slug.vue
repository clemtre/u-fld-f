<template>
  <div>
    <p class="titre" v-html="projet.titre"></p>

    <img src="" alt="" />

    <p class="meta" v-html="projet.date"></p>
    <p class="meta">Credits : {{ projet.credits }}</p>
    <p class="corps" v-html="projet.corps"></p>
    <div class="serie-ctn" v-for="(mediaArr, i) in projet.medias" :key="i" >
      <img
        v-for="(media, j) in mediaArr"
        :key="j"
        v-bind:class="`serie-${mediaArr.length}`"
        :src="`https://porte-secrete.unexploredfields.com/assets/${media}?width=1920`"
      />
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
export default {
  //   props: ['projet'],
  data() {
    return {
      projet: {},
    }
  },
  mounted() {
    this.projet = this.$store.state.Projets.find(
      (x) => x.slug === this.$route.params.slug
    )
  },
}
</script>

<style scoped>
.serie-ctn {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}
.serie-3 {
  width: 33%;
}
.serie-2 {
  width: 50%;
}
img {
  max-height: 100vh;
  object-fit: contain;
}
.serie-1 {
}
</style>