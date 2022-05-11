<template>
  <div style="color:'white''">
    <button @click="set('images')">images {{this.getName('images').on ? falsePh : truePh}}</button>
    <button @click="set('bio')">bio {{this.getName('bio').on ? falsePh : truePh}}</button>
    <button @click="set('clients')">images {{this.getName('clients').on ? falsePh : truePh}}</button>
    <button @click="set('darkmode')">darkmode {{this.getName('darkmode').on ? falsePh : truePh}}</button>
    <!-- <button value="ui.images.on" @click="uiToggle($store.state.ui.images.on)">button</button> -->
    <!-- <p>{{$store.state.ui.images.on}}</p>  

    <ul v-for="projet of Projets" :key="projet.id">
      <li>
        <p>+ {{ projet.titre | stripHTML }}</p>
      </li>
      <li>
        <p>
          {{ projet.nomClient }}
        </p>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      falsePh : '[_]',
      truePh : '[x]'
    }
  },
  // methods: {
  //   uiToggle (e, a){
  //     console.log(e.target.value)
  //     // console.log(e.target.value, this.$store.state.ui.images.on)
  //     this.$store.commit('SWITCH', a)
  //   }
  // },
  mounted(){
    console.log(this.getName('images').taille)
  },
  methods:{
    set : function(arg){
      this.$store.commit('SWITCH',this.getName(arg))
      console.log(this.getName(arg))
    },
  },
  computed: {
    ...mapGetters({
      getName: 'getName',
    })
  }
}
</script>

<style>
</style>