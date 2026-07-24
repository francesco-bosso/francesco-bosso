/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component will produce clickable breadcrumbs for easier navigation of the user 
through the website. The required parameters are:
    - the path to be followed for the click of each specific crumb */
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <h6>
    <span v-for="(item, index) in items" :key="index" class="crumb">
      <NuxtLink :to="item.url">
        <span>{{item.label }}</span>
      </NuxtLink>
    </span>
  </h6>
</template>

<script>
// This component is not in layout as not all pages will use it
// also while we could have implemented it thanks to the store it would be the only use of the store and not worth implementing
// just for breadcrumbs
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.crumb {
  display: inline-block;
  position: relative;
  padding: 10px 18px;
  margin-right: 6px;
  background: rgb(58, 133, 166);
  color: #fff;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.crumb:hover {
  background: rgb(41, 96, 120);
}

/* arrow separator between crumbs */
.crumb::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -9px;
  transform: translateY(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: rgb(58, 133, 166);
  border-radius: 3px;
  transition: background 0.3s ease;
}

.crumb:hover::after {
  background: rgb(41, 96, 120);
}

.crumb:last-child::after {
  content: none;
}

.crumb span {
  color: #fff;
}

.crumb a {
  text-decoration: none;
}

h6 {
  margin: 0;
}
</style>
