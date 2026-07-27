/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used for the creation of the top part of the event page. It aggregates two 
different components (StaticCardComponent and TitleDescription) in a single one in order to 
create a big row containing: 
    - An image (not clickable, not interactive) wich is evocative  the specific event 
      [StaticCardComponent] ;
    - A "Title + Description" section in order to describe the event 
      [TitleDescritpion]

The required parameters are:
    - The image of the specific event;
    - The Name and Description of the specific event;*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-xxl-6 order-xxl-1 order-2">
        <!-- here the image is passed inside the StaticCardComponent in order to be displayed -->
        <StaticCardComponent :image="image" />
      </div>
      <div class="col-xxl-6 order-xxl-2 order-1">
        <!-- here Title and Description are passed inside TitleDescription in order to create the 
        descriptive section of the top part of the Event Page -->
        <TitleDescription :name="name" :description="description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopWorkDescriptionComponent',
  props: {
    image: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
}
</script>

<style scoped>
</style>