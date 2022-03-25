<template>
<div>
    {{projet}}
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
