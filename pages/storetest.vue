<template>
  <div>


      <ul v-for="projet of Projets" :key="projet.id">
          <li>
              <p>
                + {{projet.titre | stripHTML}}
              </p>
          </li>
          <li>
              <p>
              {{projet.nomClient}}

              </p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    computed:{
        Projets(){
            return this.$store.state.db

        }
        // this.Projets = store.state.db
    }
}

</script>

<style>

</style>