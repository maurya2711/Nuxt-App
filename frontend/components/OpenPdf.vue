<template>
  <div class="open-pdf-container">
    <iframe :src="this.pdfSource" class="iframe-container"
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

<style scopped>
.open-pdf-container{
    width: 100%;
    height: 100%;
  }
.iframe-container{
  width: 100% !important;
 
}
</style>