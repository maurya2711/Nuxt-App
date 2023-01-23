<template>
 <div class="homepage-container">
    <div class="navbar-wrapper">
      <NavBar :allBooks="getBooks" />
    </div>
    <div class="main-container" v-if="token !== null">
        <div class=" card shadow-lg p-3 mb-5 bg-white rounded header-card1" >
                  <!-- <Loader /> -->
          <Carousal />
        </div>
        <div class="manga-row card shadow-lg p-3 mb-5 bg-white rounded">
          <h5 class="card shadow-lg p-3 mb-5 bg-white rounded mt-2" >Novels and Manga</h5>
          <MangaCards :allBooks="getBooks" />
        </div>
        
    </div>
    <div v-else>
      Oops no data found.
      <nuxt-link to="/login">Click here to login</nuxt-link>
    </div>
    <Loader v-if="loading"/>
    <Footer />
 </div>
</template>

<script>
 import {mapState, mapGetters, mapActions} from 'vuex'
//  import Loader  from '../components/Loader.vue';
export default {
    name: "IndexPage",
    middleware: 'authenticated',
    computed:{
      ...mapState({
       books: (state)=> state.home.books
      }),
      ...mapGetters({"getBooks":"home/getBooks"})
    },
    data(){
      return {
        token:null,
        loading:true,
        // allBooks:null,
      }
    },
    async mounted() {
        console.log("mounted home page", this.$cookiz.get("token"));
        (this.$cookiz.get("token")) ? this.token= this.$cookiz.get("token") : this.token=null
        this.loading= true;
        console.log("mounted home page", this.getBooks)
        if(this.getBooks){
          this.loading= false;
        }else{
          this.loading= true;
        } 
      //   this.$nextTick(() => {
      // this.$nuxt.$loading.start()
      // this.loading = true
      // setTimeout(() => this.$nuxt.$loading.finish(), 1000)})
    },
    async fetch(){
      (this.$cookiz.get("token")) ? this.token= this.$cookiz.get("token") : this.token=null
        await this.$store.dispatch("home/getAllBooks")
    }
}
</script>

<style scoped>
  .header-card1{
    width: 96%;
    margin-left: 1.5%;
    margin-top: 2%;
    line-height: 0px;
  }
  
  .manga-row{
    width: 96%;
    margin-left: 1.5%;
  }
</style>
