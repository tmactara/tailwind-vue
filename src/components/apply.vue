
<template>
  <div class=" mt-40 ml-32">
    <div class="flex w-5/12 justify-between mx-24 my-6">
      <button class="btn btn-blue">button</button>
      <button class="btn btn-blue">button</button>
      <button class="btn btn-blue">button</button>
      <button class="btn btn-blue">button</button>
      <button class="btn btn-blue">button</button>
    </div>
    <div class="flex w-5/12 justify-between mx-24 my-6">
      <button class="btn btn-pink">button</button>
      <button class="btn btn-pink">button</button>
      <button class="btn btn-pink">button</button>
      <button class="btn btn-pink">button</button>
      <button class="btn btn-pink">button</button>
    </div>
    <div class="flex w-5/12 justify-between mx-24 my-6">
      <button class="btn btn-yellow">button</button>
      <button class="btn btn-yellow">button</button>
      <button class="btn btn-yellow">button</button>
      <button class="btn btn-yellow">button</button>
      <button class="btn btn-yellow">button</button>
    </div>
    <div class="flex w-5/12 justify-between mx-24 my-6">
      <button class="btn btn-red">button</button>
      <button class="btn btn-red">button</button>
      <button class="btn btn-red">button</button>
      <button class="btn btn-red">button</button>
      <button class="btn btn-red">button</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {

    };
  },
  mounted() {},
};
</script>
<style>
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 hover:bg-blue-700 text-white;
  }
  .btn-pink {
    @apply bg-pink-500 hover:bg-pink-700 text-white;
  }
  .btn-yellow {
    @apply bg-yellow-500 hover:bg-yellow-700 text-white;
  }
  .btn-red {
    @apply bg-red-500 hover:bg-red-700 text-white;
  }
</style>