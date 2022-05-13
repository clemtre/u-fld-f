<template>
  <div>
    <p class="titre" v-html="projet.titre"></p>

    <img src="" alt="" />

    <p class="meta" v-html="projet.date"></p>
    <p class="meta">Credits : {{ projet.credits }}</p>
    <p class="corps" v-html="projet.corps"></p>
  </div>
</template>

<script>

export default {
  //   props: ['projet'],
  data() {
    return {
      projet: '',
    }
  },
  mounted() {
      //chelou mais fonctionne
    for (const projet of this.Projets) {
      if ((projet.slug = this.$route.params)) {
        this.projet = projet
      }
    }
  },
}
</script>

<style scoped>
</style>