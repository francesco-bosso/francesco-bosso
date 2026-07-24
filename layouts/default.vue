/* ############################## START LAYOUT DESCRIPTION ############################## */

/* this layout is used to render the navbar and the footer in all the pages of the website */

/* ############################## START LAYOUT DESCRIPTION ############################## */
<template>
  <div class="main-page">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <!-- To include the navbar contained in TheHeader component inside all the pages -->
    <TheHeader />
    <!-- To include the content of the page between the Header and the Footer -->
    <Nuxt />
    <!-- To include the Footer component in all the pages -->
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style scoped>
</style>