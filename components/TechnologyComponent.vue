<template>
    <div class="row">
     <div class="col">
            <img class="tech-image" width="80" height="80" :src="image" :alt="`image - ${name}`" :title="name">
      </div>
    </div>
</template>

<script>
export default {
    name: 'TechnologyComponent',
    props: {
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
.tech-image {
    object-fit: contain;
}
</style>