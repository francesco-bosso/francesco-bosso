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
        v-for="work in works"
        :id="work.codeWork"
        :key="work.codeWork"
        :name="work.name"
        :image="work.image"
        :path="pathToJustBecause"
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
    const { data } = await $axios.get('/api/justBecause-works')

    const tagList = ['JustBecause', 'RandomFun']
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
        name: 'Just Because',
        description:
          'Welcome to the Just Because section! Here, you\'ll find a collection of projects that were undertaken simply for the joy of learning, exploring, and having fun. These projects may not have a specific goal or objective, but they offer the opportunity to delve into a variety of interesting topics and concepts. I hope you\'ll find something engaging and enjoyable in this section',
      },
      pathToJustBecause: 'just-because',
      animation: {
        src_lottie: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
        src_lottie_player: "https://assets6.lottiefiles.com/packages/lf20_VNMPxa.json"
      }
    }
  },
  head() {
    return {
      title: 'Francesco Bosso | Just Because',
      meta: [
        {
          hid: 'descriptionJB',
          name: 'description',
          content: 'in the current page all the available works for the just because section are shown. A brief introductory description of the page is also provided',
        },
        {
          hid: 'keywordsJB',
          name: 'keywords',
          content: [this.tags.toString(), 'Just Because', 'Data Analysis'],
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>