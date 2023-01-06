<template>
    <div class="main-container">
        <div class="navbar-wrapper">
            <NavBar />
        </div>
  <div class="add-books w-3/5 rounded overflow-hidden shadow-lg mt-5 m-64">
    <form class="p-5">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="Book Name">Name of Book</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email the name of book" >
          </div>
          <div class="form-group col-md-6">
            <label for="Author of the book">Name of Author</label>
            <input type="text" class="form-control" id="inputPassword4" placeholder="Enter the name of the author">
          </div>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Give a breif summary about this book"/>
        </div>
        <div class="form-group">
          <label for="inputAddress2">Your Review about this book</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Please give review of this book">
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Genre</label>
            <input type="text" class="form-control" id="inputCity"  placeholder="Enter the genre of this book" >
          </div>
          <div class="form-group col-md-4">
            <label for="chapters">Number Of Chapters</label>
            <input id="inputState" class="form-control" placeholder="Enter number of chapters" />
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="file" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
             
            </label>
          </div>
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</button>
      </form>
  </div>
  </div>
</template>

<script>
export default {
    name: "Create"
}
</script>

<style>

</style>