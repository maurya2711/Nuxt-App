<template>
  <div class="open-pdf-container">
    <iframe :src="this.pdfSource" width="700"
    height="700"
    
    style="border: 1px solid #EEE; background: white"
    frameborder="0"
    />
  </div>
</template>

<script>
export default {
    name: "OpenPdf",
    props:{
        pdfSource: String
    },
    mounted(){
        console.log("OpenPdf component", this.pdfSource)
    }
}
</script>

<style>

</style>