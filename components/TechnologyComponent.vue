<template>
    <div class="row">
     <div class="col">
            <img height="80px" :src="image" :alt="`image - ${name}`" :title="name">
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
</style>