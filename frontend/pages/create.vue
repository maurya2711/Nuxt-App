<template>
  <div class="main-container">
    <div class="navbar-wrapper">
      <NavBar />
    </div>
    <div class="add-books w-3/5 rounded overflow-hidden shadow-lg mt-5 m-64">
      <b-form class="p-3" @submit="onSubmit" v-if="show">
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
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters } from "vuex"
export default {
  name: "Create",
  middleware: 'authenticated',
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
    };
  },
  computed:{
    ...mapState({
       message: (state)=> state.addBook.message
      }),
      ...mapGetters({"getMessage":"addBook/getMessage"})
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      await this.$store.dispatch("addBook/addNewBookDetails", this.form)
      console.log("after action dispatch", this.message)
      if(this.message != ""){
       alert("Book added")
      }else{
        alert("Oops! something went wrong")
      }
    },
  },
};
</script>

<style scoped>
 .main-container{
  background: url("https://wallpaperaccess.com/full/39035.jpg");
  overflow-y: auto;
 }
 .add-books{
  background: white
 }
</style>
