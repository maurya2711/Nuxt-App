export default {
  async addNewBookDetails({ commit }, bookDetails) {
    console.log(
      "+++++++++++++++++ book added",
      bookDetails,
      this.$auth.$storage.getCookie("token")
    );
    const formData = new FormData();
    formData.append("title", bookDetails.title);
    formData.append("author", bookDetails.author);
    formData.append("description", bookDetails.description);
    formData.append("chapters", bookDetails.chapters);
    formData.append("seasons", bookDetails.seasons);
    formData.append("tags", bookDetails.tags);
    formData.append("image", bookDetails.image);
    formData.append("file", bookDetails.file);
    try {
      const { data } = await this.$axios.post(
        `https://otaku-world.vercel.app/data/`,
        formData,
        {
          headers: {
            "x-access-token": this.$cookiz.get("token")
          },
        }
      );
      console.log("action dispatched in try block", data);

      commit("setNewBookDetails", data.manga);
      commit("setMessage", data.message);
      commit("setApiSuccess", true);
    } catch (e) {
      console.log("error", e);
    }
  },
};
