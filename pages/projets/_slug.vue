<template>
<div>
    <p v-html="projet.titre"></p>
    <p v-html="projet.date"></p>
    <p>Credits : {{projet.credits}}</p>
    <p v-html="projet.corps"></p>




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
            show: {
                flag: true,
                list: 'list',
                feed: 'feed'

            },
           
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