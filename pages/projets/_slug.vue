<template>
<div>
    <!-- <p class="titre" v-html="projet.titre"></p>

        <img src="" alt="">

    <p class="meta" v-html="projet.date"></p>
    <p class="meta">Credits : {{projet.credits}}</p>
    <p class="corps" v-html="projet.corps"></p>
 -->

 <div class="container">
    <div>
     Hello!
    </div>
    <div v-for="ranta in uiras" :key="ranta.sensors">
      
    </div>
  </div>

</div>
</template>

<script>

import { mapState } from "vuex";


import SiteHeader from '~/components/SiteHeader.vue'
import { pageMixinWithData } from '~/mixins/page.mixin'
    export default {
        computed: {
    ...mapState({
        uiras: state => state.uiras.sensors,
    }),
 }

}
</script>

<style scoped>



</style>