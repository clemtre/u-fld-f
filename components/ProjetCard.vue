<template>
  <nuxt-link  :to="`/projets/${projet.slug}`">
        
            <uf-logo class="uf-mono" size="48px" color="#000000"/>
            <span class="titre" v-html="projet.titre"></span>
            <span class="sous-titre" v-html="projet.date + ' • ' + projet.client.nom"></span>
            <img v-if="projet.entente" class="img-projet" :src="url+projet.entete.id+'?height=1280&format=jpg'" alt="">

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
    props: {
        projet: {
            type: Object,
        },
       
    },
  }
</script>

<style scoped>

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
}

.projet {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    margin-top: 32px;
    margin-bottom: 32px;

}



.img-projet {
    max-height: 80vh;
    width: auto;
    padding-bottom: 32px;
    padding-top: 32px;
    object-fit: contain;
}

.projet:hover .uf-mono img{
    fill: aqua;
}

.projet:hover .img-projet {
    transform: scale(.95);
}

.img-projet {
    transform-origin: top;

    transition: all .2s ease-in-out;
}

</style>