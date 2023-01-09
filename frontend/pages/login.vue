<template>
  <div class="main-container">
    <NuxtLogo />
  <div class="card shadow-lg p-3 mb-5 bg-white rounded card-container">
    <h4 class="ml-5">Login and start your Journey:-)</h4>
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
    </b-form>
  </div>
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
</style>