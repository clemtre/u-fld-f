<template>
  <div>
    <section class="flotaison">
      <div class="meta-wrapper">

        <p class="meta" v-html="projet.credits"></p>
        <p class="meta" v-html="projet.date"></p>
      </div>
      <img
      class="entete"
      :src="`${url}${
        !isPortrait ? projet.entete : projet.entete_portrait
      }${qual}`"
      alt=""
    />
    <section class="info">
      <p class="titre">{{ projet.titre }}</p>
      <p class="client">{{projet.client}}</p>

    </section>
      </section>
      <section class="centre">

      </section>
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
  data() {
    return {
      projet: {

      },
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
  },
  unmounted() {
    window.removeEventListener('resize', this.isPortraitCheck)
  },
  methods: {
    isPortraitCheck() {
      this.isPortrait = window.innerWidth < window.innerHeight
    },
  },
}
</script>

<style scoped>
.client {
  margin-top:0;
  font-size: var(--M);

  text-align: center;
}
.entete {
  box-sizing: border-box;
  /* padding: var(--gutter); */
  /* position : absolute; */
  width:100%;
  top: 0;
  height:fit-content;
  padding: 30px 0;
  flex-shrink: 2;
}

img {
  /* max-height: 100vh; */
  object-fit: contain;
}

.meta, .meta >>> p {
  font-size: var(--M);
}
.meta {
  /* text-align: left; */
  margin-top: 0;
  margin-bottom: 0;
  width: 50%;
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
  height: fit-content !important;
  /* border: 1px solid blue; */
  box-sizing: content-box !important;
  padding: 0 !important;
}

.corps >>> * {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  border-collapse: collapse !important;
}
.corps >>> p {
  max-width: 100% !important;
  margin: calc(var(--gutter) * 4) var(--gutter) !important;
}

.corps >>> tr td * {
  width: 100% !important;
}
.corps >>> img {
  min-width: 100% !important;
  max-height: 200vh !important;
  object-fit: contain !important;
  margin: 0 auto !important;
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
  margin:0;
  /* margin-bottom: calc(var(--gutter) * 2); */
text-align: center;
  font-size: var(--XXL);
  font-family: UnexploredFields;
}
.info {
  padding: 10px 40px;
  height: fit-content;
  z-index: 1000000;
  background:linear-gradient(0deg rgba(255,0,0,0), rgba(0,255,0,1) ) !important;
  /* margin-top: 200px; */
}
.flotaison {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
}
.centre {
  width: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
}
.meta-wrapper {
  padding: 10px;
  display: flex;
  widows: 100%;
  align-content: space-around;
}
.meta-wrapper p {
  /* width: fit-content; */
  margin:0 !important
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
</style>