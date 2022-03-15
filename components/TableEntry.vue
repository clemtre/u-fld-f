<template>
  <nuxt-link  :to="`/projets/${projet.slug}`">

<table>
    
    <uf-logo id="uf" size="24px" color="0" />
    <tr>
        <td v-if="projet.titre" v-html="projet.titre"></td>
        <td v-if="projet.date">{{ projet.date }}</td>
        <td v-if="projet.technique">{{ projet.technique }}</td>
    </tr>
    <tr>
        <td class="long" v-if="projet.client">{{ projet.client.nom.replace(" ", "&nbsp;") }}</td>
    </tr>
</table>
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
#uf {
    width: 36px;
    transform: translateY(48px);
    margin-top: 40px;

}

td,
th {
    float: left;
    text-align: left;
    width: 40%;
}

tr {
    transform: translateX(48px);
    width: 90%;
    margin-bottom: 18px;
    height: 24px;
    display: inline;
    float: left;
}

.debug {
    border: 1px solid orange;
}

.long {}

.right {}

* {
    font-size: 24px;
}
</style>
