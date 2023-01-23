<template>
  <div class="single-manga-container">
   
    <div class="navbar-wrapper">
      <NavBar />
    </div>
    <div class="manga-container d-flex">
      
      <div
        class="single-manga-content flex flex-col items-center bg-white border rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <Loader v-if="loading"/>
        
        <div class="max-w-sm w-full lg:max-w-full lg:flex" v-else>
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden mt-5 ml-3"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              :src="getSingleManga.image"
              alt="manga-imahe"
            />
          </div>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <div class="mb-8">
              <p class="text-sm text-gray-600 flex items-center">
                <svg
                  class="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  />
                </svg>
                Members only
              </p>
              <button
                class="px-3 py-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 update-btn"
                @click="handleUpdate"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  class="w-4 h-4 mr-2 -ml-1"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  ></path>
                </svg>
                Update
              </button>

              <div class="title-div text-gray-900 font-bold text-xl mb-2">
                {{ getSingleManga.title }}
              </div>
              <p class="text-gray-700 text-base">{{ this.description }}</p>
            </div>
            <div class="flex items-center">
              <img
                class="w-10 h-10 rounded-full mr-4"
                src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg"
                alt="Avatar of Jonathan Reinink"
              />
              <div class="text-sm">
                <div>
                  <p class="text-gray-900 leading-none">
                    {{ getSingleManga.author }}
                  </p>
                  <p class="text-gray-600">Aug 18</p>
                </div>
                <div v-for="(item, index) in getSingleManga.tags" :key="index">
                  <span
                    class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
                    >{{ item }}</span
                  >
                </div>
              </div>
              <div class="btn d-flex buttons">
                <button
                  class="px-3 py-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                  @click="openPdf"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    class="w-4 h-4 mr-2 -ml-1"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    ></path>
                  </svg>
                  Read
                </button>
                <button
                  class="px-3 py-2 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                  @click="handleDownload(getSingleManga.file)"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    class="w-4 h-4 mr-2 -ml-1"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    ></path>
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="suggestions-container">
        <Suggestion />
      </div>
    </div>

    <div
      id="openpdf"
      class="card-content card flex items-center shadow-xl"
      v-if="pdfShow"
    >
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded dark:bg-gray-700 dark:text-blue-400 hover:border-blue-400 ml-5"
        v-if="pdfShow"
        @click="closePdf"
      >
        Stop Reading
      </button>
      <OpenPdf :pdfSource="getSingleManga.file" />

    </div>
    <div id="update" class="update-data" v-show="openModal && !pdfShow">

      <Form :singleData="getSingleManga"/>
    </div>
    <Footer />
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import {
  silentPatient,
  percyJackson,
  harryPotter,
  nameOfTheWind,
  theVinciCode,
  americanPsycho,
  theWitcher,
  you,
} from "../../description.js";
import OpenPdf from "../../components/OpenPdf.vue";
import { saveAs } from "file-saver";
export default {
  name: "IndexPage",
  auth: false,
  data() {
    return {
      token: null,
      description: null,
      pdfShow: false,
      update: false,
      openModal: false,
      loading:true,
    };
  },
  computed: {
    ...mapState({
      singleManga: (state) => state.singleManga.singleManga,
    }),
    ...mapGetters({
      getSingleManga: "singleManga/getSingleManga",
      getMessage: "singleManga/getMessage",
    }),
  },
  mounted(){
    console.log("mounted+++++++++++++++", this.getSingleManga)
    if(this.getSingleManga){
      console.log("in if block")
      this.loading=false;
    }else{
      this.loading=true;
    }
    
  },

  async fetch() {
    this.$auth.$storage.getCookie("token")
      ? (this.token = this.$auth.$storage.getCookie("token"))
      : (this.token = null);
    this.data = await this.$store.dispatch(
      "singleManga/getSingleManga",
      this.$route.params.id
    );
    if (this.getSingleManga.title === "The Silent Patient") {
      this.description = silentPatient;
    } else if (this.getSingleManga.title === "You") {
      this.description = you;
    } else if (this.getSingleManga.title === "Percy jackson") {
      this.description = percyJackson;
    } else if (this.getSingleManga.title === "Harry Potter") {
      this.description = harryPotter;
    } else if (this.getSingleManga.title === "The name of the wind") {
      this.description = nameOfTheWind;
    } else if (this.getSingleManga.title === "The Vinci code") {
      this.description = theVinciCode;
    } else if (this.getSingleManga.title === "American Psycho") {
      this.description = americanPsycho;
    } else if (this.getSingleManga.title === "The Witcher") {
      this.description = theWitcher;
    } else {
      this.description = "";
      margin - top;
    }
  },
  components: { OpenPdf },
  methods: {
    openPdf() {
      this.pdfShow = true;
      window.location.href = "#openpdf";
    },
    closePdf() {
      this.pdfShow = false;
      window.location.href = `/singleManga/${this.getSingleManga._id}`;
    },
    handleUpdate() {
      this.update = true;
      window.location.href = "#update";
      this.openModal = true;
    },
    async handleDownload(file) {
      saveAs(file, "download.pdf");
    },
  },
};
</script>
<style scoped>
.single-manga-container{
  height: 100% !important;
  overflow-y: hidden
}

.single-manga-content {
  width: 900px !important;
  height: fit-content !important;
}
.manga-container {
  justify-content: space-between;
  margin-top: 4%;
  margin-left: 5%;
  max-height: 500px !important;
}
.suggestions-container {
  margin-right: 5%;
  height: 860px !important;
}

.update-btn {
  margin-left: 71%;
  margin-top: -10px;
}

.title-div {
  margin-top: -20px;
}
.buttons {
  margin-left: 11%;
}
</style>
