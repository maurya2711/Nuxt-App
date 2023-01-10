<template>
  <div class="main-container">
    <div class="background-image">
      <NuxtLogo />
    </div>
   
    <div class="card shadow-lg p-3 mb-5 bg-white rounded card-container">
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
    </div>
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
      await this.$store.dispatch('signup/getUserDetails', this.form);
      if(this.userDetails !== null){
        this.$router.push('/login')
      }else{
        alert("error in creating new user")
      }
    },
    handleRoute(){
      this.$router.push('/login')
    }
  },
};
</script>

<style scoped>

.main-container{
  overflow:auto;
}
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
</style>
