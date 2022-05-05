<template >

            <!-- Comment pointer vers projet.slug-1 et projet.slug+1 ???  -->
  <nuxt-link  :to="`/projets/${projet.slug}`">
        <div class="texte">
            <uf-logo class="uf-mono" size="48px" color=""/>
            <span class="titre" v-html="projet.titre"></span>
            <span class="sous-titre" v-html="projet.date + ' • ' + projet.client.nom"></span>
        </div>
            <img v-if="projet.entete" class="img-projet" :src="url + projet.entete + qual" alt="">

  </nuxt-link>
</template>

<script>
  export default {
      data(){
          return{
              url:'https://porte-secrete.unexploredfields.com/assets/',
              qual: '?quality=80&width=1920&withoutEnlargement'
          }
      },
    props: {
        projet: {
            type: Object,
        },

       
    },


    
  }
</script>

<style scoped>

.texte {
    text-align: center;
    left: 50%;
    transform: translate(-50%,0);
    position: absolute;
    top: 50%;
    z-index: 1000;
}



nuxt-link:hover {
    cursor: pointer;
    pointer-events: none;
}
nuxt-link:hover * {
    pointer-events: all;
}

.titre {
    text-align: center;
    font-size: 32px;
    width: fit-content;
}
.sous-titre {
    font-size: 18px;
}

.projet * {
    align-self: center;
    pointer-events: all;
}

.projet {
    display: flex;
    justify-content: center;
    width: 100%;
    pointer-events: none;
    flex-direction: column;
    margin-top: 32px;
    margin-bottom: 32px;
    margin-left: 50%;
    transform: translateX(-50%);

}




.img-projet {
    padding-bottom: 32px;
    padding-top: 32px;
    max-height: 100vh;
}

.projet:hover .uf-mono img{
    fill: aqua;
}

.projet:hover .img-projet {
    /* transform: scale(.8); */
}

.img-projet, .titre {
    transform-origin: top;

    transition: all .2s ease-in-out;
    z-index: 10 !important;


}

.sous-titre {
    max-width: 80%;
}


</style>