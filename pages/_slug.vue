<template>
  <div>
    <img
      class="entete"
      :src="`${url}${
        !isPortrait ? projet.entete : projet.entete_portrait
      }${qual}`"
      alt=""
    />
      <p class="titre">{{projet.titre}}</p>

    <p class="meta" v-html="projet.date + ' • ' + projet.nomClient"></p>
    <p class="meta">{{ projet.credits }}</p>
    <p class="paragraph-centre" v-html="projet.corps"></p>
    <section class="images-ctn">

      <div class="serie-ctn" v-for="(mediaArr, i) in projet.medias_CLEAN" :key="i">
      <img
        v-for="(media, j) in mediaArr"
        :key="j"
        v-bind:class="`serie-${mediaArr.length}`"
        :src="`${$config.CDN}image/fetch/w_1000,h_1000,c_limit/${url}${media.disk}`"
      />
    </div>
    </section>
    <site-footer></site-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projet: {},
      isPortrait: true,
      url: `${this.$config.apiUrl}assets/`,
      qual: '?quality=80&width=1920&withoutEnlargement',

    }
  },
  mounted() {
      this.isPortrait = window.innerWidth < window.innerHeight

        window.addEventListener('resize', this.isPortraitCheck);
    this.projet = this.$store.state.Projets.find(
      (x) => x.slug === this.$route.params.slug
    )
  },
   unmounted() {
    window.removeEventListener('resize', this.isPortraitCheck);
  },
  methods: {
    isPortraitCheck() {
      this.isPortrait = window.innerWidth < window.innerHeight
    },
  },
}
</script>

<style scoped>
.images-ctn {
  display:flex;
  flex-direction: column;
  gap: var(--gutter);
}
.serie-ctn {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}
.serie-3 {
  width: 33%;
}
.serie-2 {
  width: 50%;
}
.serie-1,
.entete {
  width: 100%;
}
img {
  max-height: 100vh;
  object-fit: contain;
}

.meta {
  font-size: 12px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  max-width: 800px;
  margin-left: 50%;
  transform: translateX(-50%);

}

.titre {
  margin-top:calc(var(--gutter) * 2);
  margin-bottom: 0;
  text-align: center;
  font-size: 32px;
  font-family: UnexploredFields;
  padding-bottom: 5px;
}
.paragraph-centre {
  transform: translateX(-50%);
margin-left: 50%;
margin-top: calc(var(--gutter)*4);
  margin-bottom: calc(var(--gutter)*4);

}
</style>