<template>
  <!-- this div contains the whole page that is divided in 4 row, one for each main period of the history of Bergamo -->
  <!-- I will comment on the first row, everything is also applied to the remaining 3 rows -->
  <div class="container mt-5">
    <!-- First row - it contains an image (passed in StaticCard Component) and an explaination -->
    <TopPageGeneric :name="info.name" :tags="info.dynTags" :src_lottie="animation.src_lottie"
      :src_lottie_player="animation.src_lottie_player" class="mb-4" />
    <div class="row">
      <!-- the breakpoint is set to lg to better increase responsiveness and UI quality -->
      <!-- the classes order-lg-1 and order-1 are used to allow the alternate visualization of images and text while 
      using desktop version and, at the same time, to allow the mobile versione to always stack the image on top of 
      the explaination (in order to have an appealing and coherent visualization) -->
      <div class="col-lg-5 order-lg-1 order-1">
        <!-- The StaticCardComponent takes an image and, with it, produces a static card (i.e: a non clickable card) -->
        <StaticCardComponent :image="sections.section1.image" />
      </div>
      <!-- for the text, the ordering classes are order-lg-2 and order-2 beacuse this row, both in desktop and mobile,
      visualization, will display first the image and than the text -->
      <div class="col-lg-7 order-lg-2 order-2 align-self-center">
        <h2 class="subtitle">
          Who am I?
          <p class="snippet">
            I’m Francesco Bosso, an AI Research Engineer passionate about building intelligent systems that interpret
            complex data and support real-world applications across domains. I actively collaborate with open research
            communities and contribute to open-source initiatives that advance geospatial and sensing technologies.
            Alongside my technical work, I serve as an expert evaluator for research proposals within the Horizon Europe
            framework, where I assess AI, security, and sustainability projects to help guide strategic funding
            decisions. I am driven by the goal of creating AI solutions that are both scientifically rigorous and
            practically impactful.
          </p>
        </h2>
      </div>
    </div>
    <hr />
    <!-- Second row -->
    <div class="row">
      <!-- here the ordering classes are alternated (order-lg-1 and order-2) because:
      - in desktop the displaying order will be: Text, Image
      - in mobile the displaiyng order will be (as always): Image, Text  -->
      <div class="col-lg-7 order-lg-1 order-2 align-self-center">
        <h2 class="subtitle">What do I do?</h2>
        <p class="snippet">
          My work spans machine learning, geospatial AI, sensing, defence, and space, where I turn research ideas into
          technologies that deliver actionable insights. I have contributed to next-generation aerospace projects such
          as the Global Combat Air Programme (GCAP) and to AI for environmental forecasting and security policy. At the
          European Commission’s Joint Research Centre, I used Large Language Models and geospatial AI to extract
          knowledge from unstructured data and support evidence-based decisions.

          My patent and research focus on cognitive sensing, reinforcement learning, and sensor fusion to integrate
          diverse data into coherent information.
        </p>
      </div>
      <div class="col-lg-5 order-lg-2 order-1">
        <StaticCardComponent :image="sections.section2.image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMePage",
  data() {
    return {
      sections: {
        section1: {
          id: 0,
          image:
            '/about_me/first_image.webp',
        },
        section2: {
          id: 1,
          image: '/about_me/second_image.webp',
          title: '',
        },

      },
      info: {
        name: "About Me",
        description: "",
        dynTags: ['Who am I?', 'What do I do?', 'About Me', 'Geospatial']
      },
      animation: {
        src_lottie: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
        src_lottie_player: "https://assets3.lottiefiles.com/packages/lf20_imsi6g9g.json"
      }
    }
  },
  head() {
    return {
      title: `About Me`,
      meta: [
        {
          hid: 'descriptionAboutMe',
          name: 'description',
          content: `The main idea behind this project`,
        },
        {
          hid: 'keywordsAboutMe',
          name: 'keywords',
          content: ['Who am I?', 'What do I do?', 'Machine Learning', 'Artificial Intelligence', 'ML', 'AI'],
        },
      ],
    }
  },
}
</script>

<style scoped>
.subtitle {
  font-weight: 400;
}
</style>