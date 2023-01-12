<template>
    <div class="books-container" >
      <div v-for="(data,index) in allBooks" :key="index">
        <b-card
          :title="data.title"
          :img-src="data.image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 15rem;"
          class="mb-2 d-flex single-card shadow-lg p-3 mb-5 bg-white rounded"
          @click="handleManga(data._id)"
        >
          <b-card-text>
           
          </b-card-text>
      
        </b-card>
      </div>        
      </div>
</template>

<script>
export default {
  name: 'CardsComponent',
  props:{
    allBooks:Array
  },
  mounted(){
    console.log("in card component", this.allBooks)
  },
  methods:{
    async handleManga(id){
      console.log("handleManga is clicked", id)
      window.location.href=`/singleManga/${id}`
    }
  }
}
</script>

<style scoped>
.single-card{
    height: 85%;
    cursor:pointer
}
.books-container{
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.card-img-top{
 height: 360px;
}
</style>