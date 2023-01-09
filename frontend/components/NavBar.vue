<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <img
          src="https://e1.pngegg.com/pngimages/435/457/png-clipart-noragami-023-circle-icon-noragami-023-anime-character-wearing-black-jacket.png"
          alt="Otaku's"
          class="logo"
        />
        Otaku's
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="/"> Home</b-nav-item>
          <b-nav-item href="/"> Manga</b-nav-item>
          <b-nav-item href="/novels"> Novels</b-nav-item>
          <b-nav-item href="/create"> Creator Section</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              v-model="serach"
              v-on:input="searchBook"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="handleLogout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props:{
    allBooks: Array
  },
  data(){
    return{
      serach:'',
      result: null,
    }
  },
  mounted(){
    console.log("========NAVBAR",this.allBooks)
  },
  methods: {
    searchBook(){
      console.log("onChange is triggered", this.serach)
      this.result = this.allBooks.filter((item,index)=>{
        return item.title.toLowerCase().includes(this.serach.toLowerCase())
      })

      console.log("after search is triggered", this.result)
    },
    handleLogout() {
      this.$cookiz.remove("token");
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.logo {
  height: 40px;
  width: 69px;
  border-radius: 80px;
}
</style>
