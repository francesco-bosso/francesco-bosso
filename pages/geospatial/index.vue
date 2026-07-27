/* Page for ALL ITINERARIES*/
<template>
  <!-- class container in order to center the contend -->
  <!-- class mt-5 in order to heva a margin top of 5 units -->
  <div class="container mt-5">
    <!-- this component creates the top (first row) of the page. 
    The passed parameters are the name (for the title of the page), 
    the descritpion (in order to describe the content) and the tags 
    (in order to dynamically display the hashtags) -->
    <TopPageGeneric
      :name="header.name"
      :description="header.description"
      :tags="tags"
      :src_lottie="animation.src_lottie"
      :src_lottie_player="animation.src_lottie_player"
    />
    <hr />
    <!-- rows of poi cards -->
    <div class="row mt-4">
      <!-- this component creates a number of cards equal to the total 
      number of events (because in this page a user can filter for specific 
      category (thanks to the CategoryComponent) or look at all the available 
      events displayed thanks to the CardComponent -->
      <CardComponent
        v-for="work in [...works].reverse()"
        :id="work.codeWork"
        :key="work.codeWork"
        :name="work.name"
        :image="work.image"
        :path="pathToGeospatial"
        class="col-xl-6 p-2"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeospatialPage',

  async asyncData({ $axios }) {
    // Get all the itineraries previews data from server
    const { data } = await $axios.get('/api/geospatial-works')

    const tagList = []
    data.forEach((work) => {
      tagList.push(work.shortName)
    })

    return {
      works: data,
      tags: tagList,
    }
  },
  data() {
    // static data that never changes
    return {
      header: {
        name: 'Geospatial',
        description:
          'Welcome to the Geospatial section! Here, you\'ll discover a range of projects that showcase the potential of geospatial data and its applications. These projects will take you on a journey through the exciting world of geospatial data analysis, from basic data treatment to remote sensing techniques. I hope you\'ll find something new and engaging here.',
      },
      pathToGeospatial: 'geospatial',
      animation: {
        src_lottie: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
        src_lottie_player: "https://assets9.lottiefiles.com/packages/lf20_gwsharow.json"
      }
    }
  },
  head() {
    return {
      title: 'Francesco Bosso | Geospatial',
      meta: [
        {
          hid: 'descriptionGeospatial',
          name: 'description',
          content: 'in the current page all the available works for the geospatial section are shown. A brief introductory description of the page is also provided',
        },
        {
          hid: 'keywordsGeospatial',
          name: 'keywords',
          content: [this.tags.toString(), 'Geospatial', 'Data Analysis'],
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>