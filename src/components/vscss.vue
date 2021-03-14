
<template>
  <div class="wrap">
      <!-- css -->
    <div class="chat-notification">
      <div class="chat-notification-logo-wrapper">
        <img
          class="chat-notification-logo"
          src="../assets/tailwin1.jpg"
          alt="ChitChat Logo"
          width="60px"
        />
      </div>
      <div class="chat-notification-content">
        <h4 class="chat-notification-title">Css code</h4>
        <p class="chat-notification-message">You have a new message!</p>
      </div>
    </div>

    <!-- tailwindcss -->
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center 
    space-x-4 hover:bg-pink-50">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="../assets/tailwin1.jpg" alt="ChitChat Logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">Tailwindcss</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.wrap {
  display: flex;
  width: 1000px;
  margin-top: 200px;
}
.chat-notification {
  display: flex;
  max-width: 24rem;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.chat-notification:hover{
  background-color: rgb(253, 242, 248)
}
.chat-notification-logo-wrapper {
  flex-shrink: 0;
}
.chat-notification-logo {
  height: 3rem;
  width: 3rem;
}
.chat-notification-content {
  margin-left: 1.5rem;
  padding-top: 0.25rem;
}
.chat-notification-title {
  color: #1a202c;
  font-size: 1.25rem;
  line-height: 1.25;
}
.chat-notification-message {
  color: #718096;
  font-size: 1rem;
  line-height: 1.5;
}
</style>