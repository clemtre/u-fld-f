<template >
  <nuxt-link  :to="`/projets/${projet.slug}`">
            <uf-logo class="uf-mono" size="48px" color="#000000"/>
            <span class="titre" v-html="projet.titre"></span>
            <span class="sous-titre" v-html="projet.date + ' • ' + projet.client.nom"></span>
            <img v-if="projet.entete" class="img-projet" :src="url + projet.entete.filename_disk + qual" alt="">
            <p>{{projet.entete.filename_disk}}</p>

            <!--<div v-for="media in projet.medias" :key="media" >
                    
                    
                    
                    <div class="ctn" v-for="image in media.item.images" :key="image">
                        <img :src="url+image.directus_files_id.filename_disk+'?height=1280&format=jpg'" alt="">
                        <hr> <br>

                    </div>
                </div>
                -->
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
    width: 1000px;
    padding-bottom: 32px;
    padding-top: 32px;
}

.projet:hover .uf-mono img{
    fill: aqua;
}

.projet:hover .img-projet {
    transform: scale(.8);
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