<template>
  <nuxt-link  :to="`/projets/${projet.slug}`">

<table>
    <uf-logo id="uf" size="24px" color="0" />
    <tr>
        <td class="titre" v-if="projet.titre" v-html="projet.titre"></td>
        <td class="date" v-if="projet.date">{{ projet.date }}</td>
        <td v-if="projet.technique">{{ projet.technique }}</td>
    </tr>
    <tr>
        <td class="long" v-if="projet.client">{{ projet.client.nom.replace(" ", "&nbsp;") }}</td>
    </tr>
</table>
        <hr>

  </nuxt-link>
</template>

<script lang="ts">
export default {
    props: {
        projet: {
            type: Object
        },
    },
}
</script>

<style scoped>
table {
    width: 100%;
    padding: 0px;
    transition: all .5s ease;


    


}
hr {
    z-index: -1;
    border-bottom: 1px solid black;
}
.overlay {
    width: 0;
}
nuxt-link:hover .overlay{
    width: 306px;
    background-color: yellow;
    height: 100%;
}
table:hover {
    margin: 5px 0 ;
    
}
nuxt-link:hover .titre {
    font-size: 48px;
}
table * { 
}

#uf {
    transform: translateY(48px);
    margin-top: 0px;
    margin-left: 12px;
}

td,
th {
    float: left;
    text-align: left;
}

tr {
    transform: translateX(48px);

margin-bottom: 18px;
    height: fit-content;
    width: calc(100% - 1.5 * 48px);
    line-height: 30px;
    float: left;
}

.debug {
    border: 1px solid orange;
}

.long {}

.right {}

* {
    font-size: 32px;
}

.date {
    float: right;
    font-size: 12px;
}

</style>
