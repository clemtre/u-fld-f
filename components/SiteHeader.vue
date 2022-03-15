<template>
  <div class="">
              <button @click="show.flag = !show.flag">
        {{ show.flag ? 'projects' : 'index'}}
    </button>
              <!--<nuxt-link  to="/projets/index">Projets</nuxt-link>-->
              <nuxt-link class="pr-8" to="/">Info</nuxt-link>


  </div>
</template>

<script>

export default {
  props: {
        show: {
            type: Object,
        },
       
    },
}
</script>

<style>
* {
  font-size: 32px;
}
</style>