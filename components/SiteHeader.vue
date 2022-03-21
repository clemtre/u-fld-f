<template>
<div class="padder">
    <div class="wrapper">
        <button @click="show.flag = !show.flag" id="index">
            {{ show.flag ? 'projects' : 'index'}}
        </button>
        <button @mouseenter="showBio = true" @mouseleave="showBio = null">
            <span>info</span>
        </button>

    </div>
    <transition name="info">
        <div @mouseenter="showBio= true" @mouseleave="showBio = null" class="show" v-show="showBio">
            <p v-html="bio.descriptif">
            </p>
            <ul>
            <li v-html="bio.tel"></li>
            <li v-html="bio.ville"></li>

            </ul>
        </div>
        <!--<uf-logo size="32px" color="#FFFFFF" :inline="true"/> -->
    </transition>
</div>
</template>

<script>
import UfLogo from './UfLogo.vue'
export default {
    components: {
        UfLogo
    },
    props: {
        show: {
            type: Object,
        },
        bio: {
            type: Object
        },
        showBio: null
    },
}
</script>

<style scoped>
#index {
    margin-left: 12px;
}

.padder {
    height: 54px;
    width: 100%;
    border-bottom: 1px solid black;
    top: 0;
    left: 0;
    z-index: 10;
    position: fixed;
    mix-blend-mode: difference;

    background-color: #ffea00;

}

.wrapper {}

* {
    font-size: 32px;
}

.info-enter-active {
    transition: all .3s;
}

.info-enter-active {
    transition: all .3s;
}

.info-enter,
.info-leave-to,
.info-leave-active {
    opacity: 0;
}

p:hover {
    cursor: zoom-in
}

.show {
    pointer-events: all !important;

    position: fixed;
    overflow: auto;
    z-index: 1000;
    width: 100%;
    left: 0;
    height:calc(100% - 128px);
    mix-blend-mode: unset;
    background-color: black;

}

p {
    font-style: normal;
    text-align: left;
    width: 90%;
    padding: 18px;
}

p,li {
    color: white;

}

@media screen and (max-width: 960px) {
    p {
        columns: 1;

    }
}

@media screen and (min-width: 960px) {
    p {
        columns: 2;

    }
}
</style>
