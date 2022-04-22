<template>
<div>
    <p class="titre" v-html="projet.titre"></p>

        <img src="" alt="">

    <p class="meta" v-html="projet.date"></p>
    <p class="meta">Credits : {{projet.credits}}</p>
    <p class="corps" v-html="projet.corps"></p>




</div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import {
    pageMixinWithData
} from '~/mixins/page.mixin'
export default {
    data() {
        return {
            // show: {
            //     flag: true,
            //     list: 'list',
            //     feed: 'feed'
 
            // },
           
        }
        


    },
    components: {
        SiteHeader
    },
    mixins: [pageMixinWithData()],
}
</script>

<style scoped>



</style>