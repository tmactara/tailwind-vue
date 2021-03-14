<template>
  <div>
  <div class="h-auto w-full bg-indigo-900 sm:flex sm:justify-between sm:items-center">
    <div class="flex justify-between items-center pb-2 px-5 py-2">
      <div class="text-4xl text-white font-title ">WorkCation</div>
      <div class="iconfont more-bf font-bold text-white pr-2 sm:hidden text-2xl" @click="isOpen=!isOpen"></div>
    </div>
    <div class="absolute sm:static sm:flex sm:items-center px-4 py-2 bg-indigo-900 w-full sm:w-auto" :class="isOpen?'block':'hidden'">
      <div class="px-4 text-white py-2 hover:bg-indigo-500 rounded font-semibold sm:px-2 sm:text-sm xl:text-xl xl:px-4">Home</div>
      <div class="px-4 text-white py-2 hover:bg-indigo-500 rounded font-semibold sm:px-2 sm:text-sm xl:text-xl xl:px-4">List your property</div>
      <div class="px-4 text-white py-2 hover:bg-indigo-500 rounded font-semibold sm:px-2 sm:text-sm xl:text-xl xl:px-4">Tipe</div>
      <div class="px-4 text-white py-2 hover:bg-indigo-500 rounded font-semibold sm:px-2 sm:text-sm xl:text-xl xl:px-4 ">Messages</div>
    </div>
  </div>
  <div class="flex bg-white lg:h-3/4 ">
    <div class="max-w-md m-auto px-10 py-3 sm:px-0 lg:w-full lg:px-10 lg:py-16">
      <div class="flex justify-start items-end">
        <div class="iconfont vacation-bf text-4xl text-indigo-500 font-bold"></div>
        <div class="flex text-2xl ml-3 pt-3 font-semibold">Work<div class="text-indigo-500">cation</div></div>
      </div>
      <img src="../assets/s-1.jpg" alt="" class="mt-5 rounded-lg shadow-lg lg:hidden">
      <h1 class="mt-5 font-bold text-xl leading-tight text-left sm:text-2xl">
        You can word from anywhere.
        <br>
        <span class="text-indigo-500">Take advantage of it.</span>
      </h1>
      <p class="mt-3 text-gray-500 text-left sm:text-lg">Workcation helps you find work-friendly rentals in beautiful location so you can enjoy some nice weather even when you're not on vation.</p>
      <div class="mt-3 flex justify-around md:flex-col">
        <a href="#" class="btn bg-indigo-500 text-white w-max md:mt-2">BOOK YOUR ESCAPE</a>
        <a href="#" class="bg-gray-500 text-white btn w-max md:mt-2">LEARN MORE</a>
      </div>
    </div>
    <div class="w-1/2 hidden lg:block lg:relative">
      <img src="../assets/s-1.jpg" alt="" class="absolute inset-0 w-full h-full object-cover object-center m">
    </div>
  </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      isOpen:false
    }
  }
}

</script>

<style>
</style>