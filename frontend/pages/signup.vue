<template>
  <div class="main-container">
    <!-- <div class="background-image">
      <NuxtLogo />
    </div> -->
   
    <!-- <div class="card shadow-lg p-3 mb-5 bg-white rounded card-container">
      <h4 class="ml-5">Register and enjoy the virtual paradise</h4>
      <b-form @submit="onSubmit" v-if="show" >
        <b-form-group
          id="input-group-1"
          label="First Name:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.fName"
            type="text"
            placeholder="Enter first name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.lName"
            type="text"
            placeholder="Enter last name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Email address:"
          label-for="input-3"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-3"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4" label="Password:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-5"
          label="upload profle picture:"
          label-for="input-5"
          description="We'll never share your picture with anyone else."
        >
        <b-form-file
        v-model="form.image"
        placeholder="Upload a picture for your profile"
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <div class="mt-3">Selected file: {{ form.image ? form.image.name : '' }}</div>
        </b-form-group>
        <b-button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" variant="primary">Register</b-button>
        <p>Already User ? <span class="span" @click="handleRoute">Sign-in instead</span></p>
      </b-form>
    </div> -->
    <section class="h-screen  shadow-lg ">
      
      <div class="container px-6 py-12 h-full">
        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://i.pinimg.com/originals/22/1c/8e/221c8e898aeee45d6ec6cca3a0fed99e.jpg"
              class="w-full logo-image"
              alt="Phone image"
            />
          </div>
          <div class="md:w-8/12 lg:w-5/12 lg:ml-20 px-5 py-5 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 signup-form">
            <form>
              <!-- Email input -->
              <div class="form-header mb-3">
                <img
              src="https://e1.pngegg.com/pngimages/435/457/png-clipart-noragami-023-circle-icon-noragami-023-anime-character-wearing-black-jacket.png"
              class="form-image"
              alt="Phone image"
              height="80"
              width="80"
            />
              <h2 class="text-gray-900 text-xl leading-tight font-medium mb-1">The Otaku Point....</h2>
              
              </div>
              <div class="mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Enter First Name"
                  v-model="form.fName"
                />
              </div>

              <div class="mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Enter Last Name"
                  v-model="form.lName"
                />
              </div>
              
              <div class="mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Enter Email Address"
                  v-model="form.email"
                />
              </div>
              <!-- Password input -->
              <div class="mb-6">
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Enter The Password"
                  v-model="form.password"
                />
              </div>
            
              
              <div class="mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Profoile picture</label>
                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" @change="handleFile">
              </div>
             
    
              <!-- Submit button -->
              <button
                type="submit"
                class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                @click="onSubmit"
              >
                Sign in
              </button>
              <p>Already User? <a href="/login">Login Here!</a></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NuxtLogo from "../components/NuxtLogo.vue";
import {mapState, mapActions} from 'vuex'
export default {
  auth:false,
  components: {
    NuxtLogo,
  },
  computed:{
    ...mapState({
      userDetails:(state)=> state.signup.userDetails,
      sucess:(state)=> state.signup.success,
    }),
    ...mapActions({
      "getUserDetails": "signup/getUserDetails",
    })
  },
  data() {
    return {
      form: {
        fName: "",
        lName:"",
        email: "",
        password: "",
        image: null
      },
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      console.log("after Updating data", this.form)
      await this.$store.dispatch('signup/getUserDetails', this.form);
      if(this.userDetails !== null){
        this.$router.push('/login')
      }else{
        alert("error in creating new user")
      }
    },
    handleRoute(){
      this.$router.push('/login')
    },
    handleFile(e){
      console.log("file form is triggered", e.target.files[0].name )
      this.form.image = e.target.files[0]
    }
  },
};
</script>

<style scoped>
.card-container {
  width: 50%;
  display: flex;
  margin-top: -48%;
  margin-left: 25%;
}
.span {
  color: blue;
  cursor: pointer;
}
.form-header{
  display: flex !important;
  align-items: center !important;
}
section {
  background-color: #212120;
  background-repeat: no-repeat;
  background-size: cover;
}
.logo-image{
  height: 622px !important;
    border-radius: 36.3px !important;
}
.signup-form{
  background-color: whitesmoke !important;
}
</style>
