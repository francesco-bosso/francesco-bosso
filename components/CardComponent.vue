/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component will produce some clickable cards with an embedded image. The required 
parameters are:
    - the image to be displayed;
    - a name describing the content of the image;
    - the parameters creating the path to be followed after clicking the card */
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <NuxtLink :to="`/${path}/${id}`" class="card-container">
    <div class="external">
      <div>
        <img :src="image" class="card-image" :alt="`${name}-image`" />
      </div>
      <div class="description">{{ name }}</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    path: {
      type: String,
      required: false,
    },
    id: {
      type: Number,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
</style>