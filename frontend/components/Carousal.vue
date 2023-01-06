<template>
  <div class="carousal-card">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="100"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="The God of High School"
        text="Action, Adventure, and Martial Arts"
        img-src="https://cdn.myanimelist.net/images/anime/1170/108085l.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
        caption="Solo Leveling"
        img-src="https://m.media-amazon.com/images/I/81shyf5cV9L.jpg"
        text="Supernatural, Adventure, and Demons"
      >
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        caption="Begning after the End"
        img-src="https://m.media-amazon.com/images/I/81eqlOf4owL.jpg"
        text="Supernatural, Adventure, and Demons"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100 img"
            width="1024"
            height="480"
            src="https://img.webnovel.com/bookcover/18835731205229805/180/180.jpg?updateTime=1630604819703"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
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
  //   mounted(){
  //     this.$nextTick(() => {
  //   this.$nuxt.$loading.start()
  //   setTimeout(() => this.$nuxt.$loading.finish(), 1000)
  // })
  //   },
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
.carousel {
  height: 300px !important /* Set the height here */
}
.carousal-card{
  max-height: 400px !important;
}
.carousel-inner {
  width: 100%;
  max-height: 300px !important;
}
.img{
  max-height:300px !important
}
.carousel-item {
  height: 300px !important;
  object-fit: cover;
}
.carousel-item img {
  max-height: 300px !important;
}
</style>
