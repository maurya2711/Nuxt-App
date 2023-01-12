<template>
    <transition name="modal-fade">
      <div class="modal-overlay" @click="$emit('close-modal')">
        <div class="popup" @click.stop>
            <h5>Update Details</h5>
            <div class="update-form">
                   <Form />
            </div>
          <button>Go Home</button>
        </div>
        <div class="close" @click="$emit('close-modal')">
          <img class="close-img"  alt="close" />
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  
  export default {
    name: 'Modal',
    data() {
    return {
      show: true,
      form: {
        title: "",
        author: "",
        description: "",
        chapters: "",
        seasons: "",
        tags: "",
        image: null,
        file: null,
      },
    };
  },
  }
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }
  .popup {
    text-align: center;
    background-color: white ! important;
    height: 80% ! important;
    width: 50% ! important;
    margin-top: 3%;
    padding: 60px 0;
    border-radius: 20px;
    overflow-y: auto;
  }
  .close {
    margin: 10% 0 0 16px;
    cursor: pointer;
  }
  .close-img {
    width: 25px;
  }
  .check {
    width: 150px;
  }
  h6 {
    font-weight: 500;
    font-size: 28px;
    margin: 20px 0;
  }
  p {
    /* font-weight: 500; */
    font-size: 16px;
    margin: 20px 0;
  }
  button {
    background-color: #ac003e;
    width: 150px;
    height: 40px;
    color: white;
    font-size: 14px;
    border-radius: 16px;
    margin-top: 50px;
  }
  .update-form{
    margin-left: -195px;
  }
  .update-form :-webkit-scrollbar-track {
    border: 1px solid #000;
    padding: 2px 0;
    background-color: #404040;
  }
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.5s ease;
  }
  </style>