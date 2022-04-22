<template>
  <div id="app">
      <header-sample 
      :msg="msg" :ok="ok"
      @click.native="trigger"
      />
  </div>
</template>

<script>

import HeaderSample from '~/components/HeaderSample.vue'

export default {
    
    components:{
        HeaderSample
    },
    data(){
        return{
            msg : "check",
            ok : false

        }
    },
    methods:{
        trigger: function(){
            this.ok = true,
            console.log("llll")
        }
    }
}
</script>

<style>

</style>