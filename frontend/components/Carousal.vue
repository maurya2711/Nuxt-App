<template>
  <div class="carousal-card">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      img-height="100"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="The God of High School"
        text="Action, Adventure, and Martial Arts"
        img-src="../assets/images/Goh.jpg"
        class="temp"
      ></b-carousel-slide>
      <!-- <b-carousel-slide
      caption="Solo Leveling"
      img-src="../assets/images/Goh.jpg"
      text="Supernatural, Adventure, and Demons"
      class="temp"
      ></b-carousel-slide>
      <b-carousel-slide
      caption="Begning after the End"
      img-src="../assets/images/Goh.jpg"
      text="Supernatural, Adventure, and Demons"
      class="temp"
    ></b-carousel-slide> -->


     
    </b-carousel>
  
  </div>


</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
    mounted(){
      this.$nextTick(() => {
    this.$nuxt.$loading.start()
    setTimeout(() => this.$nuxt.$loading.finish(), 1000)
  })
    },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style scoped>

.carousel .carousel-inner .carousel-item {
  height: 320px !important;
}

.carousal-card img{
 height: 10px !important;
}

.temp > img{
  height: 400px !important;
}

</style>
