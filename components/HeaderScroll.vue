<template>
  <div class="ctn-main" v-bind:style="hidden ? {display : 'none'} : {}">
    <div v-bind:style="{ height: `calc(${hauteur}% - ( var(--gutter) * 2 )` }" id="headerscroll">
      <img :src="hauteur > 20 ? ufLettrage : ufMono" alt="" />
    </div>
    <div id="headerscroll-ph"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      hauteur: 100,
      hidden:false,
      ufLettrage : require('~/static/uf-lettrage.png'),
      ufMono : require('~/static/uf-mono.png')
    }
  },
  methods: {
    handleScroll() {
      // if(this.hauteur > 0){
          this.hauteur = 100 - (window.top.scrollY / window.innerHeight) * 100
      // }
      // else {
        // this.hidden = true
        // window.removeEventListener('scroll', this.handleScroll)
      // }
    },
  },
  beforeMount() {
    window.scrollTo(0,0)
    window.addEventListener('scroll', this.handleScroll)
    if(!window.top.scrollY){
    }
    else {
      // this.hidden = true
    }
  },
  // destroyed() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
}
</script>

<style scoped>
.phscroll {
  height: calc(100vh + var(--gutter));
}
img {
  margin-left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  object-fit: contain;
}
#headerscroll {
  overflow-y: hidden;
  pointer-events: none;
  width: 100%;
  position: fixed;
  top: var(--gutter);
  overflow-x: hidden;
  background-color: var(--jaune);
}
#headerscroll-ph {
  height: calc(100vh - var(--gutter));
  width: 100%;
  /* border: 10px solid red; */
  position: static;
}
.ctn-main {
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>