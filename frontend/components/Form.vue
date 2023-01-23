<template>
  <div class="form-customise w-3/5 rounded overflow-hidden shadow-lg mt-5 m-64">
    <!-- <b-form class="p-3" @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Book/Manga Name:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.title"
              type="text"
              placeholder="Enter name of book/manga"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Author's Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.author"
              type="text"
              placeholder="Enter author name"
              required
            ></b-form-input>
          </b-form-group>
  
          <b-form-group
            id="input-group-3"
            label="Description:"
            label-for="input-3"
            description="Please review the book/Manga"
          >
          <b-form-textarea
          id="textarea"
          v-model="form.description"
          placeholder="Describe book here..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
          </b-form-group>
          <b-form-group id="input-group-4" class="chapters" label="Chapters and Seasons:" label-for="input-4">
            <div class="d-flex">
            <b-form-input
              id="input-4"
              v-model="form.chapters"
              type="text"
              placeholder="Enter Number of Chapter"
              required
            ></b-form-input>
            <b-form-input
            id="input-4"
            v-model="form.seasons"
            type="text"
            placeholder="Enter how many seasons of books"
            required
          ></b-form-input>
        </div>
          </b-form-group>
          <b-form-group  label="Genre/ Tags:" >
            <b-form-input
              id="input-4"
              v-model="form.tags"
              type="text"
              placeholder="Give Genre to this book"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-5"
            label="Upload image of Book"
            label-for="input-5"
            description="Upload image of Book"
          >
            <b-form-file
              v-model="form.image"
              placeholder="Upload a picture for the book"
              drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="mt-3">
              Selected file: {{ form.image ? form.image.name : "" }}
            </div>
          </b-form-group>
          <b-form-group
            id="input-group-5"
            label="Upload pdf of Book"
            label-for="input-5"
            description="Please Upload PDF of Book"
          >
            <b-form-file
              v-model="form.file"
              placeholder="Upload pdf of the book"
              drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="mt-3">
              Selected file: {{ form.file ? form.file.name : "" }}
            </div>
          </b-form-group>
          <b-button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            variant="primary"
            >Add Book</b-button
          >
        </b-form>
         -->
    <p class="font-sans font-medium rounded-md update-head">Update Details</p>
    <form class="shadow-md mt-4 p-5">
      <b-form-group
        id="input-group-1"
        label="Book/Manga Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Author's Name:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.author"
          type="text"
          placeholder="Enter author name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Description:"
        label-for="input-3"
        description="Please review the book/Manga"
      >
        <b-form-textarea
          id="textarea"
          v-model="form.description"
          placeholder="Describe book here..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        class="chapters"
        label="Chapters and Seasons:"
        label-for="input-4"
      >
        <div class="d-flex">
          <b-form-input
            id="input-4"
            v-model="form.chapters"
            type="text"
            placeholder="Enter Number of Chapter"
          ></b-form-input>
          <b-form-input
            id="input-4"
            v-model="form.seasons"
            type="text"
            placeholder="Enter how many seasons of books"
          ></b-form-input>
        </div>
      </b-form-group>
      <b-form-group label="Genre/ Tags:">
        <b-form-input
          id="input-4"
          v-model="form.tags"
          type="text"
          placeholder="Give Genre to this book"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-5"
        label="Upload image of Book"
        label-for="input-5"
        description="Upload image of Book"
      >
        <b-form-file
          v-model="form.image"
          placeholder="Upload a picture for the book"
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="mt-3">
          New Image: {{ form.image ? form.image.name : "" }}
        </div>
      </b-form-group>
      <b-form-group
        id="input-group-5"
        label="Upload pdf of Book"
        label-for="input-5"
        description="Please Upload PDF of Book"
      >
        <b-form-file
          v-model="form.file"
          placeholder="Upload pdf of the book"
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="mt-3">
          New File: {{ form.file ? form.file.name : "" }}
        </div>
      </b-form-group>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="onSubmit"
        >
        Update
      </button>
      <button
        type="button"
        class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        @click="handleClose"
      >
        Close
      </button>
    </form>
  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex"
export default {
  name: "Form",
  props: {
    singleData: Object,
  },
  computed:{
    ...mapState({
      message: (state)=> state.addBook.message
      }),
      ...mapGetters({"getMessage": "addBook/getMessage",
    "getSuccess": "addBook/getSucess"}),
  },
  data() {
    return {
      show: true,
      form: {
        title: "",
        author: "",
        description: "",
        chapters: "",
        seasons: "",
        tags: "",
        image: null,
        file: null,
      },
      id:null,
    };
  },
  mounted(){
    this.form.title=this.singleData.title
    this.form.author=this.singleData.author
    this.form.description=this.singleData.description
    this.form.chapters=this.singleData.chapters
    this.form.seasons=this.singleData.seasons
    this.id=this.singleData._id
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      console.log("update form data", this.form)
      let updatedData={
        updatedData: this.form,
        id: this.id
      }
      await this.$store.dispatch('addBook/updateBookDetails', updatedData)
      if(this.getSuccess){
       alert("Data updated successfully")
       window.location.reload()
      }
    },
    handleClose(id){
      window.location.reload()
      // window.location.href=`/singleManga/${id}`
    }
  },
};
</script>

<style scoped>
.form-customise {
  padding: 40px !important;
}

.update-head {
  margin-left: 40%;
}
</style>
