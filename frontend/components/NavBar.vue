<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="dark">
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
              class="mr-sm-2 input"
              placeholder="Search"
              v-model="serach"
              v-on:input="searchBook"
            ></b-form-input>
            <div class="suggest" v-if="typing && toSearch !== ''">
              <li
                class="list-val"
                v-for="(book, index) in result"
                :key="index"
                @click="selectBook(book._id)"
              >
                {{ book.title }}
              </li>
            </div>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="button"
              @click="handleSearch"
              >Search</b-button> 
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
import { mapState, mapGetters } from "vuex";
export default {
  name: "Navbar",
  props: {
    allBooks: Array,
  },
  data() {
    return {
      serach: "",
      result: null,
      typing: false,
      toSearch: "",
    };
  },
  computed: {
    ...mapState({
      serachResult: (state) => state.navbar.serachResult,
    }),
  },
  mounted() {
    console.log("========NAVBAR", this.allBooks);
  },
  methods: {
    searchBook() {
      this.typing = true;
      this.result = this.allBooks.filter((item, index) => {
        return item.title.toLowerCase().includes(this.serach.toLowerCase());
      });
      this.toSearch = this.serach;
    },
    async handleSearch() {
      await this.$store.dispatch("navbar/getSearchedBook", this.toSearch);
      if (this.result.length !== 0) {
        window.location.href = `/singleManga/${this.result[0]._id}`;
      } else {
        alert("Oops! Sorry this book is not available at the moment.");
      }
    },
    selectBook(item) {
      window.location.href = `/singleManga/${item}`;
    },
  },
}
</script>

<style scoped>
.logo {
  height: 40px;
  width: 69px;
  border-radius: 80px;
}
.suggest {
  position: absolute;
  top: 64px;
  border-radius: 2px;
  width: 198px;
  background: white;
  z-index: 2;
}
.input {
  position: relative !important;
}
.list-val {
  border-bottom: solid 1px grey;
  padding: 5px;
  cursor: pointer;
}
.suggest {
  position: absolute;
  top: 64px;
  border-radius: 2px;
  width: 198px;
  background: white;
  z-index: 2;
}
.input {
  position: relative !important;
}
.list-val {
  border-bottom: solid 1px grey;
  padding: 5px;
  cursor: pointer;
}

</style>
