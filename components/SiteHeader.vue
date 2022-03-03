<template>
  <div class="fixed w-full h-8 left-0 top-0 z-50
  bg-black
  border-b-2 border-uf 
  flex justify-end gap-x-4   items-center text-white text-right
  ">
              <div v-for="a of charLength" :key="a">

              <h1>{{ descArr[a] }}</h1>
              </div>
              <NuxtLink  to="/projets/index">Projets</NuxtLink>
              <NuxtLink class="pr-8" to="/">Info</NuxtLink>


  </div>
</template>

<script>

export default {
  data () {
    let descriptif = 'bonjour oui'
    descriptif += ' '
    let descArr = descriptif.split('').reverse()
    const charLength = descriptif.split('').length
    for (let a = 0; a< charLength ; a+= 2){
      //descArr[a].push()
      descArr[a+1] = "z" 
    }

    return {
      descriptif,
      charLength,
      descArr
    }
  }
}
</script>

<style>

</style>