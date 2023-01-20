<template>
  <div
    id="toast-simple"
    class="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
    role="alert"
  >
    <svg
      aria-hidden="true"
      class="w-5 h-5 text-blue-600 dark:text-blue-500"
      focusable="false"
      data-prefix="fas"
      data-icon="paper-plane"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      ></path>
    </svg>
    <div class="pl-4 text-sm font-normal">{{ this.message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style></style>
