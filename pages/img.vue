<template>
  <div>
    <img
      class="entete"
      :src="`https://porte-secrete.unexploredfields.com/assets/${
        !isPortrait ? projet.entete : projet.entete_portrait
      }?width=1920`"
      alt=""
    />
      <p class="titre">{{projet.titre}}</p>

    <!-- <span class="titre">{{ projet.titre | stripHTML }}</span> -->
    <p class="meta" v-html="projet.date + ' • ' + projet.nomClient"></p>
    <p class="meta">{{ projet.credits }}</p>
    <p class="paragraph" v-html="projet.corps"></p>
    <div class="serie-ctn" v-for="(mediaArr, i) in projet.medias_CLEAN" :key="i">
      <img
        v-for="(media, j) in mediaArr"
        :key="j"
        v-bind:class="`serie-${mediaArr.length}`"
        :src="`https://porte-secrete.unexploredfields.com/assets/${media.disk}`"
      />
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projet: {},
      isPortrait: true
    }
  },
  mounted() {
      this.isPortrait = window.innerWidth < window.innerHeight

        window.addEventListener('resize', this.isPortraitCheck);
    this.projet = this.$store.state.Projets.find(
      (x) => x.slug === 'tarik'
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
.serie-1,
.entete {
  width: 100%;
}
img {
  max-height: 100vh;
  object-fit: cover;
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
</style>