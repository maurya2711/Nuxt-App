<template>
  <div class="main-container">
    <!-- <NuxtLogo /> -->
  <!-- <div class="card shadow-lg p-3 mb-5 bg-white rounded card-container"> -->
    <!-- <h4 class="ml-5">Login and start your Journey:-)</h4>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
      id="input-group-2"
      label="Password:"
      label-for="input-2"
    >
      <b-form-input
        id="input-2"
        v-model="form.password"
        type="password"
        placeholder="Enter your password"
        required
      ></b-form-input>
    </b-form-group>

     
      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Remember me</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" variant="primary ">Login</b-button>
      <p > New Here Click Here for <span class="span" @click="handleRoute">Sign Up</span></p>
    </b-form> -->
    
    <section class="h-screen  shadow-lg ">
      
      <div class="container px-6 py-12 h-full">
        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://cdn.shopify.com/s/files/1/2491/1072/products/81wcnmytYaL._SL1500_480x480.jpg?v=1660720284"
              class="w-full"
              alt="Phone image"
            />
          </div>
          <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
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
                  placeholder="Email address"
                  v-model="form.email"
                />
              </div>
    
              <!-- Password input -->
              <div class="mb-6">
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  v-model="form.password"
                />
              </div>
    
              <div class="flex justify-between items-center mb-6">
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                    checked
                  />
                  <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                    >Remember me</label
                  >
                </div>
                <a
                  href="#!"
                  class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                  >Forgot password?</a
                >
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
              <p>Don't Have Account? <a href="/signup">Register Here!</a></p>
              <div
                class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
              >
                <p class="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
    
              <a
                class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style="background-color: #3b5998"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <!-- Facebook -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="w-3.5 h-3.5 mr-2"
                >
                  <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  /></svg>Continue with Facebook
              </a>
              <a
                class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                style="background-color: #55acee"
                href="#!"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <!-- Twitter -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-3.5 h-3.5 mr-2"
                >
                  <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  /></svg>Continue with Twitter
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  <!-- </div> -->
</div>
</template>

<script>
import NuxtLogo from '../components/NuxtLogo.vue'
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    auth:false,
    components:{
      NuxtLogo
    },
    computed:{
      ...mapState(
        {
          token: (state) => state.login.token,
          success: (state) => state.login.success
        }
      ),
      ...mapGetters({
        counter: 'login/getCount',
        successGetter: 'login/getSuccess'
      }),
      ...mapActions({"getToken":"login/getToken"})
    },
    mounted(){
      console.log("mounted", this)
    },
    data() {
      return {
        form: {
          email:'',
          password: '',
        },
        show: true
      }
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault()
        await this.$store.dispatch('login/getToken', this.form);
        if(this.token !== null){
          this.$router.push('/')
        }else{
          alert("Invalid Credentials")
        }
      },
      handleRoute(){
        this.$router.push('/signup')
      }
    }
  }
</script>

<style scoped>
  
  .card-container{
    width: 50%;
    display: flex;
    margin-top: -45%;
    margin-left: 25%;
  }
  .span{
    color: blue;
    cursor: pointer;
  }
  .form-header{
    display: flex !important;
    align-items: center !important;
  }
</style>