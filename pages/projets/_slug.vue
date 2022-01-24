<template>
  <!-- pages/projets/_slug.vue -->
  <main>
    <div v-if="projet">
      <header>
        <div class="cover img-cont h-full max-h-96 max-w-full">
          <img
            v-if="coverImageUrl"
            class="min-w-full"
            :src="coverImageUrl"
            alt=""
          />
        </div>
      </header>
      <div
        class="cont relative bg-gray-50 p-12 z-10 m-auto max-w-full "
      >
        <article class="prose prose-xl m-auto w-full">
          
          <h1 class="hero-text">{{ projet.title }}</h1>
          <p>{{ projet.intro }}</p>

          <!-- use markdownit to render the markdown text to html -->
          <div v-html="$md.render(projet.corps)" class="body"></div>
        </article>
      </div>
    </div>
    
  </main>
</template>

<script>
export default {
  // use destructuring to get the context.params and context.store
  async asyncData({ params, store }) {
    try {
      // fetch data by slug using Strapi query filters
      const { data } = await (
        await fetch(
          `${store.state.apiUrl}/projets?filters[slug][$eq]=${params.slug}&populate=*`
        )
      ).json()
      return { projet: data[0].attributes }
    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    coverImageUrl() {
      const url = this.$store.state.url
      const imagePath = this.projet.couverture.data[0].attributes.formats.large.url
      return url + imagePath
    },
    
  },
}
</script>