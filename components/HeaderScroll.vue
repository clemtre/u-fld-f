<template>
  <div class="ctn-main" id="headerscroll"><img src="~/static/uf-lettrage.png" alt="" /></div>
</template>

<script>
export default {
  data(){
    return{
      a : 1
    }
  },
  methods: {
    handleScroll(){
      this.a += 1
    console.log(this.a)
    }

  },
  beforeMount() {
    window.addEventListener("scroll",this.handleScroll);
  },
  destroyed(){
    window.removeEventListener("scroll",this.handleScroll);

  }
  
}
</script>

<style scoped>
img{
    margin-left: 50%;
    transform: translateX(-50%);
    width:100%;
}
#headerscroll {
  overflow-x: hidden;
    background-color: var(--jaune);
}
</style>