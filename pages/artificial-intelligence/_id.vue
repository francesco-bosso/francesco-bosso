/* Page for the individual EVENT */
<template>
  <!-- class container in order to center the contend -->
  <!-- class mt-5 in order to heva a margin top of 5 units -->
  <div class="container mt-5">
    <!-- this component will include the breadcrumps in the page -->
    <BreadCrump :items="breadcrumps" />
    <!-- this component creates the entire "first row" of the page 
    composed of Title, Description and Image related to the selected event -->
    <TopWorkDescription
      :image="work.image"
      :name="work.name"
      :description="work.description"
      :url="work.url"
      :finished="work.finished"
    />
    <hr />
    <div class="row">
      <div class="col center">
        <p class="subtitle">Technologies</p>
        <div class="row justify-content-center">
          <TechnologyComponent
            v-for="technology in [...work.technologies].reverse()"
            :key="technology.id"
            class="col m-2"
            :image="technology.image"
            :name="technology.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrump from '~/components/BreadCrump.vue'
import TechnologyComponent from '~/components/TechnologyComponent.vue'
import {
  buildSeoMeta,
  buildBreadcrumbList,
  absoluteUrl,
  truncate,
} from '~/utils/seo'
export default {
  name: 'SingleGeospatialWork',
  components: {
    BreadCrump,
    TechnologyComponent,
  },

  async asyncData({ route, $axios }) {
    // Get the id of the event to show from route
    const { id } = route.params
    // Make api call for data
    const { data } = await $axios.get('/api/machineLearning-work/' + id)

    const icons = []
    for (let i = 0; i < data.technologies.length; i++) {
      const code = data.technologies[i].codeTech
      const nome = data.technologies[i].name
      const element = data.technologies[i].image
      icons.push({ id: code, name: nome, image: element })
    }

    return {
      // parse received data (event data and season name for readable bredcrumbs)
      work: {
        id: data.codeWork,
        name: data.name,
        image: data.image,
        description: data.description,
        technologies: icons,
        url: data.url,
        finished: data.finished,
        short: data.shortName,
      },
    }
  },
  data() {
    return {
      // its used to reroute when a card is pressed
      path: 'all-places',
    }
  },
  head() {
    const title = ` ${this.work.short} | Artificial Intelligence`
    const description =
      truncate(this.work.description) ||
      `${this.work.short}: an Artificial Intelligence project by Francesco Bosso.`
    const image = absoluteUrl(this.work.image)
    const seo = buildSeoMeta({
      path: this.$route.path,
      title,
      description,
      image,
      type: 'article',
    })
    return {
      title,
      link: seo.link,
      meta: [
        {
          hid: 'descriptionSingleAI',
          name: 'description',
          content: description,
        },
        ...seo.meta,
        {
          hid: 'keywordsSingleAI',
          name: 'keywords',
          content: [
            'Artificial Intelligence',
            'Data analysis',
            'Mapflap',
            this.work.short,
            this.work.technologies,
          ],
        },
      ],
      script: [
        buildBreadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Artificial Intelligence', path: '/artificial-intelligence' },
          { name: this.work.short, path: this.$route.path },
        ]),
      ],
    }
  },
  computed: {
    // define breadcrumbs routes
    breadcrumps() {
      return [
        {
          label: 'Artificial Intelligence',
          url: '/artificial-intelligence',
        },
      ]
    },
  },
}
</script>

<style scoped>
.sub-sub-title {
  font-weight: 600;
}

.center {
  text-align: center;
}
</style>
