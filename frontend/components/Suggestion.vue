<template>
  
<div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 overflow-y-auto h-50">
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Recomendations</h5>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700" v-for="(item, index) in getBooks" :key="index">
            <li class="py-3 sm:py-4 list-content" @click="openBook(item._id)">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" :src="item.image" alt="Neil image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {{ item.title }}
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {{ item.author }}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {{ item.chapter }}
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>

</template>

<script>
import {mapState, mapGetters} from 'vuex';
export default {
    name: 'Suggestion',
    async fetch(){
        await this.$store.dispatch("home/getAllBooks")
    },
    computed:{
        ...mapState({
       books: (state)=> state.home.books
      }),
      ...mapGetters({"getBooks":"home/getBooks"})
    },
    mounted(){
        console.log("suggestion is mounted", this.getBooks)
    },
    methods:{
        openBook(id){
            window.location.href=`/singleManga/${id}`
        }
    }
    
}
</script>

<style scoped>

.list-content{
    cursor: pointer;
    border-bottom: 1px solid black
}

.list-content:hover{
    background-color: #dfe4ed;
    box-shadow: 2px #dfe4ed
}

</style>