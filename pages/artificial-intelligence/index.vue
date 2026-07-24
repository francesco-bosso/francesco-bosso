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
:name="header.name" :description="header.description" :tags="tags"
      :src_lottie="animation.src_lottie" :src_lottie_player="animation.src_lottie_player" />
    <hr />
    <!-- rows of poi cards -->
    <div v-if="works.length == 0" class="row">
    <div class="col-md align-self-center">
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <lottie-player
src="https://assets6.lottiefiles.com/packages/lf20_fQij9m.json" background="transparent" speed="1"
        style=" height: 500px;" loop autoplay></lottie-player>

</div>
<div class="col align-self-center" style="text-align:center;">
  <p class="header">Work in progress ... </p>
</div>
    </div>
    <div class="row mt-4">
      <!-- this component creates a number of cards equal to the total 
      number of events (because in this page a user can filter for specific 
      category (thanks to the CategoryComponent) or look at all the available 
      events displayed thanks to the CardComponent -->
      <CardComponent
v-for="work in [...works].reverse()" :id="work.codeWork" :key="work.codeWork" :name="work.name"
        :image="work.image" :path="pathToMachineLearning" class="col-xl-6 p-2" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeospatialPage',

  async asyncData({ $axios }) {
    // Get all the itineraries previews data from server
    const { data } = await $axios.get('/api/machineLearning-works')

    const tagList = ['ML', 'AI', 'Data']
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
        name: 'Artificial Intelligence',
        description:
          'Welcome to the Artificial Intelligence section! You\'ll find experiments showcasing the power and versatility of machine learning algorithms. From simple techniques to more advanced approaches, these experiments offer a glimpse into the exciting world of data analysis and machine learning. Whether you\'re an expert or just starting out, I hope you\'ll find something new and interesting here.',
      },
      pathToMachineLearning: 'artificial-intelligence',
      animation: {
        src_lottie: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
        src_lottie_player: "https://assets7.lottiefiles.com/private_files/lf30_8npirptd.json"
      }
    }
  },
  head() {
    return {
      title: 'Francesco Bosso | Artificial Intelligence',
      meta: [
        {
          hid: 'descriptionAI',
          name: 'description',
          content: 'in the current page all the available works for the Artificial Intelligence section are shown. A brief introductory description of the page is also provided',
        },
        {
          hid: 'keywordsAI',
          name: 'keywords',
          content: [this.tags.toString(), 'Artificial Intelligence', 'Data Analysis'],
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>