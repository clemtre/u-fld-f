<template>
    <div style="color:'white''">
    <button @click="set('images')">images {{this.getName('images').on ? falsePh : truePh}}</button>
    <button @click="set('bio')">bio {{this.getName('bio').on ? falsePh : truePh}}</button>
    <button @click="set('clients')">images {{this.getName('clients').on ? falsePh : truePh}}</button>
    <button @click="set('darkmode')">darkmode {{this.getName('darkmode').on ? falsePh : truePh}}</button>
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
  methods:{
    set : function(arg){
      this.$store.commit('SWITCH',this.getName(arg))
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