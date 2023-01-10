<template>
   <div class="single-manga-container">
    <div class="navbar-wrapper">
      <NavBar />
    </div>
    <div class="single-manga-content mt-5 ml-5 shadow-xl">
      <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  >
          <img class="mt-2 shadow-xl" :src="getSingleManga.image" alt="manga-imahe" />
        </div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <p class="text-sm text-gray-600 flex items-center">
              <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div class="text-gray-900 font-bold text-xl mb-2">{{getSingleManga.title}}</div>
            <p class="text-gray-700 text-base">{{this.description}}</p>
          </div>
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" alt="Avatar of Jonathan Reinink">
            <div class="text-sm">
              <div>
              <p class="text-gray-900 leading-none">{{getSingleManga.author}}</p>
              <p class="text-gray-600">Aug 18</p>
            </div>
            <div v-for="(item, index) in getSingleManga.tags" :key="index">
              <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{{item}}</span>
            </div>
            </div>
            <div class="btn d-flex">
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded dark:bg-gray-700 dark:text-blue-400 hover:border-blue-400 ml-5" @click="openPdf">Read Now</button>
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded dark:bg-gray-700 dark:text-blue-400 hover:border-blue-400 ml-5" @click="handleDownload(getSingleManga.file)">Download</button>
              <div class="update-section ml-4">
                <small class="update-text">Want to Update this book? <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded dark:bg-gray-700 dark:text-blue-400 hover:border-blue-400 ml-5" @click="handleUpdate">Update</button>
                </small>
              </div>
             
            </div> 
          </div>
        </div>
      </div>
    </div>
   
    <div id="openpdf" class="card-content card flex items-center shadow-xl" v-if="pdfShow">
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded dark:bg-gray-700 dark:text-blue-400 hover:border-blue-400 ml-5" v-if="pdfShow" @click="closePdf">Stop Reading</button>
       <OpenPdf :pdfSource="getSingleManga.file" />
    </div>
   </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import {silentPatient, percyJackson, harryPotter, nameOfTheWind, theVinciCode, americanPsycho, theWitcher,you} from '../../description.js'
import OpenPdf from '../../components/OpenPdf.vue'
export default {
    name: "IndexPage",
    auth: false,
    data() {
        return {
            token: null,
            description: null,
            pdfShow: false,
            update: false

        };
    },
    computed: {
        ...mapState({
            singleManga: (state) => state.singleManga.singleManga
        }),
        ...mapGetters({ "getSingleManga": "singleManga/getSingleManga", "getMessage": "singleManga/getMessage" })
    },

    async fetch() {
        (this.$auth.$storage.getCookie("token")) ? this.token = this.$auth.$storage.getCookie("token") : this.token = null;
         this.data= await this.$store.dispatch("singleManga/getSingleManga", this.$route.params.id);
        if (this.getSingleManga.title === 'The Silent Patient') {
          this.description = silentPatient;
        }else if (this.getSingleManga.title === 'You'){
          this.description = you;
        }
        else if (this.getSingleManga.title === 'Percy jackson'){
          this.description = percyJackson;
        }
        else if (this.getSingleManga.title === 'Harry Potter'){
          this.description = harryPotter;
        }
        else if (this.getSingleManga.title === 'The name of the wind'){
          this.description = nameOfTheWind;
        }
        else if (this.getSingleManga.title === 'The Vinci code'){
          this.description = theVinciCode;
        }
        else if (this.getSingleManga.title === 'American Psycho'){
          this.description = americanPsycho;
        }
        else if (this.getSingleManga.title === 'The Witcher'){
          this.description = theWitcher;
        }
        else{
          this.description = ''
        }

        
    },
    components: { OpenPdf },
    methods: {
            openPdf() {
                this.pdfShow = true;
                window.location.href="#openpdf"
            },
            closePdf() {
                this.pdfShow = false;
                window.location.href=`/singleManga/${this.getSingleManga._id}`
            },
            handleUpdate(){
                this.update = true;
            },
            async handleDownload(file){
              console.log("download button clicked", file, this.$route.params.id);
              let details={
                id: this.$route.params.id,
                file: file
              }
              await this.$store.dispatch("singleManga/downloadBook", details);

            }
          },
}  
</script>
<style scoped>
.update-modal{
  z-index: 1;
}
</style>

